const { ChannelType } = require('discord.js');

/**
 * Formatiert eine Discord-Nachricht mit Metadaten für die OpenWebUI API
 */
function formatMessageWithMetadata(message) {
  const metadata = {
    author: message.author.username,
    authorId: message.author.id,
      channel: message.channel.name || ((message.channel && (message.channel.type === ChannelType.DM || message.channel.type === 1 || String(message.channel.type).toUpperCase() === 'DM')) ? 'DM' : message.channelId),
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
function formatResponseForDiscord(response, maxLength = 2000) {
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

module.exports = {
  formatMessageWithMetadata,
  formatResponseForDiscord
};
