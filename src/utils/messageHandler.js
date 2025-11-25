const { ChannelType } = require('discord.js');
const { v4: uuidv4 } = require('uuid');

/**
 * MessageHandler
 * Processes queued Discord messages, sends them to OpenWebUI via Chat API
 * Each Discord user gets their own Chat for persistent context
 */
class MessageHandler {
  constructor(openwebui, configManager, chatManager, toolManager) {
    this.openwebui = openwebui;
    this.configManager = configManager;
    this.chatManager = chatManager;
    this.toolManager = toolManager;
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

      // Get tool definitions
      const tools = this.toolManager ? this.toolManager.getToolDefinitions() : [];

      // Send to OpenWebUI with chat ID and tools
      const response = await this.openwebui.chat(
        formatted,
        enhancedSystemPrompt,
        chatHistory,
        chat.id,
        tools,
        this.toolManager
      );

      // Manually save USER message to chat
      try {
        const userMessageId = uuidv4();
        await this.openwebui.addChatMessage(chat.id, userMessageId, message.content, 'user');
        console.log(`💾 User message saved to chat`);
      } catch (error) {
        console.warn('⚠️ Failed to save user message:', error.message);
      }

      // Manually save ASSISTANT message to chat
      try {
        const assistantMessageId = uuidv4();
        await this.openwebui.addChatMessage(chat.id, assistantMessageId, response, 'assistant');
        console.log(`💾 Assistant message saved to chat`);
      } catch (error) {
        console.warn('⚠️ Failed to save assistant message:', error.message);
      }

      const formattedResponses = this.formatResponseForDiscord(response);

      // send replies (first message as reply/send, following as follow-ups)
      // formattedResponses is now ALWAYS an array
      if (formattedResponses.length > 1) {
        console.log(`📨 Response too long, splitting into ${formattedResponses.length} chunks...`);
      }

      let firstReply = null;
      for (let i = 0; i < formattedResponses.length; i++) {
        const resp = formattedResponses[i];
        const isFirstMessage = (i === 0);
        const chunkInfo = formattedResponses.length > 1 ? ` [${i + 1}/${formattedResponses.length}]` : '';

        try {
          if (message.channel && (message.channel.type === ChannelType.DM || message.channel.type === 1 || String(message.channel.type).toUpperCase() === 'DM')) {
            // DM: Send directly
            if (isFirstMessage) {
              firstReply = await channel.send({ content: resp });
            } else {
              await channel.send({ content: resp });
            }
          } else {
            // Guild: Reply to original message or thread subsequent messages
            if (isFirstMessage) {
              firstReply = await message.reply({ content: resp, allowedMentions: { repliedUser: false } });
            } else {
              await firstReply.reply({ content: resp, allowedMentions: { repliedUser: false } });
            }
          }
          
          console.log(`✅ Message sent${chunkInfo} (${resp.length} chars)`);
        } catch (error) {
          console.error(`❌ Error sending message chunk ${i + 1}:`, error.message);
          throw error;
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

    const contextMode = this.configManager.getContextMode();
    let messagePrefix = '';

    // In shared mode, include user metadata so KI knows who sent the message
    if (contextMode === 'shared') {
      messagePrefix = `[User: ${metadata.author} (${metadata.authorId})]\n`;
    }

    const formattedMessage = `\n[Discord message]\n**Author:** ${metadata.author} (${metadata.authorId})\n**Channel:** ${metadata.channel}\n**Time:** ${new Date(metadata.timestamp).toLocaleString('en-US')}\n**Attachments:** ${metadata.attachmentsCount}\n\n${messagePrefix}${message.content}`.trim();

    return { formatted: formattedMessage, metadata, content: message.content };
  }

  formatResponseForDiscord(response, maxLength = 2000) {
    if (!response) return [];
    
    // If response fits in one message, return as array with single element
    if (response.length <= maxLength) {
      return [response];
    }

    // Split into chunks, preferring line breaks to keep messages readable
    const chunks = [];
    const lines = response.split('\n');
    let current = '';

    for (const line of lines) {
      // If adding this line would exceed limit
      if (current && (current + '\n' + line).length > maxLength) {
        // Save current chunk and start new one
        chunks.push(current.trim());
        current = line;
      } else {
        // Add line to current chunk
        current = current ? current + '\n' + line : line;
      }
    }

    // Don't forget the last chunk
    if (current) {
      chunks.push(current.trim());
    }

    // Fallback: if a single line is too long, split by character
    const finalChunks = [];
    for (const chunk of chunks) {
      if (chunk.length > maxLength) {
        // Split this chunk by characters
        for (let i = 0; i < chunk.length; i += maxLength) {
          finalChunks.push(chunk.substring(i, i + maxLength));
        }
      } else {
        finalChunks.push(chunk);
      }
    }

    return finalChunks;
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
