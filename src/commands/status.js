const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const configManager = require('../utils/configManager');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('status')
    .setDescription('Show the current bot status'),
  
  async execute(interaction) {
    const mode = configManager.getContextMode();
    const channels = configManager.getListenerChannels();
    const openwebui = configManager.getOpenWebUIConfig();
    const keywordConfig = configManager.getKeywordConfig();
    
    const modeEmoji = mode === 'shared' ? '👥' : '🔒';
    const modeDescription = mode === 'shared' 
      ? 'All users share a chat context'
      : 'Each user has a private chat context';
    
    // Attempt to load listener channels
    let channelInfo = '';
    if (channels.length > 0) {
      channelInfo = channels.map(id => `• <#${id}> (ID: \`${id}\`)`).join('\n');
    } else {
      channelInfo = '*No listener channels configured*';
    }

    const keywordStatus = keywordConfig.enabled 
      ? `🟢 **ENABLED** (\`${keywordConfig.trigger}\`)`
      : '🔴 **DISABLED**';

    const embed = new EmbedBuilder()
      .setColor('#00FF00')
      .setTitle('🤖 Bot Status')
      .addFields(
        {
          name: `${modeEmoji} Context Mode`,
          value: `**${mode.toUpperCase()}**\n${modeDescription}`,
          inline: false
        },
        {
          name: `📡 Listener Channels (${channels.length})`,
          value: channelInfo,
          inline: false
        },
        {
          name: '🎯 Keyword Trigger',
          value: `${keywordStatus}\n${keywordConfig.enabled ? 'Listens in **ALL** channels' : 'Disabled'}\n\n💌 **DM support:** Enabled (private chats)`,
          inline: false
        },
        {
          name: '🎭 System Prompt',
          value: 'ElysiumAI (mystical fantasy persona)',
          inline: false
        },
        {
          name: '🌐 OpenWebUI',
          value: `\`${openwebui.baseUrl}\``,
          inline: false
        },
        {
          name: '💾 Storage',
          value: 'JSON memory system + .env persistence',
          inline: false
        }
      )
      .setFooter({ text: 'Use /addchannel, /removechannel, /setmode or /togglekeyword to change settings' });

    return interaction.reply({
      embeds: [embed],
      ephemeral: true
    });
  }
};
