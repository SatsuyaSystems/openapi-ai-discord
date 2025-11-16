/**
 * OpenWebUI API Client
 * Uses /api/chat/completions (OpenAI-compatible)
 * Creates per-user Chats via /api/v1/chats/ for persistent context
 */

const axios = require('axios');

class OpenWebUIClient {
  constructor(baseUrl, apiKey, model) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
    this.model = model;
    this.timeout = 30000;
    this.axiosInstance = this.createAxiosInstance();
  }

  /**
   * Create a configured axios instance with auth headers
   */
  createAxiosInstance() {
    return axios.create({
      baseURL: this.baseUrl,
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
      timeout: this.timeout,
    });
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
   * @param {string} chatId - optional chat ID for persistence
   * @returns {Promise<string>} bot reply
   */
  async chat(userMessage, systemPrompt, chatHistory = [], chatId = null) {
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
        `   Chat context: ${chatHistory.length} previous messages${chatId ? ` | Chat ID: ${chatId}` : ''}`
      );

      // Sende zu OpenWebUI
      const payload = {
        model: this.model,
        messages: messages,
        temperature: 0.7,
        top_p: 0.9,
        max_tokens: 2000,
      };

      // Add chat_id if provided (for message persistence in OpenWebUI)
      if (chatId) {
        payload.chat_id = chatId;
      }

      const response = await axios({
        method: 'POST',
        url: `${this.baseUrl}/api/chat/completions`,
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        data: payload,
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
   * Add a memory entry to OpenWebUI
   * @param {string} content - memory content
   * @returns {Promise<object>} created memory object
   */
  async addMemory(content) {
    try {
      const response = await this.axiosInstance.post('/api/v1/memories/add', {
        content: content,
      });
      console.log(`✅ Memory added: ${content.substring(0, 50)}...`);
      return response.data;
    } catch (error) {
      console.error('Error adding memory:', error.message);
      if (error.response) {
        console.error('   Status:', error.response.status);
        console.error('   Data:', JSON.stringify(error.response.data).substring(0, 200));
      }
      throw error;
    }
  }

  /**
   * Query memories from OpenWebUI
   * @param {string} query - search query/content
   * @param {number} limit - number of results to return (default: 5)
   * @returns {Promise<array>} array of memory objects
   */
  async queryMemory(query, limit = 5) {
    try {
      const response = await this.axiosInstance.post('/api/v1/memories/query', {
        content: query,
        k: limit,
      });
      
      // Ensure we always return an array
      const memories = Array.isArray(response.data) 
        ? response.data 
        : (response.data?.results || []);
      
      console.log(`🔍 Query memories: ${query.substring(0, 50)}... (${memories.length} results)`);
      return memories;
    } catch (error) {
      console.error('Error querying memory:', error.message);
      if (error.response?.status === 404) {
        console.warn('   Memories not found or vector DB not initialized');
        return [];
      }
      return []; // Return empty array on error to prevent chat failure
    }
  }

  /**
   * Delete a memory entry
   * @param {string} memoryId - memory ID to delete
   * @returns {Promise<void>}
   */
  async deleteMemory(memoryId) {
    try {
      await this.axiosInstance.delete(`/api/v1/memories/${memoryId}`);
      console.log(`🗑️ Memory deleted: ${memoryId}`);
      return true;
    } catch (error) {
      console.error('Error deleting memory:', error.message);
      return false;
    }
  }

  /**
   * Get all memories
   * @returns {Promise<array>} all memories
   */
  async getAllMemories() {
    try {
      const response = await this.axiosInstance.get('/api/v1/memories/');
      
      // Handle different response formats
      let memories = [];
      if (Array.isArray(response.data)) {
        memories = response.data;
      } else if (response.data?.memories && Array.isArray(response.data.memories)) {
        memories = response.data.memories;
      } else if (response.data?.results && Array.isArray(response.data.results)) {
        memories = response.data.results;
      }
      
      console.log(`📚 Retrieved ${memories.length} total memories`);
      return memories;
    } catch (error) {
      console.error('Error getting all memories:', error.message);
      return [];
    }
  }

  /**
   * Create a new chat for a user
   * @param {string} userId - OpenWebUI user ID
   * @param {string} title - Chat title
   * @returns {Promise<object>} created chat object
   */
  async createChat(userId, title = 'New Chat') {
    try {
      const payload = {
        chat: {
          title: title
        }
      };
      
      console.log(`📤 Creating chat with payload:`, JSON.stringify(payload));
      
      const response = await this.axiosInstance.post('/api/v1/chats/new', payload);
      
      console.log(`💬 Chat created: ${response.data.id} - ${title}`);
      return response.data;
    } catch (error) {
      console.error('Error creating chat:', error.message);
      if (error.response) {
        console.error('   Status:', error.response.status);
        console.error('   Data:', JSON.stringify(error.response.data));
      }
      throw error;
    }
  }

  /**
   * Get all chats for a user
   * @param {string} userId - OpenWebUI user ID
   * @returns {Promise<array>} array of chat objects
   */
  async getUserChats(userId) {
    try {
      const response = await this.axiosInstance.get(`/api/v1/chats/list/user/${userId}`);
      
      let chats = [];
      if (Array.isArray(response.data)) {
        chats = response.data;
      } else if (response.data?.chats && Array.isArray(response.data.chats)) {
        chats = response.data.chats;
      }
      
      console.log(`📋 Retrieved ${chats.length} chats for user ${userId}`);
      return chats;
    } catch (error) {
      console.error('Error getting user chats:', error.message);
      return [];
    }
  }

  /**
   * Get a specific chat with all messages
   * @param {string} chatId - Chat ID
   * @returns {Promise<object>} chat object with messages
   */
  async getChat(chatId) {
    try {
      const response = await this.axiosInstance.get(`/api/v1/chats/${chatId}`);
      
      console.log(`📖 Retrieved chat ${chatId}`);
      return response.data;
    } catch (error) {
      console.error('Error getting chat:', error.message);
      return null;
    }
  }

  /**
   * Add a message to a chat
   * @param {string} chatId - Chat ID
   * @param {string} role - 'user' or 'assistant'
   * @param {string} content - message content
   * @returns {Promise<object>} message object
   */
  async addChatMessage(chatId, role, content) {
    try {
      const payload = {
        content: content
      };
      
      console.log(`📤 Adding ${role} message to chat ${chatId}`);
      
      const response = await this.axiosInstance.post(
        `/api/v1/chats/${chatId}/messages/${role}`,
        payload
      );
      
      console.log(`✅ Message added to chat`);
      return response.data;
    } catch (error) {
      console.error('Error adding message to chat:', error.message);
      if (error.response) {
        console.error('   Status:', error.response.status);
        console.error('   Data:', JSON.stringify(error.response.data).substring(0, 200));
      }
      return null;
    }
  }

  /**
   * Delete all memories for current user
   * @returns {Promise<void>}
   */
  async deleteUserMemories() {
    try {
      await this.axiosInstance.delete('/api/v1/memories/delete/user');
      console.log(`🗑️ All user memories deleted`);
    } catch (error) {
      console.error('Error deleting user memories:', error.message);
      throw error;
    }
  }

  /**
   * Format memory results into a context string
   * @param {array} memories - array of memory objects
   * @returns {string} formatted memory context
   */
  formatMemoriesAsContext(memories) {
    if (!memories || memories.length === 0) {
      return '';
    }
    return memories
      .map(mem => mem.content || '')
      .filter(content => content)
      .join('\n');
  }

  /**
   * Save a message in the memory system (DEPRECATED - Memory API only)
   * @deprecated Use addMemory() instead
   */
  saveMessage(chatId, role, content, metadata = {}) {
    // No-op - all storage is via Memory API
    return { id: 'deprecated', role, content };
  }

  /**
   * Get chat history as an array (DEPRECATED - Memory API only)
   * @deprecated Use queryMemory() instead
   * @returns {array} empty array
   */
  getChatHistory(chatId) {
    // No-op - return empty array
    return [];
  }

  /**
   * Get chat information (DEPRECATED - Memory API only)
   * @deprecated Not needed for Memory API
   */
  getChat(chatId) {
    return { id: chatId, messageCount: 0 };
  }

  /**
   * Delete chat (DEPRECATED - Memory API only)
   * @deprecated Not needed for Memory API
   */
  deleteChat(chatId) {
    // No-op
  }

  /**
   * List all chats (DEPRECATED - Memory API only)
   * @deprecated Not needed for Memory API
   */
  listChats() {
    return [];
  }

  /**
   * Get chat statistics (DEPRECATED - Memory API only)
   * @deprecated Not needed for Memory API
   */
  getChatStats(chatId) {
    return { chatId, messageCount: 0 };
  }
}

module.exports = OpenWebUIClient;
