/**
 * In-memory message queue for the Discord bot
 * Processes messages with retry logic
 */
class MessageQueue {
  constructor(options = {}) {
    this.queue = [];
    this.processing = new Set();
    this.maxRetries = options.maxRetries || 3;
    this.retryDelay = options.retryDelay || 5000; // 5 Sekunden
    this.processInterval = options.processInterval || 1000; // 1 Sekunde
    this.isRunning = false;
    
    // statistics
    this.stats = {
      processed: 0,
      failed: 0,
      retried: 0,
      totalInQueue: 0
    };

    // start processing loop
    this.start();
  }

  /**
   * Enqueue a message
   */
  enqueue(message, metadata = {}) {
    const queueItem = {
      id: `${message.id}-${Date.now()}`,
      messageId: message.id,
      channelId: message.channelId,
      author: message.author,
      content: message.content,
      mentions: message.mentions,
      isReply: message.reference ? true : false,
      replyTo: message.reference?.messageId || null,
      timestamp: message.createdTimestamp,
      retries: 0,
      // copy important flags to top-level so handlers can read them directly
      metadata: {
        isMention: metadata.isMention,
        isListenerChannel: metadata.isListenerChannel,
        ...metadata
      },
      isDM: metadata.isDM,
      isMention: metadata.isMention,
      isListenerChannel: metadata.isListenerChannel,
      hasKeyword: metadata.hasKeyword,
      createdAt: Date.now(),
      handler: metadata.handler // handler function to process the item
    };

    this.queue.push(queueItem);
    this.stats.totalInQueue = this.queue.length;
    
    console.log(`📨 Enqueued message: ${message.author.username} (Queue: ${this.queue.length})`);
    return queueItem.id;
  }

  /**
   * Start processing the queue
   */
  start() {
    if (this.isRunning) return;
    
    this.isRunning = true;
    console.log('🚀 Message queue started');
    
    this.processingTimer = setInterval(() => {
      this.processNext();
    }, this.processInterval);
  }

  /**
   * Stop processing
   */
  stop() {
    this.isRunning = false;
    if (this.processingTimer) {
      clearInterval(this.processingTimer);
    }
    console.log('⏹️ Message queue stopped');
  }

  /**
   * Process the next message
   */
  async processNext() {
    if (this.queue.length === 0) return;

    // check if too many are processed at once
    if (this.processing.size >= 3) return;

    const item = this.queue.shift();
    
    // prevent duplicates
    if (this.processing.has(item.id)) {
      return;
    }

    this.processing.add(item.id);

    try {
      // execute handler
      if (item.handler && typeof item.handler === 'function') {
        await item.handler(item);
      }

      this.stats.processed++;
      console.log(`✅ Message processed: ${item.author.username} (Stats: ${this.stats.processed}/${this.stats.failed})`);

    } catch (error) {
      console.error(`❌ Error processing message: ${error.message}`);

      // retry logic
      if (item.retries < this.maxRetries) {
        item.retries++;
        this.stats.retried++;
        
        console.warn(`🔄 Retry ${item.retries}/${this.maxRetries} for message ${item.messageId}`);
        
        // Re-enqueue after delay
        setTimeout(() => {
          this.queue.push(item);
          this.stats.totalInQueue = this.queue.length;
        }, this.retryDelay * item.retries); // Exponentielles Backoff
      } else {
        this.stats.failed++;
        console.error(`❌ Message permanently failed: ${item.messageId}`);
      }
    } finally {
      this.processing.delete(item.id);
      this.stats.totalInQueue = this.queue.length;
    }
  }

  /**
   * Return statistics
   */
  getStats() {
    return {
      ...this.stats,
      queueLength: this.queue.length,
      processing: this.processing.size,
      isRunning: this.isRunning
    };
  }

  /**
   * Reset statistics
   */
  resetStats() {
    this.stats = {
      processed: 0,
      failed: 0,
      retried: 0,
      totalInQueue: 0
    };
  }

  /**
   * Return queue content for debugging
   */
  getQueue() {
    return this.queue.map(item => ({
      id: item.id,
      author: item.author.username,
      content: item.content.substring(0, 50),
      retries: item.retries,
      isReply: item.isReply,
      age: Date.now() - item.createdAt
    }));
  }

  /**
   * Clear the queue
   */
  clear() {
    this.queue = [];
    this.stats.totalInQueue = 0;
    console.log('🗑️ Message queue cleared');
  }
}

module.exports = MessageQueue;
