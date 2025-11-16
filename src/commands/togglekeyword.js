const { SlashCommandBuilder } = require('discord.js');
const configManager = require('../utils/configManager');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('togglekeyword')
    .setDescription('Schaltet das globale Keyword-Listening ein/aus')
    .addBooleanOption(option =>
      option.setName('enabled')
        .setDescription('Ein (true) oder Aus (false)')
        .setRequired(true)
    )
    .addStringOption(option =>
      option.setName('keyword')
        .setDescription('Das Keyword, auf das gehört werden soll (optional)')
        .setRequired(false)
    ),

  async execute(interaction) {
    // Prüfe ob User Admin ist
    if (!configManager.isAdmin(interaction.user.id)) {
      return interaction.reply({
        content: '❌ Du hast keine Berechtigung für diesen Command!',
        ephemeral: true
      });
    }

    const enabled = interaction.options.getBoolean('enabled');
    const keyword = interaction.options.getString('keyword');

    // Aktiviere/Deaktiviere
    configManager.setKeywordEnabled(enabled);

    // Setze neues Keyword wenn angegeben
    if (keyword) {
      const keywordSet = configManager.setKeywordTrigger(keyword);
      if (!keywordSet) {
        return interaction.reply({
          content: '❌ Ungültiges Keyword!',
          ephemeral: true
        });
      }
    }

    const config = configManager.getKeywordConfig();
    const status = config.enabled ? '🟢 **AKTIVIERT**' : '🔴 **DEAKTIVIERT**';

    return interaction.reply({
      content: `${status}\n\n**Keyword-Trigger:** \`${config.trigger}\`\n**Status:** ${config.enabled ? 'Der Bot hört auf das Keyword in ALLEN Channels' : 'Keyword-Listening deaktiviert'}\n\n📝 **.env wurde aktualisiert**`,
      ephemeral: true
    });
  }
};