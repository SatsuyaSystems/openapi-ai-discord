const { SlashCommandBuilder } = require('discord.js');
const configManager = require('../utils/configManager');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('addchannel')
    .setDescription('Fügt einen Kanal hinzu, in dem der Bot auf alle Nachrichten hört')
    .addChannelOption(option =>
      option.setName('channel')
        .setDescription('Der Kanal, der hinzugefügt werden soll')
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
    
    const added = configManager.addListenerChannel(channel.id);
    
    if (added) {
      return interaction.reply({
        content: `✅ Kanal ${channel} wurde hinzugefügt! Der Bot hört nun auf alle Nachrichten hier.\n📝 **.env wurde aktualisiert**`,
        ephemeral: true
      });
    } else {
      return interaction.reply({
        content: `⚠️ Kanal ${channel} ist bereits in der Liste!`,
        ephemeral: true
      });
    }
  }
};
