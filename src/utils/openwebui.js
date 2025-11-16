/**
 * OpenWebUI API Client
 * Uses /api/chat/completions (OpenAI-compatible)
 * Stores messages locally in the JSON memory system
 */

const axios = require('axios');
const memoryManager = require('./memoryManager');

class OpenWebUIClient {
  constructor(baseUrl, apiKey, model) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
    this.model = model;
    this.timeout = 30000;
  }

  /**
   * Check OpenWebUI connection
   * @returns {Promise<boolean>} true when reachable
   */
  async checkHealth() {
    try {
      const res = await axios({
        method: 'GET',
        url: `${this.baseUrl}/api/config`,
        timeout: 5000,
      });

      return res.status === 200 && res.data.status === true;
    } catch (error) {
      console.error('OpenWebUI health check failed:', error.message);
      return false;
    }
  }

  /**
   * Send a message to OpenWebUI and receive a reply
   * @param {string} userMessage - user message
   * @param {string} systemPrompt - system prompt
   * @param {array} chatHistory - previous messages history
   * @returns {Promise<string>} bot reply
   */
  async chat(userMessage, systemPrompt, chatHistory = []) {
    try {
      // Prepare messages with system prompt
      const messages = [
        {
          role: 'system',
          content: systemPrompt,
        },
        ...chatHistory, // Bisherige Konversation
        {
          role: 'user',
          content: userMessage,
        },
      ];

      console.log(
        `📤 Sending to OpenWebUI: ${userMessage.substring(0, 50)}...`
      );
      console.log(
        `   Chat context: ${chatHistory.length} previous messages`
      );

      // Sende zu OpenWebUI
      const response = await axios({
        method: 'POST',
        url: `${this.baseUrl}/api/chat/completions`,
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        data: {
          model: this.model,
          messages: messages,
          temperature: 0.7,
          top_p: 0.9,
          max_tokens: 2000,
        },
        timeout: this.timeout,
      });

      // Extract reply
      const botResponse = response.data.choices[0].message.content;

      console.log(
        `📥 Reply received: ${botResponse.substring(0, 50)}...`
      );
      return botResponse;
    } catch (error) {
      console.error('OpenWebUI chat error:', error.message);
      if (error.response) {
        console.error('   Status:', error.response.status);
        console.error('   Data:', JSON.stringify(error.response.data).substring(0, 200));
      }
      throw error;
    }
  }

  /**
   * Get or create a chat for a user
   * @param {string} userId - Discord user ID
   * @param {string} userName - Discord username
   * @param {string} contextMode - 'shared' or 'private'
   * @returns {object} chat object with id and title
   */
  getOrCreateChat(userId, userName, contextMode) {
    const chatId = memoryManager.generateChatId(userId, userName, contextMode);
    // Ensure the chat file exists immediately (creates per-user JSON for private chats)
    try {
      memoryManager.ensureChatExists(chatId);
    } catch (e) {
      console.warn(`Warning: ensureChatExists failed for ${chatId}:`, e.message || e);
    }

    const chat = memoryManager.loadChat(chatId);

    return {
      id: chat.id,
      title: chat.title,
      userId,
      userName,
      contextMode,
      messageCount: (chat.messages || []).length,
    };
  }

  /**
   * Save a message in the memory system
   * @param {string} chatId - chat id
   * @param {string} role - 'user' or 'assistant'
   * @param {string} content - message content
   * @param {object} metadata - optional metadata
   */
  saveMessage(chatId, role, content, metadata = {}) {
    return memoryManager.addMessage(chatId, role, content, metadata);
  }

  /**
   * Get chat history as an array (OpenWebUI format)
   * @param {string} chatId - chat id
   * @returns {array} messages in OpenWebUI format
   */
  getChatHistory(chatId) {
    return memoryManager.getChatHistory(chatId);
  }

  /**
   * Get chat information
   * @param {string} chatId - chat id
   * @returns {object} chat data
   */
  getChat(chatId) {
    const chat = memoryManager.loadChat(chatId);
    return {
      id: chat.id,
      title: chat.title,
      created_at: chat.created_at,
      updated_at: chat.updated_at,
      messageCount: (chat.messages || []).length,
    };
  }

  /**
   * Delete chat
   * @param {string} chatId - chat id
   */
  deleteChat(chatId) {
    memoryManager.deleteChat(chatId);
  }

  /**
   * List all chats
   * @returns {array} array of chat objects
   */
  listChats() {
    return memoryManager.listAllChats();
  }

  /**
   * Get chat statistics
   * @param {string} chatId - chat id
   * @returns {object} statistics
   */
  getChatStats(chatId) {
    return memoryManager.getChatStats(chatId);
  }
}

module.exports = OpenWebUIClient;
