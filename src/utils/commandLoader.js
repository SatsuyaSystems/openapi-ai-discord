const fs = require('fs');
const path = require('path');
const { Collection } = require('discord.js');

/**
 * Load all commands from the commands folder
 */
function loadCommands(client, options = {}) {
  const commands = new Collection();
  const commandsPath = path.join(__dirname, '../commands');
  const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    
    // Inject dependencies if available
    if (options.messageQueue && command.setMessageQueue) {
      command.setMessageQueue(options.messageQueue);
    }
    if (options.openwebui && command.setOpenWebUIClient) {
      command.setOpenWebUIClient(options.openwebui);
    }
    
    if ('data' in command && 'execute' in command) {
      commands.set(command.data.name, command);
      console.log(`✅ Command loaded: ${command.data.name}`);
    } else {
      console.warn(`⚠️ Command ${file} does not export 'data' and 'execute' properties!`);
    }
  }

  return commands;
}

/**
 * Register all commands with Discord
 */
async function registerCommands(client) {
  try {
    console.log('🔄 Registering slash commands...');
    
    const commandsPath = path.join(__dirname, '../commands');
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
    
    const commands = [];
    for (const file of commandFiles) {
      const filePath = path.join(commandsPath, file);
      const command = require(filePath);
      
      if ('data' in command) {
        commands.push(command.data);
      }
    }

    await client.application.commands.set(commands);
    console.log(`✅ ${commands.length} slash commands registered`);
  } catch (error) {
    console.error('❌ Error registering commands:', error);
  }
}

module.exports = {
  loadCommands,
  registerCommands
};
