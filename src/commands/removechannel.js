const { SlashCommandBuilder } = require('discord.js');
const configManager = require('../utils/configManager');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('removechannel')
    .setDescription('Remove a channel from the bot listener list')
    .addChannelOption(option =>
      option.setName('channel')
        .setDescription('Channel to remove')
        .setRequired(true)
    ),
  
  async execute(interaction) {
    // Check admin permission
    if (!configManager.isAdmin(interaction.user.id)) {
      return interaction.reply({
        content: '❌ You do not have permission to run this command!',
        ephemeral: true
      });
    }

    const channel = interaction.options.getChannel('channel');
    
    const removed = configManager.removeListenerChannel(channel.id);
    
    if (removed) {
      return interaction.reply({
        content: `✅ Channel ${channel} removed.\n📝 **.env updated**`,
        ephemeral: true
      });
    } else {
      return interaction.reply({
        content: `⚠️ Channel ${channel} is not in the list!`,
        ephemeral: true
      });
    }
  }
};
