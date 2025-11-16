# openapi-ai-discord — OpenWebUI-focused README

This project is a Discord bot that uses an OpenWebUI-compatible API (OpenAI-like /api/chat/completions) as its AI backend. The README below focuses on the OpenWebUI integration, configuration and local memory used by the bot.

Key files
- OpenWebUI client: [`OpenWebUIClient`](src/utils/openwebui.js) — [src/utils/openwebui.js](src/utils/openwebui.js)  
- Local JSON memory: [`memoryManager`](src/utils/memoryManager.js) — [src/utils/memoryManager.js](src/utils/memoryManager.js)  
- **OpenWebUI Vector Memory**: [`memoryContextManager`](src/utils/memoryContextManager.js) — [src/utils/memoryContextManager.js](src/utils/memoryContextManager.js) ⭐ NEW
- **User-Channel Mapping**: [`userChannelMapping`](src/utils/userChannelMapping.js) — [src/utils/userChannelMapping.js](src/utils/userChannelMapping.js) ⭐ NEW
- Configuration and prompts: [`configManager`](src/utils/configManager.js) — [src/utils/configManager.js](src/utils/configManager.js)  
- Message handling + formatting: [`messageHandler`](src/utils/messageHandler.js), [`messageFormatter`](src/utils/messageFormatter.js) — [src/utils/messageHandler.js](src/utils/messageHandler.js), [src/utils/messageFormatter.js](src/utils/messageFormatter.js)  
- Bot entrypoint: [src/index.js](src/index.js)

Overview
- The bot sends user messages to an OpenWebUI endpoint via `POST /api/chat/completions` (see [`OpenWebUIClient.chat()`](src/utils/openwebui.js)).  
- System prompts are composed from files in the `prompts/` folder by [`configManager.getSystemPrompt()`](src/utils/configManager.js).  
- Conversation context is loaded from:
  - **Local JSON memory** in `data/memory/` (short-term, per-user/channel) managed by [`memoryManager`](src/utils/memoryManager.js)
  - **OpenWebUI Vector Memory** (long-term semantic search) integrated via [`memoryContextManager`](src/utils/memoryContextManager.js) ⭐ NEW
- User-to-Channel mappings are persisted in `data/user_channel_mapping.json` (see [`userChannelMapping`](src/utils/userChannelMapping.js)) ⭐ NEW

**Memory System Features** ⭐ NEW
- **Dual Memory**: Combines fast JSON-based local memory with semantic Vector DB memory from OpenWebUI
- **Context Modes**: 
  - `shared` mode: All memories accessible to all users (team knowledge base)
  - `private` mode: Each user only sees their own memories
- **Smart Context Injection**: Relevant memories are automatically queried and added to system prompt
- **User Channel Tracking**: Every message updates user↔channel mappings automatically
- See [MEMORY_SYSTEM.md](MEMORY_SYSTEM.md) for detailed documentation

Required environment variables (.env)
- DISCORD_TOKEN — bot token  
- OPENWEBUI_URL — base URL for OpenWebUI (e.g. http://localhost:8000)  
- OPENWEBUI_API_KEY — API key used as Bearer token (optional depending on your OpenWebUI setup)  
- OPENWEBUI_MODEL — model name (default `neural-chat`)  
See [.env.example](.env.example).

How the OpenWebUI flow works
1. Message received by Discord -> queued by `MessageQueue` (see [src/utils/messageQueue.js](src/utils/messageQueue.js)).  
2. **User-Channel mapping is updated** (see [src/utils/userChannelMapping.js](src/utils/userChannelMapping.js)) ⭐ NEW
3. `MessageHandler` loads:
   - System prompt via [`configManager.getSystemPrompt()`](src/utils/configManager.js)
   - Local chat history via [`openwebui.getChatHistory(chatId)`](src/utils/openwebui.js)
   - **Vector memory context** via [`memoryContextManager.getMemoryContext()`](src/utils/memoryContextManager.js) ⭐ NEW
4. System prompt is **enhanced with memory context** (respecting context mode) ⭐ NEW
5. The bot calls `OpenWebUIClient.chat(userMessage, enhancedPrompt, chatHistory)` -> sends to `${OPENWEBUI_URL}/api/chat/completions`.  
6. Response is saved locally with `memoryManager.addMessage(...)` and **also to OpenWebUI Memory** ⭐ NEW
7. Response is posted back to Discord.

Prompts and persona
- Prompts are read from `prompts/*.txt` and concatenated in alphabetical order (see [src/utils/configManager.js](src/utils/configManager.js)).  
- Example persona and guidelines live in `prompts/01_core_identity.txt` and `03_behavior_guidelines.txt`.

Local memory and privacy
- Chats are stored under `data/memory/*.json` (managed by [`memoryManager`](src/utils/memoryManager.js)).  
- `data/` is in `.gitignore` to prevent accidental upload. If you committed sensitive data, remove it from git history before pushing.

Commands related to OpenWebUI & memory
- /mychats — shows the user’s local chat and stats (uses `openwebui.getOrCreateChat` and `getChatStats`) — see [src/commands/mychats.js](src/commands/mychats.js).  
- /status — shows OpenWebUI URL and bot status — see [src/commands/status.js](src/commands/status.js).  
- Admin config commands (setmode, addchannel, removechannel, togglekeyword) update behavior stored in `.env` via [`configManager.setEnvVariable()`](src/utils/configManager.js).

Running the bot
1. Copy `.env.example` to `.env` and fill values.  
2. Ensure OpenWebUI is running and Memory API is enabled
3. Install deps: npm install  
4. **Test memory system** (optional): `npm run test:memory`
5. Start: npm start (or npm run dev)

Troubleshooting
- Health check: on ready the bot runs `openwebui.checkHealth()` (see [`OpenWebUIClient.checkHealth()`](src/utils/openwebui.js)). If it fails, verify `OPENWEBUI_URL` and network access.  
- If the `git-filter-repo` step was attempted earlier: not needed for runtime; only for removing committed `data/` from remote history.  
- If responses are empty or errors include HTTP status/details, check OpenWebUI logs and `OPENWEBUI_API_KEY` usage; the client logs response.data on error.

Notes & extension points
- You can adapt `OpenWebUIClient` to other endpoints or parameters in [src/utils/openwebui.js](src/utils/openwebui.js).  
- The local memory format and limits are implemented in [`memoryManager`](src/utils/memoryManager.js) and can be adjusted (limits, pruning, encryption).
- **Memory context logic**: Customize how memories are queried and ranked in [`memoryContextManager.js`](src/utils/memoryContextManager.js) ⭐ NEW
- **User-Channel tracking**: Track additional metadata by extending [`userChannelMapping.js`](src/utils/userChannelMapping.js) ⭐ NEW
- System prompts are editable in /prompts to change persona/behavior.
- For detailed Memory System documentation, see [MEMORY_SYSTEM.md](MEMORY_SYSTEM.md) ⭐ NEW

License and contribution
- Code is MIT by default (see package.json). Contributing: open issues/PRs; avoid committing secrets.

If you want, update this README with a short example OpenWebUI request/response snippet or a deployment guide for a typical OpenWebUI instance.
