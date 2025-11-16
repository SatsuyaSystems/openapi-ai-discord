const { SlashCommandBuilder } = require('discord.js');
const configManager = require('../utils/configManager');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('setmode')
    .setDescription('Switch between shared and private context modes')
    .addStringOption(option =>
      option.setName('mode')
        .setDescription('Mode: shared (all share one context) or private (each user has own context)')
        .setRequired(true)
        .addChoices(
          { name: 'Shared (all together)', value: 'shared' },
          { name: 'Private (individual)', value: 'private' }
        )
    ),
  
  async execute(interaction) {
    // Check admin permission
    if (!configManager.isAdmin(interaction.user.id)) {
      return interaction.reply({
        content: '❌ You do not have permission to run this command!',
        ephemeral: true
      });
    }

    const mode = interaction.options.getString('mode');
    
    const success = configManager.setContextMode(mode);
    
    if (success) {
      const modeText = mode === 'shared' 
        ? '👥 All users share a chat context'
        : '🔒 Each user has a private chat context';
      
      return interaction.reply({
        content: `✅ Mode changed!\n${modeText}\n📝 **.env updated**`,
        ephemeral: true
      });
    } else {
      return interaction.reply({
        content: '❌ Failed to change mode!',
        ephemeral: true
      });
    }
  }
};
