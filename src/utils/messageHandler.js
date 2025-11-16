const { ChannelType } = require('discord.js');

const memoryManager = require('./memoryManager');

class MessageHandler {
  constructor(openwebui, configManager) {
    this.openwebui = openwebui;
    this.configManager = configManager;
  }

  /**
   * Verarbeitet ein Queue-Item und antwortet
   */
  async handle(queueItem) {
    try {
      console.log(`🔄 Verarbeite Queue-Item: DM=${queueItem.isDM}, Channel=${queueItem.channelId}, Message=${queueItem.messageId}`);

      // Hole die Discord Message
      const channel = await this.getChannel(queueItem.channelId);
      if (!channel) {
        throw new Error(`Kanal nicht gefunden: ${queueItem.channelId}`);
      }

      let message;
      try {
        message = await channel.messages.fetch(queueItem.messageId);
      } catch (error) {
        throw new Error(`Nachricht nicht gefunden: ${queueItem.messageId}`);
      }

      console.log(`📝 Nachricht gefunden: "${message.content.substring(0, 50)}..." in ${((message.channel && (message.channel.type === ChannelType.DM || message.channel.type === 1 || String(message.channel.type).toUpperCase() === 'DM')) ? 'DM' : 'Channel')}`);

      // Zeige dass der Bot "tippt"
      await channel.sendTyping();

      // Formatiere die Nachricht mit Metadaten
      const { formatted, content } = this.formatMessageWithMetadata(message);

      // Hole Config
      const contextMode = queueItem.isDM ? 'private' : this.configManager.getContextMode();
      const systemPrompt = this.configManager.getSystemPrompt();
      const webUIConfig = this.configManager.getOpenWebUIConfig();

      // Hole oder erstelle Chat (nutzt JSON Memory System!)
      const chatInfo = this.openwebui.getOrCreateChat(
        message.author.id,
        message.author.username,
        contextMode
      );

      console.log(`💬 Chat ID: ${chatInfo.id} (${chatInfo.title})`);

      // Lade Chat-Verlauf AUS LOKALEM MEMORY (JSON)
      const chatHistory = this.openwebui.getChatHistory(chatInfo.id);
      console.log(
        `📚 Lade ${chatHistory.length} Nachrichten aus lokalem Memory`
      );

      // Sende an OpenWebUI (nutzt /api/chat/completions)
      const response = await this.openwebui.chat(
        formatted,
        systemPrompt,
        chatHistory
      );

      // Speichere BENUTZER-NACHRICHT im lokalen Memory
      this.openwebui.saveMessage(chatInfo.id, 'user', content, {
        author: message.author.username,
        authorId: message.author.id,
        channel: message.channel.name || message.channelId,
        timestamp: message.createdTimestamp,
      });

      // Speichere BOT-ANTWORT im lokalen Memory
      this.openwebui.saveMessage(chatInfo.id, 'assistant', response, {
        model: webUIConfig.model,
        timestamp: Date.now(),
      });

      console.log(`💾 Nachrichten in lokalem Memory gespeichert`);

      // Formatiere die Antwort für Discord (max 2000 Zeichen pro Nachricht)
      const formattedResponses = this.formatResponseForDiscord(response);

      // Antworte auf die Nachricht (Reply mit Thread)
      if (Array.isArray(formattedResponses)) {
        let firstReply = null;

        for (let i = 0; i < formattedResponses.length; i++) {
          const resp = formattedResponses[i];

          if (i === 0) {
            // Erste Antwort: In DMs send, sonst reply
            if (message.channel && (message.channel.type === ChannelType.DM || message.channel.type === 1 || String(message.channel.type).toUpperCase() === 'DM')) {
              firstReply = await channel.send({
                content: resp,
              });
            } else {
              firstReply = await message.reply({
                content: resp,
                allowedMentions: { repliedUser: false },
              });
            }
          } else {
            // Weitere Antworten: Im gleichen Thread oder als Follow-up
            if (message.channel && (message.channel.type === ChannelType.DM || message.channel.type === 1 || String(message.channel.type).toUpperCase() === 'DM')) {
              await channel.send({
                content: resp,
              });
            } else {
              await firstReply.reply({
                content: resp,
                allowedMentions: { repliedUser: false },
              });
            }
          }
        }
      } else {
        // Einzelne Antwort: In DMs send, sonst reply
        if (message.channel && (message.channel.type === ChannelType.DM || message.channel.type === 1 || String(message.channel.type).toUpperCase() === 'DM')) {
          await channel.send({
            content: formattedResponses,
          });
        } else {
          await message.reply({
            content: formattedResponses,
            allowedMentions: { repliedUser: false },
          });
        }
      }

      // Gebe Statistiken aus
      const stats = this.openwebui.getChatStats(chatInfo.id);
      console.log(`� Chat Statistiken:`, stats);

    } catch (error) {
      console.error(`❌ Fehler beim Verarbeiten der Nachricht: ${error.message}`);
      
      try {
        const channel = await this.getChannel(queueItem.channelId);
        const message = await channel.messages.fetch(queueItem.messageId);
        
        await message.reply({
          content: '❌ Es gab einen Fehler beim Verarbeiten deiner Nachricht. Versuche es später erneut.',
          allowedMentions: { repliedUser: false }
        });
      } catch (replyError) {
        console.error(`❌ Fehler beim Senden der Fehlernachricht: ${replyError.message}`);
      }

      // Re-throw für Queue Retry-Logik
      throw error;
    }
  }

  /**
   * Formatiert eine Discord-Nachricht mit Metadaten
   */
  formatMessageWithMetadata(message) {
    const metadata = {
      author: message.author.username,
      authorId: message.author.id,
      channel: message.channel.name || (message.channel.type === ChannelType.DM ? 'DM' : message.channelId),
      channelId: message.channel.id,
      timestamp: message.createdTimestamp,
      isMention: message.mentions.has(message.client.user),
      attachmentsCount: message.attachments.size
    };

    const formattedMessage = `
[Discord Nachricht]
**Autor:** ${metadata.author} (${metadata.authorId})
**Kanal:** ${metadata.channel}
**Zeit:** ${new Date(metadata.timestamp).toLocaleString('de-DE')}
**Anhänge:** ${metadata.attachmentsCount}

${message.content}
    `.trim();

    return {
      formatted: formattedMessage,
      metadata: metadata,
      content: message.content
    };
  }

  /**
   * Formatiert die Bot-Antwort zurück für Discord
   */
  formatResponseForDiscord(response, maxLength = 2000) {
    if (response.length <= maxLength) {
      return response;
    }
    
    // Teile lange Nachrichten auf
    const chunks = [];
    let currentChunk = '';
    
    response.split('\n').forEach(line => {
      if ((currentChunk + line).length <= maxLength) {
        currentChunk += line + '\n';
      } else {
        if (currentChunk) chunks.push(currentChunk.trim());
        currentChunk = line + '\n';
      }
    });
    
    if (currentChunk) chunks.push(currentChunk.trim());
    
    return chunks;
  }

  /**
   * Holt einen Channel vom Client
   */
  async getChannel(channelId) {
    // Diese Methode wird vom Bot injiziert
    if (this._getChannelFn) {
      try {
        const channel = await this._getChannelFn(channelId);
        console.log(`📡 Channel gefunden: ${channel?.type} (${channelId})`);
        return channel;
      } catch (error) {
        console.error(`❌ Fehler beim Laden des Channels ${channelId}:`, error.message);
        throw error;
      }
    }
    throw new Error('Channel-Getter nicht konfiguriert');
  }

  /**
   * Injiziert die getChannel Funktion vom Bot
   */
  setChannelGetter(fn) {
    this._getChannelFn = fn;
  }
}

module.exports = MessageHandler;
