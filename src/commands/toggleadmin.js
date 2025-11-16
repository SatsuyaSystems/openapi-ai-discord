const { SlashCommandBuilder } = require('discord.js');
const configManager = require('../utils/configManager');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('toggleadmin')
    .setDescription('Enable or disable Admin-only mode (maintenance)')
    .addBooleanOption(option =>
      option.setName('enabled')
        .setDescription('True = Admin-only mode ON, False = OFF')
        .setRequired(true)
    ),

  async execute(interaction) {
    // Only admins can run this
    if (!configManager.isAdmin(interaction.user.id)) {
      return interaction.reply({ content: '❌ You do not have permission to run this command!', ephemeral: true });
    }

    const enabled = interaction.options.getBoolean('enabled');
    configManager.setAdminOnly(enabled);

    const status = enabled ? '🛠️ **Admin-only mode ENABLED**' : '✅ **Admin-only mode DISABLED**';
    const description = enabled
      ? 'The bot will only respond to admins while maintenance is active.'
      : 'The bot will respond to all users.';

    return interaction.reply({ content: `${status}\n\n${description}\n\n📝 .env updated`, ephemeral: true });
  }
};
