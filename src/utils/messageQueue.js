/**
 * In-Memory Message Queue für Discord Bot
 * Verarbeitet Nachrichten mit Retry-Logik
 */
class MessageQueue {
  constructor(options = {}) {
    this.queue = [];
    this.processing = new Set();
    this.maxRetries = options.maxRetries || 3;
    this.retryDelay = options.retryDelay || 5000; // 5 Sekunden
    this.processInterval = options.processInterval || 1000; // 1 Sekunde
    this.isRunning = false;
    
    // Statistiken
    this.stats = {
      processed: 0,
      failed: 0,
      retried: 0,
      totalInQueue: 0
    };

    // Starte Verarbeitungs-Loop
    this.start();
  }

  /**
   * Fügt eine Nachricht zur Queue hinzu
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
      // Kopiere wichtige Flags auch auf die oberste Ebene, damit Handler sie direkt lesen kann
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
      handler: metadata.handler // Funktion die verarbeitet wird
    };

    this.queue.push(queueItem);
    this.stats.totalInQueue = this.queue.length;
    
    console.log(`📨 Nachricht in Queue: ${message.author.username} (Queue: ${this.queue.length})`);
    return queueItem.id;
  }

  /**
   * Startet die Verarbeitung der Queue
   */
  start() {
    if (this.isRunning) return;
    
    this.isRunning = true;
    console.log('🚀 Message Queue gestartet');
    
    this.processingTimer = setInterval(() => {
      this.processNext();
    }, this.processInterval);
  }

  /**
   * Stoppt die Verarbeitung
   */
  stop() {
    this.isRunning = false;
    if (this.processingTimer) {
      clearInterval(this.processingTimer);
    }
    console.log('⏹️ Message Queue gestoppt');
  }

  /**
   * Verarbeitet die nächste Nachricht
   */
  async processNext() {
    if (this.queue.length === 0) return;

    // Prüfe ob zu viele gleichzeitig verarbeitet werden
    if (this.processing.size >= 3) return;

    const item = this.queue.shift();
    
    // Verhindere Duplikate
    if (this.processing.has(item.id)) {
      return;
    }

    this.processing.add(item.id);

    try {
      // Führe Handler aus
      if (item.handler && typeof item.handler === 'function') {
        await item.handler(item);
      }

      this.stats.processed++;
      console.log(`✅ Nachricht verarbeitet: ${item.author.username} (Stats: ${this.stats.processed}/${this.stats.failed})`);

    } catch (error) {
      console.error(`❌ Fehler bei Verarbeitung: ${error.message}`);

      // Retry-Logik
      if (item.retries < this.maxRetries) {
        item.retries++;
        this.stats.retried++;
        
        console.warn(`🔄 Retry ${item.retries}/${this.maxRetries} für Nachricht ${item.messageId}`);
        
        // Füge wieder zur Queue hinzu nach Verzögerung
        setTimeout(() => {
          this.queue.push(item);
          this.stats.totalInQueue = this.queue.length;
        }, this.retryDelay * item.retries); // Exponentielles Backoff
      } else {
        this.stats.failed++;
        console.error(`❌ Nachricht endgültig fehlgeschlagen: ${item.messageId}`);
      }
    } finally {
      this.processing.delete(item.id);
      this.stats.totalInQueue = this.queue.length;
    }
  }

  /**
   * Gibt Statistiken aus
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
   * Setzt Statistiken zurück
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
   * Gibt Queue-Inhalt für Debugging aus
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
   * Leert die Queue
   */
  clear() {
    this.queue = [];
    this.stats.totalInQueue = 0;
    console.log('🗑️ Message Queue geleert');
  }
}

module.exports = MessageQueue;
