const { ChannelType } = require('discord.js');

/**
 * MessageHandler
 * Processes queued Discord messages, sends them to OpenWebUI, stores results in local memory, and replies.
 */
class MessageHandler {
  constructor(openwebui, configManager) {
    this.openwebui = openwebui;
    this.configManager = configManager;
    this._getChannelFn = null; // injected function to fetch channels
  }

  async handle(queueItem) {
    try {
      console.log(`🔄 Processing queue item: DM=${queueItem.isDM}, Channel=${queueItem.channelId}, Message=${queueItem.messageId}`);

      const channel = await this.getChannel(queueItem.channelId);
      if (!channel) throw new Error(`Channel not found: ${queueItem.channelId}`);

      let message;
      try {
        message = await channel.messages.fetch(queueItem.messageId);
      } catch (err) {
        throw new Error(`Message not found: ${queueItem.messageId}`);
      }

      // If admin-only mode is active, block non-admin users with a maintenance notice
      try {
        const adminOnly = this.configManager.getAdminOnly && this.configManager.getAdminOnly();
        const authorId = message.author.id;
        if (adminOnly && !this.configManager.isAdmin(authorId)) {
          const notice = '⚠️ The bot is currently in Admin-only mode for maintenance. Please try again later.';
          if (message.channel && (message.channel.type === ChannelType.DM || message.channel.type === 1 || String(message.channel.type).toUpperCase() === 'DM')) {
            await channel.send({ content: notice });
          } else {
            await message.reply({ content: notice, allowedMentions: { repliedUser: false } });
          }
          console.log(`⛔ Message from ${authorId} blocked due to Admin-only mode`);
          return;
        }
      } catch (err) {
        console.error('❌ Error checking admin-only mode:', err?.message || err);
      }

      console.log(`📝 Message found: "${message.content.substring(0, 50)}..."`);
      await channel.sendTyping();

      const { formatted, content } = this.formatMessageWithMetadata(message);

      const contextMode = queueItem.isDM ? 'private' : this.configManager.getContextMode();
      const systemPrompt = this.configManager.getSystemPrompt();
      const webUIConfig = this.configManager.getOpenWebUIConfig();

      const chatInfo = this.openwebui.getOrCreateChat(
        message.author.id,
        message.author.username,
        contextMode
      );

      console.log(`💬 Chat ID: ${chatInfo.id} (${chatInfo.title})`);

      const chatHistory = this.openwebui.getChatHistory(chatInfo.id);
      console.log(`📚 Loaded ${chatHistory.length} messages from local memory`);

      const response = await this.openwebui.chat(formatted, systemPrompt, chatHistory);

      // persist messages
      this.openwebui.saveMessage(chatInfo.id, 'user', content, {
        author: message.author.username,
        authorId: message.author.id,
        channel: message.channel.name || message.channelId,
        timestamp: message.createdTimestamp,
      });

      this.openwebui.saveMessage(chatInfo.id, 'assistant', response, {
        model: webUIConfig.model,
        timestamp: Date.now(),
      });

      console.log('💾 Messages saved to local memory');

      const formattedResponses = this.formatResponseForDiscord(response);

      // send replies (first message as reply/send, following as follow-ups)
      if (Array.isArray(formattedResponses)) {
        let firstReply = null;
        for (let i = 0; i < formattedResponses.length; i++) {
          const resp = formattedResponses[i];
          if (i === 0) {
            if (message.channel && (message.channel.type === ChannelType.DM || message.channel.type === 1 || String(message.channel.type).toUpperCase() === 'DM')) {
              firstReply = await channel.send({ content: resp });
            } else {
              firstReply = await message.reply({ content: resp, allowedMentions: { repliedUser: false } });
            }
          } else {
            if (message.channel && (message.channel.type === ChannelType.DM || message.channel.type === 1 || String(message.channel.type).toUpperCase() === 'DM')) {
              await channel.send({ content: resp });
            } else {
              await firstReply.reply({ content: resp, allowedMentions: { repliedUser: false } });
            }
          }
        }
      } else {
        if (message.channel && (message.channel.type === ChannelType.DM || message.channel.type === 1 || String(message.channel.type).toUpperCase() === 'DM')) {
          await channel.send({ content: formattedResponses });
        } else {
          await message.reply({ content: formattedResponses, allowedMentions: { repliedUser: false } });
        }
      }

      const stats = this.openwebui.getChatStats(chatInfo.id);
      console.log('📊 Chat statistics:', stats);
    } catch (error) {
      console.error('❌ Error processing message:', error.message);
      try {
        const channel = await this.getChannel(queueItem.channelId);
        const message = await channel.messages.fetch(queueItem.messageId);
        await message.reply({ content: '❌ There was an error processing your message. Please try again later.', allowedMentions: { repliedUser: false } });
      } catch (replyError) {
        console.error('❌ Error sending error reply:', replyError.message);
      }
      throw error;
    }
  }

  formatMessageWithMetadata(message) {
    const metadata = {
      author: message.author.username,
      authorId: message.author.id,
      channel: message.channel.name || (message.channel.type === ChannelType.DM ? 'DM' : message.channelId),
      channelId: message.channel.id,
      timestamp: message.createdTimestamp,
      isMention: message.mentions.has(message.client.user),
      attachmentsCount: message.attachments.size,
    };

    const formattedMessage = `\n[Discord message]\n**Author:** ${metadata.author} (${metadata.authorId})\n**Channel:** ${metadata.channel}\n**Time:** ${new Date(metadata.timestamp).toLocaleString('en-US')}\n**Attachments:** ${metadata.attachmentsCount}\n\n${message.content}`.trim();

    return { formatted: formattedMessage, metadata, content: message.content };
  }

  formatResponseForDiscord(response, maxLength = 2000) {
    if (!response) return '';
    if (response.length <= maxLength) return response;

    const chunks = [];
    let current = '';
    response.split('\n').forEach(line => {
      if ((current + line).length <= maxLength) {
        current += line + '\n';
      } else {
        if (current) chunks.push(current.trim());
        current = line + '\n';
      }
    });
    if (current) chunks.push(current.trim());
    return chunks;
  }

  // channel getter is injected from index.js
  async getChannel(channelId) {
    if (this._getChannelFn) {
      try {
        const channel = await this._getChannelFn(channelId);
        console.log(`📡 Channel found: ${channel?.type} (${channelId})`);
        return channel;
      } catch (error) {
        console.error(`❌ Error loading channel ${channelId}:`, error.message);
        throw error;
      }
    }
    throw new Error('Channel getter not configured');
  }

  setChannelGetter(fn) {
    this._getChannelFn = fn;
  }
}

module.exports = MessageHandler;
