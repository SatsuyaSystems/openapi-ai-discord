const fs = require('fs');
const path = require('path');
const { Collection } = require('discord.js');

/**
 * Lädt alle Commands aus dem commands-Ordner
 */
function loadCommands(client, options = {}) {
  const commands = new Collection();
  const commandsPath = path.join(__dirname, '../commands');
  const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    
    // Injiziere Dependencies wenn verfügbar
    if (options.messageQueue && command.setMessageQueue) {
      command.setMessageQueue(options.messageQueue);
    }
    if (options.openwebui && command.setOpenWebUIClient) {
      command.setOpenWebUIClient(options.openwebui);
    }
    
    if ('data' in command && 'execute' in command) {
      commands.set(command.data.name, command);
      console.log(`✅ Command geladen: ${command.data.name}`);
    } else {
      console.warn(`⚠️ Command ${file} hat keine data oder execute Eigenschaft!`);
    }
  }

  return commands;
}

/**
 * Registriert alle Commands bei Discord
 */
async function registerCommands(client) {
  try {
    console.log('🔄 Registriere Slash-Commands...');
    
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
    console.log(`✅ ${commands.length} Slash-Commands registriert`);
  } catch (error) {
    console.error('❌ Fehler beim Registrieren der Commands:', error);
  }
}

module.exports = {
  loadCommands,
  registerCommands
};
