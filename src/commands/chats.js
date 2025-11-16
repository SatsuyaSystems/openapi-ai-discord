const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('chats')
    .setDescription('Manage your chats')
    .addSubcommand(subcommand =>
      subcommand
        .setName('view')
        .setDescription('View your chat history')
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName('new')
        .setDescription('Start a new chat')
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName('delete')
        .setDescription('Delete your chat')
    ),

  async execute(interaction, { chatManager }) {
    const userId = interaction.user.id;
    const userName = interaction.user.username;
    const subcommand = interaction.options.getSubcommand();

    await interaction.deferReply({ flags: 64 });

    try {
      if (subcommand === 'view') {
        // Get user's chat history
        const chatHistory = await chatManager.getChatHistory(userId);

        if (!chatHistory || chatHistory.length === 0) {
          const embed = new EmbedBuilder()
            .setColor('#4287f5')
            .setTitle('💬 Your Chat')
            .setDescription('No messages yet. Send a message to start chatting!');
          
          return await interaction.editReply({ embeds: [embed] });
        }

        // Format messages into embed
        const embeds = [];
        let currentEmbed = new EmbedBuilder()
          .setColor('#4287f5')
          .setTitle('💬 Your Chat History')
          .setDescription(`Total: ${chatHistory.length} messages`);

        let fieldCount = 0;

        chatHistory.forEach((msg, index) => {
          const role = msg.role === 'user' ? '👤' : '🤖';
          const content = msg.content.substring(0, 200);
          
          // Check if we need a new embed
          if (fieldCount >= 25) {
            embeds.push(currentEmbed);
            currentEmbed = new EmbedBuilder()
              .setColor('#4287f5')
              .setTitle(`💬 Chat History (continued)`);
            fieldCount = 0;
          }

          currentEmbed.addFields({
            name: `${role} Message #${index + 1}`,
            value: content || '(empty)',
            inline: false
          });

          fieldCount++;
        });

        embeds.push(currentEmbed);

        // Send embeds
        await interaction.editReply({ embeds: [embeds[0]] });
        for (let i = 1; i < embeds.length; i++) {
          await interaction.followUp({ embeds: [embeds[i]], flags: 64 });
        }

      } else if (subcommand === 'new') {
        // Create a new chat
        const newChat = await chatManager.getOrCreateChat(userId, userName);
        
        const embed = new EmbedBuilder()
          .setColor('#42f554')
          .setTitle('✨ New Chat Created')
          .setDescription(`Chat ID: ${newChat.id}\nTitle: ${newChat.title}`);
        
        await interaction.editReply({ embeds: [embed] });

      } else if (subcommand === 'delete') {
        // Delete user's chat
        const success = await chatManager.deleteUserChat(userId);

        if (success) {
          const embed = new EmbedBuilder()
            .setColor('#42f554')
            .setTitle('🗑️ Chat Deleted')
            .setDescription('Your chat has been deleted successfully.');
          
          await interaction.editReply({ embeds: [embed] });
        } else {
          const embed = new EmbedBuilder()
            .setColor('#f54242')
            .setTitle('❌ Error')
            .setDescription('Could not delete your chat. Do you have a chat?');
          
          await interaction.editReply({ embeds: [embed] });
        }
      }

    } catch (error) {
      console.error('Error in chats command:', error);
      
      const embed = new EmbedBuilder()
        .setColor('#ff0000')
        .setTitle('❌ Error')
        .setDescription(`Error: ${error.message}`);
      
      await interaction.editReply({ embeds: [embed] });
    }
  }
};
