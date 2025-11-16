/**
 * OpenWebUI API Client
 * Verwendet /api/chat/completions (OpenAI-kompatibel)
 * Speichert Nachrichten lokal im JSON Memory-System
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
   * Überprüfe OpenWebUI-Verbindung
   * @returns {Promise<boolean>} true wenn erreichbar
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
      console.error('OpenWebUI Health Check fehlgeschlagen:', error.message);
      return false;
    }
  }

  /**
   * Sende Nachricht zu OpenWebUI und erhalte Antwort
   * @param {string} userMessage - Benutzernachricht
   * @param {string} systemPrompt - System Prompt
   * @param {array} chatHistory - Bisherige Nachrichten-Historie
   * @returns {Promise<string>} Bot-Antwort
   */
  async chat(userMessage, systemPrompt, chatHistory = []) {
    try {
      // Vorbereite Nachrichten mit System Prompt
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
        `📤 Sende zu OpenWebUI: ${userMessage.substring(0, 50)}...`
      );
      console.log(
        `   Chat-Kontext: ${chatHistory.length} vorherige Nachrichten`
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

      // Extrahiere Antwort
      const botResponse = response.data.choices[0].message.content;

      console.log(
        `📥 Antwort erhalten: ${botResponse.substring(0, 50)}...`
      );
      return botResponse;
    } catch (error) {
      console.error('OpenWebUI Chat-Fehler:', error.message);
      if (error.response) {
        console.error('   Status:', error.response.status);
        console.error('   Data:', JSON.stringify(error.response.data).substring(0, 200));
      }
      throw error;
    }
  }

  /**
   * Hole oder erstelle Chat für Nutzer
   * @param {string} userId - Discord User ID
   * @param {string} userName - Discord Username
   * @param {string} contextMode - 'shared' oder 'private'
   * @returns {object} Chat-Objekt mit ID und Titel
   */
  getOrCreateChat(userId, userName, contextMode) {
    const chatId = memoryManager.generateChatId(userId, userName, contextMode);
    // Ensure the chat file exists immediately (creates per-user JSON for private chats)
    try {
      memoryManager.ensureChatExists(chatId);
    } catch (e) {
      console.warn(`Warnung: ensureChatExists fehlgeschlagen für ${chatId}:`, e.message || e);
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
   * Speichere Nachricht im Memory-System
   * @param {string} chatId - Chat ID
   * @param {string} role - 'user' oder 'assistant'
   * @param {string} content - Nachrichteninhalt
   * @param {object} metadata - Optional: Zusätzliche Metadaten
   */
  saveMessage(chatId, role, content, metadata = {}) {
    return memoryManager.addMessage(chatId, role, content, metadata);
  }

  /**
   * Hole Chat-Geschichte als Array für OpenWebUI
   * @param {string} chatId - Chat ID
   * @returns {array} Nachrichten im OpenWebUI-Format
   */
  getChatHistory(chatId) {
    return memoryManager.getChatHistory(chatId);
  }

  /**
   * Hole Chat-Informationen
   * @param {string} chatId - Chat ID
   * @returns {object} Chat-Daten
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
   * Lösche Chat
   * @param {string} chatId - Chat ID
   */
  deleteChat(chatId) {
    memoryManager.deleteChat(chatId);
  }

  /**
   * Liste alle Chats auf
   * @returns {array} Array von Chat-Objekten
   */
  listChats() {
    return memoryManager.listAllChats();
  }

  /**
   * Hole Chat-Statistiken
   * @param {string} chatId - Chat ID
   * @returns {object} Statistiken
   */
  getChatStats(chatId) {
    return memoryManager.getChatStats(chatId);
  }
}

module.exports = OpenWebUIClient;
