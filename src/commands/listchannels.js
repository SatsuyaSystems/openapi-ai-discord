const { SlashCommandBuilder } = require('discord.js');
const configManager = require('../utils/configManager');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('listchannels')
    .setDescription('Show all active listener channels'),
  
  async execute(interaction) {
    // Check admin permission
    if (!configManager.isAdmin(interaction.user.id)) {
      return interaction.reply({
        content: '❌ You do not have permission to run this command!',
        ephemeral: true
      });
    }

    const channels = configManager.getListenerChannels();
    
    if (channels.length === 0) {
      return interaction.reply({
        content: '📭 No listener channels configured!',
        ephemeral: true
      });
    }

    const channelList = channels.map(id => `<#${id}>`).join('\n');
    
    return interaction.reply({
      content: `📋 **Active listener channels:**\n${channelList}`,
      ephemeral: true
    });
  }
};
