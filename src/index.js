require('dotenv').config();

const util = require('util');
const { Client, GatewayIntentBits, EmbedBuilder, ChannelType, Partials } = require('discord.js');
const configManager = require('./utils/configManager');
const { loadCommands, registerCommands } = require('./utils/commandLoader');
const OpenWebUIClient = require('./utils/openwebui');
const MessageQueue = require('./utils/messageQueue');
const MessageHandler = require('./utils/messageHandler');
const createChatManager = require('./utils/chatManager');
const toolManager = require('./utils/toolManager');
const { formatMessageWithMetadata, formatResponseForDiscord } = require('./utils/messageFormatter');

// Initialization
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent
  ],
  partials: [Partials.Channel, Partials.Message, Partials.User]
});

// Message Queue
const messageQueue = new MessageQueue({
  maxRetries: 3,
  retryDelay: 5000,
  processInterval: 1000
});

// OpenWebUI Client
let openwebui;

// Message Handler
let messageHandler;

// Chat Manager
let chatManager;

// Command Collection
let commands;

// Bot behavior
client.once('ready', async () => {
  console.log(`✅ Bot logged in as ${client.user.tag}`);

  // Test OpenWebUI connection first
  try {
    const webUIConfig = configManager.getOpenWebUIConfig();
    openwebui = new OpenWebUIClient(
      webUIConfig.baseUrl,
      webUIConfig.apiKey,
      webUIConfig.model
    );

    const connected = await openwebui.checkHealth();
    if (connected) {
      console.log(`✅ OpenWebUI connected: ${webUIConfig.baseUrl}`);
    } else {
      console.warn(`⚠️ OpenWebUI connection failed!`);
    }

    // Initialize Chat Manager
    const openwebuiUserId = process.env.OPENWEBUI_USER_ID;
    if (!openwebuiUserId) {
      console.warn('⚠️ OPENWEBUI_USER_ID not set in .env - Chat Manager will not work');
    } else {
      chatManager = createChatManager(openwebui, openwebuiUserId, configManager);
      console.log(`✅ Chat Manager initialized for user ${openwebuiUserId}`);
      console.log(`📌 Context mode: ${configManager.getContextMode().toUpperCase()}`);
    }

    // Initialize Message Handler with Chat Manager and Tool Manager
    messageHandler = new MessageHandler(openwebui, configManager, chatManager, toolManager);
    messageHandler.setChannelGetter((channelId) => client.channels.fetch(channelId));

    // Load tools
    toolManager.loadTools();

    console.log(`✅ Message handler initialized`);
    console.log(`📨 Message queue running (max 3 retries, 5s delay)`);
    console.log(`💬 Chat System active - Per-user persistent chats enabled`);

  } catch (error) {
    console.error('❌ Error loading OpenWebUI config:', error);
  }

  // Load and register commands (with dependency injection)
  commands = loadCommands(client, { messageQueue, openwebui, configManager, toolManager });
  await registerCommands(client);

  // Set status
  client.user.setActivity('for @mentions and messages', { type: 'LISTENING' });
});

// Slash Command Handler
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = commands.get(interaction.commandName);

  if (!command) {
    console.warn(`⚠️ Command not found: ${interaction.commandName}`);
    return;
  }

  try {
    await command.execute(interaction, { messageQueue, openwebui, chatManager, configManager });
  } catch (error) {
    console.error('❌ Error executing command:', error);

    const reply = {
      content: '❌ There was an error executing this command!',
      flags: 64 // ephemeral flag
    };

    if (interaction.replied) {
      await interaction.followUp(reply);
    } else {
      await interaction.reply(reply);
    }
  }
});

// Message Handler
client.on('messageCreate', async (message) => {
  // Ignore bot messages
  if (message.author.bot) return;

  const listenerChannels = configManager.getListenerChannels();
  const keywordConfig = configManager.getKeywordConfig();

  const channelType = message.channel?.type;
  // More robust DM detection: ChannelType enum (number) or string 'DM'
  const isDM = channelType === ChannelType.DM || channelType === 1 || String(channelType).toUpperCase() === 'DM';
  const isMention = message.mentions.has(client.user);
  const isListenerChannel = listenerChannels.includes(message.channelId);
  const hasKeyword = keywordConfig.enabled &&
    message.content.toLowerCase().includes(keywordConfig.trigger.toLowerCase());

  // ✅ UPDATED: Ignore @everyone and @here mentions, but respond to keywords and direct bot mentions
  const hasEveryoneOrHere = message.mentions.has('@everyone') || message.mentions.has('@here') || 
                            message.content.includes('@everyone') || message.content.includes('@here');
  
  // Respond to DMs, @mentions (but not @everyone/@here), listener channels or keywords
  if (!isDM && !isMention && !isListenerChannel && !hasKeyword) return;
  
  // BUT: If it's @everyone or @here, ignore it
  if (hasEveryoneOrHere && !isMention) return;

  // Extra debug logs for messages that will be processed
  console.log(`🔍 Channel Type: ${channelType} | ChannelType.DM: ${ChannelType.DM}`);
  console.log(`🔎 channel.id=${message.channel?.id} guild=${message.guild ? message.guild.id : 'null'} author.id=${message.author.id}`);
  try {
    console.log('🔎 channel.inspect:', util.inspect(message.channel, { depth: 1 }));
  } catch (e) {
    console.log('🔎 channel.inspect failed:', e?.message || e);
  }

  // Debug: show message types
  console.log(`📨 Message from ${message.author.username}: "${message.content.substring(0, 50)}..." | DM: ${isDM} | Mention: ${isMention} | Channel: ${isListenerChannel} | Keyword: ${hasKeyword}`);

  console.log(`✅ Message will be processed: DM=${isDM}, Mention=${isMention}, Channel=${isListenerChannel}, Keyword=${hasKeyword}`);

  // Enqueue instead of processing directly
  messageQueue.enqueue(message, {
    isDM,
    isMention,
    isListenerChannel,
    hasKeyword,
    handler: messageHandler.handle.bind(messageHandler)
  });
});

// Error handlers
client.on('error', error => {
  console.error('❌ Client error:', error);
});

process.on('unhandledRejection', error => {
  console.error('❌ Unhandled rejection:', error);
});

// Start the bot
const token = process.env.DISCORD_TOKEN;
if (!token) {
  console.error('❌ DISCORD_TOKEN is not defined in .env!');
  process.exit(1);
}

client.login(token);
