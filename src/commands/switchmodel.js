const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const configManager = require('../utils/configManager');
const axios = require('axios');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('switchmodel')
    .setDescription('Switch the active AI model')
    .addSubcommand(subcommand =>
      subcommand
        .setName('set')
        .setDescription('Set a new model as active')
        .addStringOption(option =>
          option
            .setName('model_id')
            .setDescription('The model ID to switch to (e.g., mimi, gpt-5-mini)')
            .setRequired(true)
        )
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName('current')
        .setDescription('Show the currently active model')
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName('list')
        .setDescription('List all available models')
    ),

  async execute(interaction, { openwebui, configManager }) {
    if (!configManager.isAdmin(interaction.user.id)) {
      return interaction.reply({ 
        content: '❌ You do not have permission to run this command!', 
        ephemeral: true 
      });
    }

    const subcommand = interaction.options.getSubcommand();

    if (subcommand === 'set') {
      await handleSetModel(interaction, openwebui, configManager);
    } else if (subcommand === 'current') {
      await handleCurrentModel(interaction, configManager);
    } else if (subcommand === 'list') {
      await handleListModels(interaction, configManager);
    }
  }
};

/**
 * Validate model by fetching it from the API
 */
async function validateModel(baseUrl, apiKey, modelId) {
  try {
    const response = await axios.get(
      `${baseUrl}/api/v1/models/${modelId}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        timeout: 5000,
      }
    );

    return {
      valid: true,
      data: response.data
    };
  } catch (error) {
    if (error.response?.status === 404) {
      return {
        valid: false,
        error: 'Model not found'
      };
    }
    return {
      valid: false,
      error: error.message || 'Failed to validate model'
    };
  }
}

/**
 * Handle the 'set' subcommand
 */
async function handleSetModel(interaction, openwebui, configManager) {
  await interaction.deferReply({ ephemeral: true });

  const modelId = interaction.options.getString('model_id');
  const openwebuiConfig = configManager.getOpenWebUIConfig();

  // Validate the model exists
  const validation = await validateModel(
    openwebuiConfig.baseUrl,
    openwebuiConfig.apiKey,
    modelId
  );

  if (!validation.valid) {
    return interaction.editReply({
      content: `❌ Model validation failed: ${validation.error}\n\nPlease check the model ID and try again.`,
      ephemeral: true
    });
  }

  const modelData = validation.data;
  const baseModel = modelData.base_model_id || 'Unknown';

  // Update .env
  configManager.setEnvVariable('OPENWEBUI_MODEL', modelId);

  // Update the openwebui instance's model property if it exists
  if (openwebui && typeof openwebui.setModel === 'function') {
    openwebui.setModel(modelId);
  } else if (openwebui) {
    openwebui.model = modelId;
  }

  // Create a nice embed response
  const embed = new EmbedBuilder()
    .setColor('GREEN')
    .setTitle('✅ Model Switched Successfully')
    .addFields(
      { name: 'Model ID', value: `\`${modelData.id}\``, inline: true },
      { name: 'Base Model', value: `\`${baseModel}\``, inline: true },
      { name: 'Active', value: modelData.is_active ? '✅ Yes' : '❌ No', inline: true }
    )
    .setTimestamp();

  return interaction.editReply({ embeds: [embed], ephemeral: true });
}

/**
 * Handle the 'current' subcommand
 */
async function handleCurrentModel(interaction, configManager) {
  await interaction.deferReply({ ephemeral: true });

  const openwebuiConfig = configManager.getOpenWebUIConfig();

  const embed = new EmbedBuilder()
    .setColor('BLUE')
    .setTitle('🤖 Currently Active Model')
    .addFields(
      { name: 'Model ID', value: `\`${openwebuiConfig.model}\``, inline: false },
      { name: 'Base URL', value: `\`${openwebuiConfig.baseUrl}\``, inline: false }
    )
    .setTimestamp();

  return interaction.editReply({ embeds: [embed], ephemeral: true });
}

/**
 * Handle the 'list' subcommand - fetch all available models
 */
async function handleListModels(interaction, configManager) {
  await interaction.deferReply({ ephemeral: true });

  const openwebuiConfig = configManager.getOpenWebUIConfig();

  try {
    const response = await axios.get(
      `${openwebuiConfig.baseUrl}/api/v1/models/list`,
      {
        headers: {
          Authorization: `Bearer ${openwebuiConfig.apiKey}`,
          'Content-Type': 'application/json',
        },
        timeout: 5000,
      }
    );

    const models = response.data.data || response.data || [];

    if (!Array.isArray(models) || models.length === 0) {
      return interaction.editReply({
        content: '❌ No models found',
        ephemeral: true
      });
    }

    // Group models into chunks of 25 fields (Discord limit per embed)
    const embeds = [];
    let currentEmbed = new EmbedBuilder()
      .setColor('PURPLE')
      .setTitle('📋 Available Models')
      .setTimestamp();

    let fieldCount = 0;
    const currentModel = openwebuiConfig.model;

    for (const model of models) {
      const modelId = model.id || model.name || 'Unknown';
      const baseModel = model.base_model_id || 'N/A';
      const isActive = modelId === currentModel ? '✅' : '⚪';
      
      const fieldValue = `Base: \`${baseModel}\`\nActive: ${isActive}`;

      currentEmbed.addFields({
        name: `${isActive} ${modelId}`,
        value: fieldValue,
        inline: false
      });

      fieldCount++;

      // Discord embed limit: max 25 fields per embed
      if (fieldCount >= 25) {
        embeds.push(currentEmbed);
        currentEmbed = new EmbedBuilder()
          .setColor('PURPLE')
          .setTitle('📋 Available Models (continued)')
          .setTimestamp();
        fieldCount = 0;
      }
    }

    // Add the last embed if it has fields
    if (fieldCount > 0) {
      embeds.push(currentEmbed);
    }

    return interaction.editReply({ embeds: embeds, ephemeral: true });

  } catch (error) {
    console.error('Error fetching models:', error.message);
    return interaction.editReply({
      content: `❌ Failed to fetch models: ${error.message}`,
      ephemeral: true
    });
  }
}
