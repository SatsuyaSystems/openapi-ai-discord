require('dotenv').config();
const fs = require('fs');
const path = require('path');

/**
 * Config Manager - loads settings from .env
 * and writes changes back to the .env file
 */

const envPath = path.join(__dirname, '../../.env');
const promptsPath = path.join(__dirname, '../../prompts');

/**
 * Load all system prompt files from the /prompts folder
 * @returns {string} combined system prompt
 */
function loadSystemPromptFromFiles() {
  try {
    // Ensure the prompts folder exists
    if (!fs.existsSync(promptsPath)) {
      fs.mkdirSync(promptsPath, { recursive: true });
      console.log('📁 /prompts folder created');
    }

    // Collect all .txt files
    const files = fs.readdirSync(promptsPath)
      .filter(file => file.endsWith('.txt'))
      .sort(); // Alphabetical order

    if (files.length === 0) {
      console.warn('⚠️ No .txt files found in /prompts folder!');
      return getSystemPromptFromEnv();
    }

    console.log(`📄 Loading ${files.length} prompt files: ${files.join(', ')}`);

    // Read all files and concatenate them
    const promptParts = [];
    for (const file of files) {
      try {
        const filePath = path.join(promptsPath, file);
        const content = fs.readFileSync(filePath, 'utf8').trim();
        if (content) {
          promptParts.push(content);
        }
        } catch (error) {
        console.error(`❌ Error reading ${file}:`, error.message);
      }
    }

    // Join with paragraph breaks
    const combinedPrompt = promptParts.join('\n\n');
    console.log(`✅ System prompt assembled (${combinedPrompt.length} characters)`);

    return combinedPrompt;
  } catch (error) {
    console.error('❌ Error loading prompt files:', error.message);
    return getSystemPromptFromEnv();
  }
}

/**
 * Fallback: get system prompt from .env
 */
function getSystemPromptFromEnv() {
  return process.env.ELYSIUM_SYSTEM_PROMPT ||
    'You are a helpful AI assistant.';
}

/**
 * Write an environment variable to the .env file
 * @param {string} key - Variable name
 * @param {string} value - Variable value
 */
function setEnvVariable(key, value) {
  try {
    // Lese aktuelle .env Datei
    let envContent = '';
    if (fs.existsSync(envPath)) {
      envContent = fs.readFileSync(envPath, 'utf8');
    }

    const lines = envContent.split('\n');
    let found = false;

    // Update or add the variable
    const updatedLines = lines.map((line) => {
      if (line.startsWith(`${key}=`)) {
        found = true;
        return `${key}=${value}`;
      }
      return line;
    });

    if (!found) {
      updatedLines.push(`${key}=${value}`);
    }

    // Write back
    fs.writeFileSync(envPath, updatedLines.join('\n'), 'utf8');
    console.log(`💾 .env updated: ${key}=${value}`);

    // Also update the runtime process environment
    process.env[key] = value;
  } catch (error) {
    console.error(`❌ Error saving to .env: ${error.message}`);
  }
}

/**
 * Return all admins
 */
function getAdmins() {
  const adminStr = process.env.ADMIN_IDS || '';
  return adminStr
    .split(',')
    .map(id => id.trim())
    .filter(id => id);
}

/**
 * Check if a user is an admin
 */
function isAdmin(userId) {
  return getAdmins().includes(userId);
}

/**
 * Return all listener channel IDs
 */
function getListenerChannels() {
  const channelStr = process.env.LISTENER_CHANNELS || '';
  return channelStr
    .split(',')
    .map(id => id.trim())
    .filter(id => id);
}

/**
 * Add a channel to listener list
 */
function addListenerChannel(channelId) {
  let channels = getListenerChannels();
  
  if (!channels.includes(channelId)) {
    channels.push(channelId);
    const newValue = channels.join(',');
    setEnvVariable('LISTENER_CHANNELS', newValue);
    return true;
  }
  return false;
}

/**
 * Remove a channel from the listener list
 */
function removeListenerChannel(channelId) {
  let channels = getListenerChannels();
  const originalLength = channels.length;
  
  channels = channels.filter(id => id !== channelId);
  
  if (channels.length < originalLength) {
    const newValue = channels.join(',');
    setEnvVariable('LISTENER_CHANNELS', newValue);
    return true;
  }
  return false;
}

/**
 * Set context mode ('shared' or 'private')
 */
function setContextMode(mode) {
  if (['shared', 'private'].includes(mode)) {
    setEnvVariable('CONTEXT_MODE', mode);
    return true;
  }
  return false;
}

/**
 * Get the current context mode
 */
function getContextMode() {
  return process.env.CONTEXT_MODE || 'shared';
}

/**
 * Return OpenWebUI configuration
 */
function getOpenWebUIConfig() {
  return {
    baseUrl: process.env.OPENWEBUI_URL || 'http://localhost:8000',
    apiKey: process.env.OPENWEBUI_API_KEY,
    model: process.env.OPENWEBUI_MODEL || 'neural-chat'
  };
}

/**
 * Return keyword trigger configuration
 */
function getKeywordConfig() {
  return {
    enabled: process.env.KEYWORD_ENABLED === 'true',
    trigger: process.env.KEYWORD_TRIGGER || 'elysium'
  };
}

/**
 * Enable/disable keyword trigger
 */
function setKeywordEnabled(enabled) {
  const value = enabled ? 'true' : 'false';
  setEnvVariable('KEYWORD_ENABLED', value);
  return true;
}

/**
 * Set the keyword trigger word
 */
function setKeywordTrigger(trigger) {
  if (trigger && trigger.trim()) {
    setEnvVariable('KEYWORD_TRIGGER', trigger.trim().toLowerCase());
    return true;
  }
  return false;
}

/**
 * Load the system prompt from all .txt files in the /prompts folder
 * @returns {string} the combined system prompt
 */
function getSystemPrompt() {
  const promptsDir = path.join(process.cwd(), 'prompts');
  
  if (!fs.existsSync(promptsDir)) {
    console.warn('Prompts folder not found:', promptsDir);
    return 'You are ElysiumAI, a mystical AI entity from a fantasy world.';
  }
  
  const files = fs.readdirSync(promptsDir).filter(file => file.endsWith('.txt'));
  if (files.length === 0) {
    console.warn('No .txt files found in prompts folder');
    return 'You are ElysiumAI, a mystical AI entity from a fantasy world.';
  }
  
  let combinedPrompt = '';
  for (const file of files) {
    const filePath = path.join(promptsDir, file);
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      combinedPrompt += content + '\n\n';
    } catch (error) {
      console.error(`Error reading file ${file}:`, error.message);
    }
  }
  
  return combinedPrompt.trim();
}

module.exports = {
  getAdmins,
  isAdmin,
  getListenerChannels,
  addListenerChannel,
  removeListenerChannel,
  setContextMode,
  getContextMode,
  getOpenWebUIConfig,
  getSystemPrompt,
  setEnvVariable,
  getKeywordConfig,
  setKeywordEnabled,
  setKeywordTrigger
};
