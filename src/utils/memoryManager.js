/**
 * Memory Manager - JSON-based storage system for chat messages
 * Stores conversations locally as JSON and provides context for the local memory
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

class MemoryManager {
  constructor() {
    this.memoryDir = path.join(__dirname, '../../data/memory');
    this.ensureMemoryDir();
  }

  /**
   * Ensure memory directory exists
   */
  ensureMemoryDir() {
    if (!fs.existsSync(this.memoryDir)) {
      fs.mkdirSync(this.memoryDir, { recursive: true });
    }
  }

  /**
   * Generate chat ID based on context mode
   * @param {string} userId - Discord user ID
   * @param {string} userName - Discord username
   * @param {string} contextMode - 'shared' or 'private'
   * @returns {string} chat id
   */
  generateChatId(userId, userName, contextMode) {
    if (contextMode === 'shared') {
      return 'context_shared';
    } else {
      // Sanitize username for filename
      const sanitized = userName.toLowerCase().replace(/[^a-z0-9_-]/g, '_');
      return `context_${sanitized}_${userId}`;
    }
  }

  /**
   * Get path to the chat file
   * @param {string} chatId - chat id
   * @returns {string} path to JSON file
   */
  getChatPath(chatId) {
    return path.join(this.memoryDir, `${chatId}.json`);
  }

  /**
   * Load or create chat data
   * @param {string} chatId - chat id
   * @returns {object} chat object with messages array
   */
  loadChat(chatId) {
    const chatPath = this.getChatPath(chatId);

    if (fs.existsSync(chatPath)) {
      try {
        const data = fs.readFileSync(chatPath, 'utf8');
        return JSON.parse(data);
      } catch (error) {
        console.error(`Error loading chat ${chatId}:`, error.message);
        return this.createNewChat(chatId);
      }
    }

    return this.createNewChat(chatId);
  }

  /**
   * Ensure a chat file exists on disk. If missing, create and save a new structure.
   * @param {string} chatId
   */
  ensureChatExists(chatId) {
    const chatPath = this.getChatPath(chatId);
    if (!fs.existsSync(chatPath)) {
      const chat = this.createNewChat(chatId);
      this.saveChat(chatId, chat);
    }
  }

  /**
   * Create new chat structure
   * @param {string} chatId - chat id
   * @returns {object} new chat structure
   */
  createNewChat(chatId) {
    return {
      id: chatId,
      title: this.getChatTitle(chatId),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      messages: [],
    };
  }

  /**
   * Generate chat title
   * @param {string} chatId - chat id
   * @returns {string} chat title
   */
  getChatTitle(chatId) {
    if (chatId === 'context_shared') {
      return '🌍 Shared Chat (All users)';
    }
    // Extract username from chat ID
    const parts = chatId.replace('context_', '').split('_');
    const username = parts.slice(0, -1).join('_');
    return `👤 ${username}'s Private Chat`;
  }

  /**
   * Save chat
   * @param {string} chatId - chat id
   * @param {object} chatData - chat data
   */
  saveChat(chatId, chatData) {
    try {
      const chatPath = this.getChatPath(chatId);
      chatData.updated_at = new Date().toISOString();
      fs.writeFileSync(chatPath, JSON.stringify(chatData, null, 2), 'utf8');
    } catch (error) {
      console.error(`Error saving chat ${chatId}:`, error.message);
    }
  }

  /**
   * Add message to chat
   * @param {string} chatId - chat id
   * @param {string} role - 'user' or 'assistant'
   * @param {string} content - message content
   * @param {object} metadata - optional extra metadata
   */
  addMessage(chatId, role, content, metadata = {}) {
    const chat = this.loadChat(chatId);

    const message = {
      id: crypto.randomUUID(),
      role,
      content,
      timestamp: new Date().toISOString(),
      ...metadata,
    };

    chat.messages.push(message);
    this.saveChat(chatId, chat);

    return message;
  }

  /**
   * Get all messages from chat
   * @param {string} chatId - chat id
   * @returns {array} array of messages
   */
  getMessages(chatId) {
    const chat = this.loadChat(chatId);
    return chat.messages || [];
  }

  /**
   * Get last N messages (for context)
   * @param {string} chatId - chat id
   * @param {number} limit - number of messages (default: 10)
   * @returns {array} array of last N messages
   */
  getRecentMessages(chatId, limit = 10) {
    const messages = this.getMessages(chatId);
    return messages.slice(Math.max(0, messages.length - limit));
  }

  /**
   * Convert chat messages to OpenWebUI message format
   * @param {string} chatId - chat id
   * @returns {array} array in OpenWebUI format
   */
  getChatHistory(chatId) {
    const messages = this.getRecentMessages(chatId, 20);
    return messages.map((msg) => ({
      role: msg.role,
      content: msg.content,
    }));
  }

  /**
   * Delete chat
   * @param {string} chatId - chat id
   */
  deleteChat(chatId) {
    try {
      const chatPath = this.getChatPath(chatId);
      if (fs.existsSync(chatPath)) {
        fs.unlinkSync(chatPath);
      }
    } catch (error) {
      console.error(`Error deleting chat ${chatId}:`, error.message);
    }
  }

  /**
   * List all available chats
   * @returns {array} array of chat objects
   */
  listAllChats() {
    try {
      const files = fs.readdirSync(this.memoryDir);
      return files
        .filter((f) => f.endsWith('.json'))
        .map((f) => {
          const chatPath = path.join(this.memoryDir, f);
          try {
            const data = fs.readFileSync(chatPath, 'utf8');
            return JSON.parse(data);
          } catch {
            return null;
          }
        })
        .filter(Boolean);
    } catch (error) {
      console.error('Error listing chats:', error.message);
      return [];
    }
  }

  /**
   * Get chat statistics
   * @param {string} chatId - chat id
   * @returns {object} statistics
   */
  getChatStats(chatId) {
    const chat = this.loadChat(chatId);
    const messages = chat.messages || [];

    return {
      chatId,
      title: chat.title,
      messageCount: messages.length,
      userMessages: messages.filter((m) => m.role === 'user').length,
      assistantMessages: messages.filter((m) => m.role === 'assistant').length,
      created_at: chat.created_at,
      updated_at: chat.updated_at,
    };
  }
}

module.exports = new MemoryManager();
