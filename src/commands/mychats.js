const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const configManager = require('../utils/configManager');

let openwebui; // Wird vom Bot injiziert

/**
 * Injiziert den OpenWebUI Client
 */
function setOpenWebUIClient(client) {
  openwebui = client;
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('mychats')
    .setDescription('Show your local chats'),
  
  setOpenWebUIClient,

  async execute(interaction) {
    if (!openwebui) {
      return interaction.reply({
        content: '❌ OpenWebUI client not initialized!',
        ephemeral: true
      });
    }

    try {
      // Hole den aktuellen Context-Modus
      const contextMode = configManager.getContextMode();
      
      // Create or get chat (uses local JSON memory)
      const chatInfo = openwebui.getOrCreateChat(
        interaction.user.id,
        interaction.user.username,
        contextMode
      );

      // Get chat statistics
      const stats = openwebui.getChatStats(chatInfo.id);
      
      const modeEmoji = contextMode === 'shared' ? '👥' : '🔒';
      const modeText = contextMode === 'shared' 
        ? 'Shared: all users share a chat' 
        : 'Private: each user has their own chat';

      const embed = new EmbedBuilder()
        .setColor('#0099ff')
        .setTitle('💬 Your Local Chat')
        .setDescription(`${modeEmoji} ${modeText}`)
        .addFields(
          { name: '📌 Chat Name', value: `\`${chatInfo.title}\``, inline: false },
          { name: '🆔 Chat ID', value: `\`${chatInfo.id}\``, inline: false },
          { 
            name: '📊 Statistics', 
            value: `**Messages:** ${stats.messageCount}\n**User:** ${stats.userMessages} | **Bot:** ${stats.assistantMessages}`, 
            inline: false 
          },
          { name: '👤 Username', value: interaction.user.username, inline: true },
          { name: '📍 Discord ID', value: `\`${interaction.user.id}\``, inline: true },
          { name: '🔗 WebUI URL', value: `\`${openwebui.baseUrl}\``, inline: false },
          { name: '💡 Tip', value: 'All your messages to this bot are stored locally in this chat.', inline: false }
        )
        .setFooter({ text: 'Data is stored locally in the JSON memory system' });

      return interaction.reply({
        embeds: [embed],
        ephemeral: true
      });
    } catch (error) {
      console.error('Error fetching chat:', error);
      return interaction.reply({
        content: `❌ Error fetching chat: ${error.message}`,
        ephemeral: true
      });
    }
  }
};
