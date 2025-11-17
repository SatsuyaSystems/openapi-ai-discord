/**
 * Chat Manager
 * Manages per-user Chats in OpenWebUI
 * Each Discord User gets their own Chat with persistent context
 */

const fs = require('fs');
const path = require('path');

class ChatManager {
  constructor(openwebui, openwebuiUserId) {
    this.openwebui = openwebui;
    this.openwebuiUserId = openwebuiUserId;
    this.dataFile = path.join(__dirname, '../../data/user_chats.json');
    this.userChats = this.loadUserChats();
  }

  /**
   * Load user->chat mappings from disk
   */
  loadUserChats() {
    try {
      if (fs.existsSync(this.dataFile)) {
        const data = fs.readFileSync(this.dataFile, 'utf8');
        return JSON.parse(data);
      }
    } catch (error) {
      console.warn('Could not load user chats:', error.message);
    }
    return {};
  }

  /**
   * Save user->chat mappings to disk
   */
  saveUserChats() {
    try {
      const dir = path.dirname(this.dataFile);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(this.dataFile, JSON.stringify(this.userChats, null, 2));
    } catch (error) {
      console.error('Error saving user chats:', error.message);
    }
  }

  /**
   * Get or create a chat for a Discord user
   * @param {string} discordUserId - Discord user ID
   * @param {string} discordUserName - Discord username
   * @returns {Promise<object>} chat object
   */
  async getOrCreateChat(discordUserId, discordUserName) {
    try {
      // Check if we have a cached chat ID for this user
      if (this.userChats[discordUserId]) {
        const cachedChatId = this.userChats[discordUserId].chatId;
        
        // Try to get the chat from OpenWebUI
        const existingChat = await this.openwebui.getChat(cachedChatId);
        if (existingChat) {
          console.log(`💬 Using existing chat for ${discordUserName}: ${cachedChatId}`);
          return existingChat;
        } else {
          // Chat was deleted, remove from cache
          console.warn(`Chat ${cachedChatId} no longer exists, creating new one`);
          delete this.userChats[discordUserId];
          this.saveUserChats();
        }
      }

      // Create a new chat
      const chatTitle = `Discord: ${discordUserName}`;
      const newChat = await this.openwebui.createChat(this.openwebuiUserId, chatTitle);

      // Store mapping
      this.userChats[discordUserId] = {
        chatId: newChat.id,
        discordUserName: discordUserName,
        createdAt: new Date().toISOString(),
        title: chatTitle
      };
      this.saveUserChats();

      console.log(`✨ New chat created for ${discordUserName}: ${newChat.id}`);
      return newChat;
    } catch (error) {
      console.error('Error in getOrCreateChat:', error.message);
      throw error;
    }
  }

  /**
   * Get chat history for a Discord user
   * Loads directly from OpenWebUI - no local caching
   * @param {string} discordUserId - Discord user ID
   * @returns {Promise<array>} array of messages
   */
  async getChatHistory(discordUserId) {
    try {
      if (!this.userChats[discordUserId]) {
        console.log(`No chat found for user ${discordUserId}`);
        return [];
      }

      const chatId = this.userChats[discordUserId].chatId;

      // Get persisted messages from OpenWebUI
      const chat = await this.openwebui.getChat(chatId);
      if (!chat || !chat.messages) {
        console.log(`📖 No messages found in chat ${chatId}`);
        return [];
      }

      // Convert messages to standard format
      const messages = chat.messages.map(msg => ({
        role: msg.role,
        content: msg.content
      }));

      console.log(`📖 Loaded ${messages.length} messages from OpenWebUI`);
      return messages;
    } catch (error) {
      console.error('Error getting chat history:', error.message);
      return [];
    }
  }

  /**
   * Add a message to a user's chat (DEPRECATED)
   * OpenWebUI persists messages automatically when chat_id is passed to /api/chat/completions
   * This method is kept for compatibility but does nothing
   * @param {string} discordUserId - Discord user ID
   * @param {string} role - 'user' or 'assistant'
   * @param {string} content - message content
   * @returns {Promise<boolean>} success
   */
  async addMessage(discordUserId, role, content) {
    // No-op: Messages are persisted automatically by OpenWebUI via chat_id parameter
    return true;
  }

  /**
   * Get all chats for this OpenWebUI user
   * @returns {Promise<array>} all chats
   */
  async getAllChats() {
    try {
      return await this.openwebui.getUserChats(this.openwebuiUserId);
    } catch (error) {
      console.error('Error getting all chats:', error.message);
      return [];
    }
  }

  /**
   * Delete a chat
   * @param {string} discordUserId - Discord user ID
   * @returns {Promise<boolean>} success
   */
  async deleteUserChat(discordUserId) {
    try {
      if (!this.userChats[discordUserId]) {
        return false;
      }

      const chatId = this.userChats[discordUserId].chatId;
      const success = await this.openwebui.deleteChat(chatId);

      if (success) {
        delete this.userChats[discordUserId];
        this.saveUserChats();
      }

      return success;
    } catch (error) {
      console.error('Error deleting user chat:', error.message);
      return false;
    }
  }

  /**
   * Get stats about stored chats
   */
  getStats() {
    return {
      totalChats: Object.keys(this.userChats).length,
      chats: this.userChats
    };
  }
}

module.exports = (openwebui, openwebuiUserId) => new ChatManager(openwebui, openwebuiUserId);
