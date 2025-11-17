const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('setmode')
    .setDescription('Toggle context mode between shared and private')
    .setDefaultMemberPermissions(0), // Admin only

  async execute(interaction, { configManager }) {
    try {
      // Check if user is admin
      if (!configManager.isAdmin(interaction.user.id)) {
        return await interaction.reply({
          content: '❌ You do not have permission to use this command.',
          ephemeral: true
        });
      }

      const newMode = configManager.toggleContextMode();
      
      const modeDescription = newMode === 'shared' 
        ? '🔗 Shared mode - all users share one chat'
        : '🔒 Private mode - each user has their own chat';

      await interaction.reply({
        content: `✅ Context mode toggled to: **${newMode.toUpperCase()}**\n${modeDescription}`,
        ephemeral: false
      });

      console.log(`🔄 Context mode changed to: ${newMode}`);
    } catch (error) {
      console.error('Error in setmode command:', error);
      await interaction.reply({
        content: '❌ An error occurred while toggling context mode.',
        ephemeral: true
      });
    }
  }
};
