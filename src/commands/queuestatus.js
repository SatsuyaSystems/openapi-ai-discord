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
    .setDescription('Zeigt den Status der Message Queue'),
  
  setMessageQueue,

  async execute(interaction) {
    // Prüfe ob User Admin ist
    if (!configManager.isAdmin(interaction.user.id)) {
      return interaction.reply({
        content: '❌ Du hast keine Berechtigung für diesen Command!',
        ephemeral: true
      });
    }

    if (!messageQueue) {
      return interaction.reply({
        content: '❌ Message Queue nicht initialisiert!',
        ephemeral: true
      });
    }

    const stats = messageQueue.getStats();
    const queueItems = messageQueue.getQueue().slice(0, 5); // Erste 5 Items

    const embed = new EmbedBuilder()
      .setColor('#0099ff')
      .setTitle('📨 Message Queue Status')
      .addFields(
        { name: '✅ Verarbeitet', value: `${stats.processed}`, inline: true },
        { name: '❌ Fehlgeschlagen', value: `${stats.failed}`, inline: true },
        { name: '🔄 Retries', value: `${stats.retried}`, inline: true },
        { name: '📦 In Queue', value: `${stats.queueLength}`, inline: true },
        { name: '⚙️ Verarbeitet gerade', value: `${stats.processing}`, inline: true },
        { name: '🏃 Läuft', value: stats.isRunning ? 'Ja' : 'Nein', inline: true }
      );

    if (queueItems.length > 0) {
      const queueText = queueItems
        .map((item, i) => `${i + 1}. **${item.author}**: "${item.content}" (${item.age}ms, ${item.retries} retries)`)
        .join('\n');
      
      embed.addFields({
        name: '📋 Nächste Items in Queue',
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
