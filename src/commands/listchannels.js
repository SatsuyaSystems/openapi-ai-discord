const { SlashCommandBuilder } = require('discord.js');
const configManager = require('../utils/configManager');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('listchannels')
    .setDescription('Zeigt alle aktiven Listener-Kanäle'),
  
  async execute(interaction) {
    // Prüfe ob User Admin ist
    if (!configManager.isAdmin(interaction.user.id)) {
      return interaction.reply({
        content: '❌ Du hast keine Berechtigung für diesen Command!',
        ephemeral: true
      });
    }

    const channels = configManager.getListenerChannels();
    
    if (channels.length === 0) {
      return interaction.reply({
        content: '📭 Keine Listener-Kanäle konfiguriert!',
        ephemeral: true
      });
    }

    const channelList = channels.map(id => `<#${id}>`).join('\n');
    
    return interaction.reply({
      content: `📋 **Aktive Listener-Kanäle:**\n${channelList}`,
      ephemeral: true
    });
  }
};
