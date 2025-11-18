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
   * @param {array} tools - optional tool definitions
   * @param {object} toolManager - optional tool manager instance for execution
   * @returns {Promise<string>} bot reply
   */
  async chat(userMessage, systemPrompt, chatHistory = [], chatId = null, tools = [], toolManager = null) {
    try {
      // Prepare messages with system prompt
      // If chatHistory already has system prompt, don't add it again
      const messages = [...chatHistory];

      // Add system prompt if not present
      if (!messages.some(m => m.role === 'system')) {
        messages.unshift({
          role: 'system',
          content: systemPrompt,
        });
      }

      // Add user message if provided (might be null in recursive calls)
      if (userMessage) {
        messages.push({
          role: 'user',
          content: userMessage,
        });
      }

      console.log(
        `📤 Sending to OpenWebUI: ${userMessage ? userMessage.substring(0, 50) : 'Tool Result'}...`
      );

      // Sende zu OpenWebUI
      const payload = {
        model: this.model,
        messages: messages,
        temperature: 0.7,
        top_p: 0.9,
        max_tokens: 2000,
      };

      // Add tools if available
      if (tools && tools.length > 0) {
        payload.tools = tools;
      }

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

      // Check for tool calls
      const choice = response.data.choices[0];
      const message = choice.message;

      // If the model wants to call a tool
      if (message.tool_calls && message.tool_calls.length > 0) {
        console.log(`🛠️ Model requested ${message.tool_calls.length} tool calls`);

        // Add the assistant's message with tool_calls to history
        messages.push(message);

        // Execute each tool
        for (const toolCall of message.tool_calls) {
          const functionName = toolCall.function.name;
          const functionArgs = JSON.parse(toolCall.function.arguments);
          const callId = toolCall.id;

          console.log(`▶️ Executing tool: ${functionName}`);

          let result = "Error: Tool execution failed";
          if (toolManager) {
            result = await toolManager.executeTool(functionName, functionArgs);
          } else {
            result = "Error: ToolManager not provided";
          }

          // Add tool result to history
          messages.push({
            role: 'tool',
            tool_call_id: callId,
            name: functionName,
            content: result
          });
        }

        // Recursively call chat with updated history (no new user message)
        return this.chat(null, systemPrompt, messages, chatId, tools, toolManager);
      }

      // Normal response
      const botResponse = message.content;

      console.log(
        `📥 Reply received: ${botResponse ? botResponse.substring(0, 50) : 'Empty'}...`
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
   * Create a new chat for a user
   * @param {string} userId - OpenWebUI user ID
   * @param {string} title - Chat title
   * @returns {Promise<object>} created chat object
   */
  async createChat(userId, title = 'New Chat') {
    try {
      // According to ChatForm spec: chat is a dictionary with chat properties
      const payload = {
        chat: {
          title: title
        }
      };

      console.log(`📤 Creating chat with title: ${title}`);

      const response = await this.axiosInstance.post('/api/v1/chats/new', payload);

      console.log(`💬 Chat created: ${response.data.id} - ${title}`);
      return response.data;
    } catch (error) {
      console.error('Error creating chat:', error.message);
      if (error.response) {
        console.error('   Status:', error.response.status);
        console.error('   Data:', JSON.stringify(error.response.data).substring(0, 200));
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
   * @returns {Promise<object|null>} chat object with messages, or null if error
   */
  async getChat(chatId) {
    try {
      const response = await this.axiosInstance.get(`/api/v1/chats/${chatId}`);

      const chatData = response.data;
      console.log(`📖 Retrieved chat ${chatId} from OpenWebUI`);

      // Extract messages from the proper location: chat.history.messages
      let messageArray = [];

      if (chatData.chat &&
        typeof chatData.chat === 'object' &&
        chatData.chat.history &&
        chatData.chat.history.messages) {
        // Convert the message dictionary to an array, sorted by timestamp
        messageArray = Object.values(chatData.chat.history.messages)
          .filter(msg => msg && typeof msg === 'object' && msg.role && msg.content)
          .sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));

        console.log(`   Found ${messageArray.length} messages in chat.history.messages`);
      } else if (chatData.chat && Array.isArray(chatData.chat.messages)) {
        // Fallback: messages might be in chat.messages array
        messageArray = chatData.chat.messages
          .filter(msg => msg && typeof msg === 'object' && msg.role && msg.content)
          .sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));

        console.log(`   Found ${messageArray.length} messages in chat.messages array`);
      } else {
        console.log(`   Chat has no messages`);
      }

      chatData.messages = messageArray;
      return chatData;
    } catch (error) {
      console.error(`❌ Error getting chat ${chatId}: ${error.message}`);
      if (error.response?.status === 401) {
        console.warn(`   401 Unauthorized - Chat access denied or deleted`);
      } else if (error.response?.status === 404) {
        console.warn(`   404 Not Found - Chat does not exist`);
      }
      return null;
    }
  }

  /**
   * Delete a chat
   * @param {string} chatId - Chat ID to delete
   * @returns {Promise<boolean>} success
   */
  async deleteChat(chatId) {
    try {
      const response = await this.axiosInstance.delete(`/api/v1/chats/${chatId}`);

      console.log(`🗑️ Chat deleted: ${chatId}`);
      return true;
    } catch (error) {
      console.error('Error deleting chat:', error.message);
      return false;
    }
  }

  /**
   * Add a message to a chat
   * Updates the entire chat.history.messages structure
   * @param {string} chatId - Chat ID
   * @param {string} messageId - Unique message ID (UUID)
   * @param {string} content - message content
   * @param {string} role - 'user' or 'assistant'
   * @returns {Promise<object>} updated chat response
   */
  async addChatMessage(chatId, messageId, content, role = 'user') {
    try {
      console.log(`📝 Adding ${role} message to chat ${chatId}`);

      // Get current chat to preserve existing messages and structure
      const currentChat = await this.getChat(chatId);
      if (!currentChat) {
        throw new Error(`Failed to load chat ${chatId}`);
      }

      // Ensure the chat structure exists
      if (!currentChat.chat) {
        currentChat.chat = {};
      }
      if (!currentChat.chat.history) {
        currentChat.chat.history = { messages: {}, currentId: null };
      }
      if (!currentChat.chat.history.messages) {
        currentChat.chat.history.messages = {};
      }

      // Find the last message to set as parent
      const allMessages = Object.values(currentChat.chat.history.messages);
      const lastMessage = allMessages.length > 0
        ? allMessages[allMessages.length - 1]
        : null;

      // Create the new message with proper OpenWebUI structure
      const newMessage = {
        id: messageId,
        parentId: lastMessage ? lastMessage.id : null,
        childrenIds: [],
        role: role,
        content: content,
        timestamp: Math.floor(Date.now() / 1000), // Unix timestamp in seconds
        models: currentChat.chat.models || ['gpt-5-mini']
      };

      // Update parent's childrenIds if there is one
      if (lastMessage) {
        lastMessage.childrenIds = [messageId];
      }

      // Add the new message
      currentChat.chat.history.messages[messageId] = newMessage;

      // Update currentId to the new message
      currentChat.chat.history.currentId = messageId;

      // Also update the flat messages array if it exists
      if (Array.isArray(currentChat.chat.messages)) {
        currentChat.chat.messages.push(newMessage);
      }

      // Send update back to OpenWebUI
      const updatePayload = {
        chat: currentChat.chat
      };

      const response = await this.axiosInstance.post(
        `/api/v1/chats/${chatId}`,
        updatePayload
      );

      console.log(`✅ ${role.toUpperCase()} message added to chat: ${messageId}`);
      return response.data;
    } catch (error) {
      console.error(`❌ Error adding ${role} message to chat: ${error.message}`);
      if (error.response) {
        console.error(`   Status: ${error.response.status}`);
        if (error.response.data) {
          const errorData = typeof error.response.data === 'string'
            ? error.response.data
            : JSON.stringify(error.response.data);
          console.error(`   Data: ${errorData.substring(0, 200)}`);
        }
      }
      return null;
    }
  }
}

module.exports = OpenWebUIClient;
