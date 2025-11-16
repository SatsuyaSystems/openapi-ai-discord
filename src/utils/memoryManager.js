/**
 * Memory Manager - JSON-basiertes Speichersystem für Chat-Nachrichten
 * Speichert Konversationen lokal als JSON und lädt sie als Kontext für OpenWebUI
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
   * Stelle sicher, dass Memory-Verzeichnis existiert
   */
  ensureMemoryDir() {
    if (!fs.existsSync(this.memoryDir)) {
      fs.mkdirSync(this.memoryDir, { recursive: true });
    }
  }

  /**
   * Generiere Chat-ID basierend auf Context-Mode
   * @param {string} userId - Discord User ID
   * @param {string} userName - Discord Username
   * @param {string} contextMode - 'shared' oder 'private'
   * @returns {string} Chat ID
   */
  generateChatId(userId, userName, contextMode) {
    if (contextMode === 'shared') {
      return 'context_shared';
    } else {
      // Sanitize username für Dateinamen
      const sanitized = userName.toLowerCase().replace(/[^a-z0-9_-]/g, '_');
      return `context_${sanitized}_${userId}`;
    }
  }

  /**
   * Hole Pfad zur Chat-Datei
   * @param {string} chatId - Chat ID
   * @returns {string} Pfad zur JSON-Datei
   */
  getChatPath(chatId) {
    return path.join(this.memoryDir, `${chatId}.json`);
  }

  /**
   * Lade oder erstelle Chat-Daten
   * @param {string} chatId - Chat ID
   * @returns {object} Chat-Objekt mit Nachrichten-Array
   */
  loadChat(chatId) {
    const chatPath = this.getChatPath(chatId);

    if (fs.existsSync(chatPath)) {
      try {
        const data = fs.readFileSync(chatPath, 'utf8');
        return JSON.parse(data);
      } catch (error) {
        console.error(`Fehler beim Laden von Chat ${chatId}:`, error.message);
        return this.createNewChat(chatId);
      }
    }

    return this.createNewChat(chatId);
  }

  /**
   * Stelle sicher, dass eine Chat-Datei existiert auf der Festplatte.
   * Wenn nicht vorhanden, wird eine neue Chat-Struktur angelegt und gespeichert.
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
   * Erstelle neue Chat-Struktur
   * @param {string} chatId - Chat ID
   * @returns {object} Neue Chat-Struktur
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
   * Generiere Chat-Titel
   * @param {string} chatId - Chat ID
   * @returns {string} Chat-Titel
   */
  getChatTitle(chatId) {
    if (chatId === 'context_shared') {
      return '🌍 Shared Chat (Alle Nutzer)';
    }
    // Extrahiere Username aus Chat-ID
    const parts = chatId.replace('context_', '').split('_');
    const username = parts.slice(0, -1).join('_');
    return `👤 ${username}'s Private Chat`;
  }

  /**
   * Speichere Chat
   * @param {string} chatId - Chat ID
   * @param {object} chatData - Chat-Daten
   */
  saveChat(chatId, chatData) {
    try {
      const chatPath = this.getChatPath(chatId);
      chatData.updated_at = new Date().toISOString();
      fs.writeFileSync(chatPath, JSON.stringify(chatData, null, 2), 'utf8');
    } catch (error) {
      console.error(`Fehler beim Speichern von Chat ${chatId}:`, error.message);
    }
  }

  /**
   * Füge Nachricht zu Chat hinzu
   * @param {string} chatId - Chat ID
   * @param {string} role - 'user' oder 'assistant'
   * @param {string} content - Nachrichteninhalt
   * @param {object} metadata - Optional: Zusätzliche Metadaten
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
   * Hole alle Nachrichten aus Chat
   * @param {string} chatId - Chat ID
   * @returns {array} Array von Nachrichten
   */
  getMessages(chatId) {
    const chat = this.loadChat(chatId);
    return chat.messages || [];
  }

  /**
   * Hole letzte N Nachrichten (für Kontext)
   * @param {string} chatId - Chat ID
   * @param {number} limit - Anzahl der Nachrichten (default: 10)
   * @returns {array} Array der letzten N Nachrichten
   */
  getRecentMessages(chatId, limit = 10) {
    const messages = this.getMessages(chatId);
    return messages.slice(Math.max(0, messages.length - limit));
  }

  /**
   * Konvertiere Chat-Nachrichten zu OpenWebUI Message-Format
   * @param {string} chatId - Chat ID
   * @returns {array} Array im OpenWebUI-Format
   */
  getChatHistory(chatId) {
    const messages = this.getRecentMessages(chatId, 20);
    return messages.map((msg) => ({
      role: msg.role,
      content: msg.content,
    }));
  }

  /**
   * Lösche Chat
   * @param {string} chatId - Chat ID
   */
  deleteChat(chatId) {
    try {
      const chatPath = this.getChatPath(chatId);
      if (fs.existsSync(chatPath)) {
        fs.unlinkSync(chatPath);
      }
    } catch (error) {
      console.error(`Fehler beim Löschen von Chat ${chatId}:`, error.message);
    }
  }

  /**
   * Liste alle verfügbaren Chats auf
   * @returns {array} Array von Chat-Objekten
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
      console.error('Fehler beim Auflisten von Chats:', error.message);
      return [];
    }
  }

  /**
   * Hole Chat-Statistiken
   * @param {string} chatId - Chat ID
   * @returns {object} Statistiken
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
