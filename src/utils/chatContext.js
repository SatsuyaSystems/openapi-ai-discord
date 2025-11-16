/**
 * Stores and manages chat context for users
 * Supports both shared and private contexts
 */
class ChatContextManager {
  constructor() {
    // Shared context for all users
    this.sharedContext = [];
    
    // Private contexts for individual users
    this.userContexts = new Map();
    
    // Maximum number of messages per context
    this.maxContextLength = 20;
  }

  /**
   * Add a message to the context
   * @param {string} userId - Discord user ID
   * @param {string} role - 'user' or 'assistant'
   * @param {string} content - message content
   * @param {string} mode - 'shared' or 'private'
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
      // Limit for context length
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
   * Return the current context (for API)
   * @param {string} userId - Discord user ID
   * @param {string} mode - 'shared' or 'private'
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
   * Clear a user's context (private mode only)
   */
  clearUserContext(userId) {
    this.userContexts.delete(userId);
  }

  /**
   * Clear the shared context
   */
  clearSharedContext() {
    this.sharedContext = [];
  }

  /**
   * Return statistics
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
