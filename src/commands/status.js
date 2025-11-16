const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const configManager = require('../utils/configManager');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('status')
    .setDescription('Zeigt den aktuellen Bot-Status'),
  
  async execute(interaction) {
    const mode = configManager.getContextMode();
    const channels = configManager.getListenerChannels();
    const openwebui = configManager.getOpenWebUIConfig();
    const keywordConfig = configManager.getKeywordConfig();
    
    const modeEmoji = mode === 'shared' ? '👥' : '🔒';
    const modeDescription = mode === 'shared' 
      ? 'Alle User teilen einen Chat-Kontext'
      : 'Jeder User hat seinen eigenen Chat-Kontext';
    
    // Versuche Channels zu laden
    let channelInfo = '';
    if (channels.length > 0) {
      channelInfo = channels.map(id => `• <#${id}> (ID: \`${id}\`)`).join('\n');
    } else {
      channelInfo = '*Keine Kanäle konfiguriert*';
    }

    const keywordStatus = keywordConfig.enabled 
      ? `🟢 **AKTIV** (\`${keywordConfig.trigger}\`)`
      : '🔴 **INAKTIV**';

    const embed = new EmbedBuilder()
      .setColor('#00FF00')
      .setTitle('🤖 Bot Status')
      .addFields(
        {
          name: `${modeEmoji} Kontext-Modus`,
          value: `**${mode.toUpperCase()}**\n${modeDescription}`,
          inline: false
        },
        {
          name: `📡 Listener-Kanäle (${channels.length})`,
          value: channelInfo,
          inline: false
        },
        {
          name: '🎯 Keyword-Trigger',
          value: `${keywordStatus}\n${keywordConfig.enabled ? 'Hört in **ALLEN** Channels' : 'Deaktiviert'}\n\n💌 **DM-Unterstützung:** Aktiv (Private Chats)`,
          inline: false
        },
        {
          name: '🎭 Systemprompt',
          value: 'ElysiumAI (Mystische Fantasy-Entität)',
          inline: false
        },
        {
          name: '🌐 OpenWebUI',
          value: `\`${openwebui.baseUrl}\``,
          inline: false
        },
        {
          name: '💾 Speicherung',
          value: 'JSON Memory System + .env Persistence',
          inline: false
        }
      )
      .setFooter({ text: 'Verwende /addchannel, /removechannel, /setmode oder /togglekeyword um Einstellungen zu ändern' });

    return interaction.reply({
      embeds: [embed],
      ephemeral: true
    });
  }
};
