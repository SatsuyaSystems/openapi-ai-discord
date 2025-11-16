require('dotenv').config();
const fs = require('fs');
const path = require('path');

/**
 * Config Manager - Lädt alle Einstellungen aus .env
 * Schreibt auch Änderungen zurück in die .env Datei
 */

const envPath = path.join(__dirname, '../../.env');
const promptsPath = path.join(__dirname, '../../prompts');

/**
 * Lädt alle System-Prompt-Dateien aus dem /prompts Ordner
 * @returns {string} Zusammengesetzter System-Prompt
 */
function loadSystemPromptFromFiles() {
  try {
    // Stelle sicher, dass der Ordner existiert
    if (!fs.existsSync(promptsPath)) {
      fs.mkdirSync(promptsPath, { recursive: true });
      console.log('📁 /prompts Ordner erstellt');
    }

    // Hole alle .txt Dateien
    const files = fs.readdirSync(promptsPath)
      .filter(file => file.endsWith('.txt'))
      .sort(); // Alphabetische Reihenfolge

    if (files.length === 0) {
      console.warn('⚠️ Keine .txt Dateien im /prompts Ordner gefunden!');
      return getSystemPromptFromEnv();
    }

    console.log(`📄 Lade ${files.length} Prompt-Dateien: ${files.join(', ')}`);

    // Lese alle Dateien und füge sie zusammen
    const promptParts = [];
    for (const file of files) {
      try {
        const filePath = path.join(promptsPath, file);
        const content = fs.readFileSync(filePath, 'utf8').trim();
        if (content) {
          promptParts.push(content);
        }
      } catch (error) {
        console.error(`❌ Fehler beim Lesen von ${file}:`, error.message);
      }
    }

    // Füge mit Zeilenumbrüchen zusammen
    const combinedPrompt = promptParts.join('\n\n');
    console.log(`✅ System-Prompt zusammengesetzt (${combinedPrompt.length} Zeichen)`);

    return combinedPrompt;
  } catch (error) {
    console.error('❌ Fehler beim Laden der Prompt-Dateien:', error.message);
    return getSystemPromptFromEnv();
  }
}

/**
 * Fallback: Hole System-Prompt aus .env
 */
function getSystemPromptFromEnv() {
  return process.env.ELYSIUM_SYSTEM_PROMPT ||
    'Du bist eine hilfreiche KI-Assistentin.';
}

/**
 * Schreibt eine Umgebungsvariable in die .env Datei
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

    // Aktualisiere oder füge hinzu
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

    // Schreibe zurück
    fs.writeFileSync(envPath, updatedLines.join('\n'), 'utf8');
    console.log(`💾 .env aktualisiert: ${key}=${value}`);

    // Update auch im Runtime-Process
    process.env[key] = value;
  } catch (error) {
    console.error(`❌ Fehler beim Speichern in .env: ${error.message}`);
  }
}

/**
 * Gibt alle Admins zurück
 */
function getAdmins() {
  const adminStr = process.env.ADMIN_IDS || '';
  return adminStr
    .split(',')
    .map(id => id.trim())
    .filter(id => id);
}

/**
 * Prüft ob ein User ein Admin ist
 */
function isAdmin(userId) {
  return getAdmins().includes(userId);
}

/**
 * Gibt alle Listener-Kanäle zurück
 */
function getListenerChannels() {
  const channelStr = process.env.LISTENER_CHANNELS || '';
  return channelStr
    .split(',')
    .map(id => id.trim())
    .filter(id => id);
}

/**
 * Fügt einen Kanal zu den Listern hinzu
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
 * Entfernt einen Kanal aus den Listern
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
 * Setzt den Context-Modus (shared oder private)
 */
function setContextMode(mode) {
  if (['shared', 'private'].includes(mode)) {
    setEnvVariable('CONTEXT_MODE', mode);
    return true;
  }
  return false;
}

/**
 * Gibt den aktuellen Context-Modus zurück
 */
function getContextMode() {
  return process.env.CONTEXT_MODE || 'shared';
}

/**
 * Gibt OpenWebUI Konfiguration zurück
 */
function getOpenWebUIConfig() {
  return {
    baseUrl: process.env.OPENWEBUI_URL || 'http://localhost:8000',
    apiKey: process.env.OPENWEBUI_API_KEY,
    model: process.env.OPENWEBUI_MODEL || 'neural-chat'
  };
}

/**
 * Gibt Keyword-Trigger Konfiguration zurück
 */
function getKeywordConfig() {
  return {
    enabled: process.env.KEYWORD_ENABLED === 'true',
    trigger: process.env.KEYWORD_TRIGGER || 'elysium'
  };
}

/**
 * Aktiviert/Deaktiviert Keyword-Trigger
 */
function setKeywordEnabled(enabled) {
  const value = enabled ? 'true' : 'false';
  setEnvVariable('KEYWORD_ENABLED', value);
  return true;
}

/**
 * Setzt das Keyword-Trigger-Wort
 */
function setKeywordTrigger(trigger) {
  if (trigger && trigger.trim()) {
    setEnvVariable('KEYWORD_TRIGGER', trigger.trim().toLowerCase());
    return true;
  }
  return false;
}

/**
 * Lädt den System-Prompt aus allen .txt Dateien im /prompts Ordner
 * @returns {string} Der kombinierte System-Prompt
 */
function getSystemPrompt() {
  const promptsDir = path.join(process.cwd(), 'prompts');
  
  if (!fs.existsSync(promptsDir)) {
    console.warn('Prompts Ordner nicht gefunden:', promptsDir);
    return 'Du bist ElysiumAI, eine mystische KI-Entität aus einer Fantasy-Welt.';
  }
  
  const files = fs.readdirSync(promptsDir).filter(file => file.endsWith('.txt'));
  if (files.length === 0) {
    console.warn('Keine .txt Dateien im prompts Ordner gefunden');
    return 'Du bist ElysiumAI, eine mystische KI-Entität aus einer Fantasy-Welt.';
  }
  
  let combinedPrompt = '';
  for (const file of files) {
    const filePath = path.join(promptsDir, file);
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      combinedPrompt += content + '\n\n';
    } catch (error) {
      console.error(`Fehler beim Lesen der Datei ${file}:`, error.message);
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
