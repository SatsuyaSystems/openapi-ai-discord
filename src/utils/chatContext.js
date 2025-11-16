/**
 * Speichert und verwaltet Chat-Verlauf für User
 * Unterstützt sowohl Shared-Kontext als auch Private-Kontexte
 */
class ChatContextManager {
  constructor() {
    // Shared Context für alle User
    this.sharedContext = [];
    
    // Private Kontexte für einzelne User
    this.userContexts = new Map();
    
    // Maximale Nachrichten pro Kontext
    this.maxContextLength = 20;
  }

  /**
   * Fügt eine Nachricht zum Kontext hinzu
   * @param {string} userId - Discord User ID
   * @param {string} role - 'user' oder 'assistant'
   * @param {string} content - Der Nachrichteninhalt
   * @param {string} mode - 'shared' oder 'private'
   */
  addMessage(userId, role, content, mode = 'shared') {
    const message = {
      role,
      content,
      timestamp: new Date(),
      userId
    };

    if (mode === 'shared') {
      this.sharedContext.push(message);
      // Limit für Context Länge
      if (this.sharedContext.length > this.maxContextLength) {
        this.sharedContext = this.sharedContext.slice(-this.maxContextLength);
      }
    } else {
      if (!this.userContexts.has(userId)) {
        this.userContexts.set(userId, []);
      }
      const userContext = this.userContexts.get(userId);
      userContext.push(message);
      
      if (userContext.length > this.maxContextLength) {
        this.userContexts.set(userId, userContext.slice(-this.maxContextLength));
      }
    }
  }

  /**
   * Gibt den aktuellen Kontext zurück (für API)
   * @param {string} userId - Discord User ID
   * @param {string} mode - 'shared' oder 'private'
   */
  getContext(userId, mode = 'shared') {
    if (mode === 'shared') {
      return this.sharedContext.map(msg => ({
        role: msg.role,
        content: msg.content
      }));
    } else {
      if (!this.userContexts.has(userId)) {
        return [];
      }
      return this.userContexts.get(userId).map(msg => ({
        role: msg.role,
        content: msg.content
      }));
    }
  }

  /**
   * Löscht den Kontext eines Users (nur bei Private-Modus)
   */
  clearUserContext(userId) {
    this.userContexts.delete(userId);
  }

  /**
   * Löscht den Shared Context
   */
  clearSharedContext() {
    this.sharedContext = [];
  }

  /**
   * Gibt Statistiken aus
   */
  getStats() {
    return {
      sharedContextLength: this.sharedContext.length,
      userContextsCount: this.userContexts.size,
      totalUsers: this.userContexts.size
    };
  }
}

module.exports = ChatContextManager;
