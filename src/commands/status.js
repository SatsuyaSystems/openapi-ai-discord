const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const configManager = require('../utils/configManager');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('status')
    .setDescription('Show the current bot status'),
  
  async execute(interaction) {
    const channels = configManager.getListenerChannels();
    const openwebui = configManager.getOpenWebUIConfig();
    const keywordConfig = configManager.getKeywordConfig();
    
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
          name: '💬 Chat System',
          value: '**Per-User Persistent Chats**\nEach user has their own isolated chat with full context retention',
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
          value: 'Per-user persistent chats via OpenWebUI Chat API',
          inline: false
        }
      )
      .setFooter({ text: 'Use /addchannel, /removechannel, or /togglekeyword to change settings' });

    return interaction.reply({
      embeds: [embed],
      ephemeral: true
    });
  }
};
