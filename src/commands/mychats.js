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
    .setDescription('Zeigt deine Chats in OpenWebUI'),
  
  setOpenWebUIClient,

  async execute(interaction) {
    if (!openwebui) {
      return interaction.reply({
        content: '❌ OpenWebUI Client nicht initialisiert!',
        ephemeral: true
      });
    }

    try {
      // Hole den aktuellen Context-Modus
      const contextMode = configManager.getContextMode();
      
      // Erstelle oder hole Chat (nutzt JSON Memory!)
      const chatInfo = openwebui.getOrCreateChat(
        interaction.user.id,
        interaction.user.username,
        contextMode
      );

      // Hole Chat-Statistiken
      const stats = openwebui.getChatStats(chatInfo.id);
      
      const modeEmoji = contextMode === 'shared' ? '👥' : '🔒';
      const modeText = contextMode === 'shared' 
        ? 'Shared: Alle User teilen einen Chat' 
        : 'Private: Jeder User hat seinen eigenen Chat';

      const embed = new EmbedBuilder()
        .setColor('#0099ff')
        .setTitle('💬 Dein OpenWebUI Chat')
        .setDescription(`${modeEmoji} ${modeText}`)
        .addFields(
          { name: '📌 Chat Name', value: `\`${chatInfo.title}\``, inline: false },
          { name: '🆔 Chat ID', value: `\`${chatInfo.id}\``, inline: false },
          { 
            name: '📊 Statistiken', 
            value: `**Nachrichten:** ${stats.messageCount}\n**User:** ${stats.userMessages} | **Bot:** ${stats.assistantMessages}`, 
            inline: false 
          },
          { name: '👤 Benutzername', value: interaction.user.username, inline: true },
          { name: '📍 Discord ID', value: `\`${interaction.user.id}\``, inline: true },
          { name: '🔗 WebUI URL', value: `\`${openwebui.baseUrl}\``, inline: false },
          { name: '💡 Tipp', value: 'Alle deine Nachrichten an diesen Bot werden in diesem Chat lokal gespeichert!', inline: false }
        )
        .setFooter({ text: 'Daten werden lokal im JSON Memory System gespeichert' });

      return interaction.reply({
        embeds: [embed],
        ephemeral: true
      });
    } catch (error) {
      console.error('Fehler beim Chat-Abrufen:', error);
      return interaction.reply({
        content: `❌ Fehler beim Abrufen des Chats: ${error.message}`,
        ephemeral: true
      });
    }
  }
};
