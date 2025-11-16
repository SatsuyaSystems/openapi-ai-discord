const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const configManager = require('../utils/configManager');

let messageQueue; // Wird vom Bot injiziert

/**
 * Injiziert die Message Queue
 */
function setMessageQueue(queue) {
  messageQueue = queue;
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('queuestatus')
    .setDescription('Show the status of the message queue'),
  
  setMessageQueue,

  async execute(interaction) {
    // Check admin permission
    if (!configManager.isAdmin(interaction.user.id)) {
      return interaction.reply({
        content: '❌ You do not have permission to run this command!',
        ephemeral: true
      });
    }

    if (!messageQueue) {
      return interaction.reply({
        content: '❌ Message queue not initialized!',
        ephemeral: true
      });
    }

    const stats = messageQueue.getStats();
    const queueItems = messageQueue.getQueue().slice(0, 5); // Erste 5 Items

    const embed = new EmbedBuilder()
      .setColor('#0099ff')
      .setTitle('📨 Message Queue Status')
      .addFields(
        { name: '✅ Processed', value: `${stats.processed}`, inline: true },
        { name: '❌ Failed', value: `${stats.failed}`, inline: true },
        { name: '🔄 Retries', value: `${stats.retried}`, inline: true },
        { name: '📦 In Queue', value: `${stats.queueLength}`, inline: true },
        { name: '⚙️ Currently Processing', value: `${stats.processing}`, inline: true },
        { name: '🏃 Running', value: stats.isRunning ? 'Yes' : 'No', inline: true }
      );

    if (queueItems.length > 0) {
      const queueText = queueItems
        .map((item, i) => `${i + 1}. **${item.author}**: "${item.content}" (${item.age}ms, ${item.retries} retries)`)
        .join('\n');
      
      embed.addFields({
        name: '📋 Next items in queue',
        value: queueText,
        inline: false
      });
    }

    return interaction.reply({
      embeds: [embed],
      ephemeral: true
    });
  }
};
