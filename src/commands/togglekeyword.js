const { SlashCommandBuilder } = require('discord.js');
const configManager = require('../utils/configManager');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('togglekeyword')
    .setDescription('Toggle global keyword listening on/off')
    .addBooleanOption(option =>
      option.setName('enabled')
        .setDescription('True to enable, false to disable')
        .setRequired(true)
    )
    .addStringOption(option =>
      option.setName('keyword')
        .setDescription('Optional keyword to listen for')
        .setRequired(false)
    ),

  async execute(interaction) {
    // Check admin permission
    if (!configManager.isAdmin(interaction.user.id)) {
      return interaction.reply({
        content: '❌ You do not have permission to run this command!',
        ephemeral: true
      });
    }

    const enabled = interaction.options.getBoolean('enabled');
    const keyword = interaction.options.getString('keyword');

    // Enable/Disable
    configManager.setKeywordEnabled(enabled);

    // Set new keyword if provided
    if (keyword) {
      const keywordSet = configManager.setKeywordTrigger(keyword);
      if (!keywordSet) {
        return interaction.reply({
          content: '❌ Invalid keyword!',
          ephemeral: true
        });
      }
    }

      const config = configManager.getKeywordConfig();
      const status = config.enabled ? '🟢 **ENABLED**' : '🔴 **DISABLED**';

      return interaction.reply({
        content: `${status}\n\n**Keyword:** \`${config.trigger}\`\n**Status:** ${config.enabled ? 'Bot listens for the keyword in ALL channels' : 'Keyword listening disabled'}\n\n📝 **.env updated**`,
        ephemeral: true
      });
  }
};