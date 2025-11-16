const { ChannelType } = require('discord.js');

/**
 * MessageHandler
 * Processes queued Discord messages, sends them to OpenWebUI via Chat API
 * Each Discord user gets their own Chat for persistent context
 */
class MessageHandler {
  constructor(openwebui, configManager, chatManager) {
    this.openwebui = openwebui;
    this.configManager = configManager;
    this.chatManager = chatManager;
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

      const systemPrompt = this.configManager.getSystemPrompt();

      // Get or create user's chat
      const chat = await this.chatManager.getOrCreateChat(
        message.author.id,
        message.author.username
      );

      console.log(`💬 Using chat: ${chat.id} for ${message.author.username}`);

      // Load chat history from OpenWebUI
      let chatHistory = [];
      try {
        chatHistory = await this.chatManager.getChatHistory(message.author.id);
        console.log(`📖 Loaded ${chatHistory.length} previous messages from chat`);
      } catch (error) {
        console.warn('⚠️ Failed to load chat history:', error.message);
      }

      // Combine into system prompt
      const enhancedSystemPrompt = this.buildEnhancedPrompt(
        systemPrompt,
        chatHistory,
        message.author.id
      );

      // Send to OpenWebUI with full chat history AND chat ID for persistence
      const response = await this.openwebui.chat(formatted, enhancedSystemPrompt, chatHistory, chat.id);

      // Cache the user message locally for next request
      await this.chatManager.addMessage(message.author.id, 'user', formatted);
      
      // Cache the bot response locally for next request  
      await this.chatManager.addMessage(message.author.id, 'assistant', response);

      // Messages are automatically saved by OpenWebUI when we pass chat_id
      console.log('💾 Messages cached and will be persisted by OpenWebUI');

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

      console.log('✅ Message processed and replied');
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

  /**
   * Build enhanced system prompt with chat history context
   * @param {string} systemPrompt - base system prompt
   * @param {array} chatHistory - previous messages from chat
   * @param {string} userId - user ID for context
   * @returns {string} enhanced prompt
   */
  buildEnhancedPrompt(systemPrompt, chatHistory, userId) {
    let enhanced = systemPrompt;

    if (chatHistory && chatHistory.length > 0) {
      const recentMessages = chatHistory.slice(-5); // Last 5 messages
      const contextSummary = recentMessages
        .filter(m => m.role === 'user')
        .map(m => `- ${m.content.substring(0, 100)}`)
        .join('\n');

      if (contextSummary) {
        enhanced += `\n\n[Recent Chat Context]\n${contextSummary}`;
      }
    }

    enhanced += `\n\n[Note: This is a persistent per-user chat. You maintain context across all conversations with this user.]`;

    return enhanced;
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
