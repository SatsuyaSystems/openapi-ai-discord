require('dotenv').config();

const util = require('util');
const { Client, GatewayIntentBits, EmbedBuilder, ChannelType, Partials } = require('discord.js');
const configManager = require('./utils/configManager');
const { loadCommands, registerCommands } = require('./utils/commandLoader');
const OpenWebUIClient = require('./utils/openwebui');
const MessageQueue = require('./utils/messageQueue');
const MessageHandler = require('./utils/messageHandler');
const { formatMessageWithMetadata, formatResponseForDiscord } = require('./utils/messageFormatter');

// Initialisierung
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

// Command Collection
let commands;

// Bot-Verhaltensweisen
client.once('ready', async () => {
  console.log(`✅ Bot angemeldet als ${client.user.tag}`);
  
  // Teste OpenWebUI Verbindung zuerst
  try {
    const webUIConfig = configManager.getOpenWebUIConfig();
    openwebui = new OpenWebUIClient(
      webUIConfig.baseUrl,
      webUIConfig.apiKey,
      webUIConfig.model
    );
    
    const connected = await openwebui.checkHealth();
    if (connected) {
      console.log(`✅ OpenWebUI verbunden: ${webUIConfig.baseUrl}`);
    } else {
      console.warn(`⚠️ OpenWebUI Verbindung fehlgeschlagen!`);
    }

    // Initialisiere Message Handler (nur openwebui + configManager nötig)
    messageHandler = new MessageHandler(openwebui, configManager);
    messageHandler.setChannelGetter((channelId) => client.channels.fetch(channelId));
    
    console.log(`✅ Message Handler initialisiert`);
    console.log(`📨 Message Queue läuft (max 3 Retries, 5s Delay)`);
    console.log(`🔐 Chat-Kontext wird aus OpenWebUI geladen`);
    
  } catch (error) {
    console.error('❌ Fehler beim Laden der OpenWebUI Config:', error);
  }

  // Lade und registriere Commands (mit Dependency Injection)
  commands = loadCommands(client, { messageQueue, openwebui });
  await registerCommands(client);
  
  // Status setzen
  client.user.setActivity('für @mentions und Nachrichten', { type: 'LISTENING' });
});

// Slash Command Handler
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = commands.get(interaction.commandName);

  if (!command) {
    console.warn(`⚠️ Command nicht gefunden: ${interaction.commandName}`);
    return;
  }

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error('❌ Fehler beim Ausführen des Commands:', error);
    
    const reply = {
      content: '❌ Es gab einen Fehler beim Ausführen dieses Commands!',
      ephemeral: true
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
  // Ignoriere Bot-Nachrichten
  if (message.author.bot) return;

  const listenerChannels = configManager.getListenerChannels();
  const keywordConfig = configManager.getKeywordConfig();

  const channelType = message.channel?.type;
  // Robustere DM-Erkennung: ChannelType enum (number) oder string 'DM'
  const isDM = channelType === ChannelType.DM || channelType === 1 || String(channelType).toUpperCase() === 'DM';
  const isMention = message.mentions.has(client.user);
  const isListenerChannel = listenerChannels.includes(message.channelId);
  const hasKeyword = keywordConfig.enabled &&
    message.content.toLowerCase().includes(keywordConfig.trigger.toLowerCase());

  // Reagiere auf DMs, @mentions, Listener-Kanäle oder Keywords
  if (!isDM && !isMention && !isListenerChannel && !hasKeyword) return;

  // Nur für Nachrichten, die tatsächlich weiterverarbeitet werden: zusätzliche Debug-Logs
  console.log(`🔍 Channel Type: ${channelType} | ChannelType.DM: ${ChannelType.DM}`);
  console.log(`🔎 channel.id=${message.channel?.id} guild=${message.guild ? message.guild.id : 'null'} author.id=${message.author.id}`);
  try {
    console.log('🔎 channel.inspect:', util.inspect(message.channel, { depth: 1 }));
  } catch (e) {
    console.log('🔎 channel.inspect failed:', e?.message || e);
  }

  // Debug: Zeige alle Nachrichten-Typen
  console.log(`📨 Nachricht von ${message.author.username}: "${message.content.substring(0, 50)}..." | DM: ${isDM} | Mention: ${isMention} | Channel: ${isListenerChannel} | Keyword: ${hasKeyword}`);

  console.log(`✅ Nachricht wird verarbeitet: DM=${isDM}, Mention=${isMention}, Channel=${isListenerChannel}, Keyword=${hasKeyword}`);

  // Füge zur Queue hinzu statt direkt zu verarbeiten
  messageQueue.enqueue(message, {
    isDM,
    isMention,
    isListenerChannel,
    hasKeyword,
    handler: messageHandler.handle.bind(messageHandler)
  });
});

// Fehler-Handler
client.on('error', error => {
  console.error('❌ Client Fehler:', error);
});

process.on('unhandledRejection', error => {
  console.error('❌ Unerwarteter Fehler:', error);
});

// Starte den Bot
const token = process.env.DISCORD_TOKEN;
if (!token) {
  console.error('❌ DISCORD_TOKEN nicht in .env definiert!');
  process.exit(1);
}

client.login(token);
