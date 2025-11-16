const { SlashCommandBuilder } = require('discord.js');
const configManager = require('../utils/configManager');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('setmode')
    .setDescription('Wechselt zwischen Shared und Private Kontext-Modus')
    .addStringOption(option =>
      option.setName('mode')
        .setDescription('Der Modus: shared (alle in einem Kontext) oder private (jeder eigener Kontext)')
        .setRequired(true)
        .addChoices(
          { name: 'Shared (alle zusammen)', value: 'shared' },
          { name: 'Private (jeder einzeln)', value: 'private' }
        )
    ),
  
  async execute(interaction) {
    // Prüfe ob User Admin ist
    if (!configManager.isAdmin(interaction.user.id)) {
      return interaction.reply({
        content: '❌ Du hast keine Berechtigung für diesen Command!',
        ephemeral: true
      });
    }

    const mode = interaction.options.getString('mode');
    
    const success = configManager.setContextMode(mode);
    
    if (success) {
      const modeText = mode === 'shared' 
        ? '👥 Alle User teilen sich einen Chat-Kontext'
        : '🔒 Jeder User hat seinen eigenen Chat-Kontext';
      
      return interaction.reply({
        content: `✅ Modus geändert!\n${modeText}\n📝 **.env wurde aktualisiert**`,
        ephemeral: true
      });
    } else {
      return interaction.reply({
        content: '❌ Fehler beim Ändern des Modus!',
        ephemeral: true
      });
    }
  }
};
