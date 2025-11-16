const { SlashCommandBuilder } = require('discord.js');
const configManager = require('../utils/configManager');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('removechannel')
    .setDescription('Entfernt einen Kanal aus der Bot-Listener-Liste')
    .addChannelOption(option =>
      option.setName('channel')
        .setDescription('Der Kanal, der entfernt werden soll')
        .setRequired(true)
    ),
  
  async execute(interaction) {
    // Prüfe ob User Admin ist
    if (!configManager.isAdmin(interaction.user.id)) {
      return interaction.reply({
        content: '❌ Du hast keine Berechtigung für diesen Command!',
        ephemeral: true
      });
    }

    const channel = interaction.options.getChannel('channel');
    
    const removed = configManager.removeListenerChannel(channel.id);
    
    if (removed) {
      return interaction.reply({
        content: `✅ Kanal ${channel} wurde entfernt!\n📝 **.env wurde aktualisiert**`,
        ephemeral: true
      });
    } else {
      return interaction.reply({
        content: `⚠️ Kanal ${channel} ist nicht in der Liste!`,
        ephemeral: true
      });
    }
  }
};
