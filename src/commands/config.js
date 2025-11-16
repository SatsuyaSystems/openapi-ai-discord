const { SlashCommandBuilder } = require('discord.js');
const configManager = require('../utils/configManager');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('config')
    .setDescription('Show basic bot configuration (admin only)'),

  async execute(interaction) {
    if (!configManager.isAdmin(interaction.user.id)) {
      return interaction.reply({ content: '❌ You do not have permission to run this command!', ephemeral: true });
    }

    const mode = configManager.getContextMode();
    const channels = configManager.getListenerChannels();
    const openwebui = configManager.getOpenWebUIConfig();
    const keyword = configManager.getKeywordConfig();

    const msg = `**Context mode:** ${mode}\n**Listener channels:** ${channels.length}\n**OpenWebUI:** ${openwebui.baseUrl}\n**Keyword enabled:** ${keyword.enabled} (${keyword.trigger})`;

    return interaction.reply({ content: msg, ephemeral: true });
  }
};
