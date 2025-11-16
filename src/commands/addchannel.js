const { SlashCommandBuilder } = require('discord.js');
const configManager = require('../utils/configManager');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('addchannel')
    .setDescription('Add a listener channel where the bot will read messages')
    .addChannelOption(option =>
      option.setName('channel')
        .setDescription('Channel to add')
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
    
    const added = configManager.addListenerChannel(channel.id);
    
    if (added) {
      return interaction.reply({
        content: `✅ Channel ${channel} added. The bot will now listen here.\n📝 **.env updated**`,
        ephemeral: true
      });
    } else {
      return interaction.reply({
        content: `⚠️ Channel ${channel} is already in the list!`,
        ephemeral: true
      });
    }
  }
};
