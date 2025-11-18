const fs = require('fs');
const path = require('path');

class ToolManager {
    constructor() {
        this.tools = new Map();
        this.toolsPath = path.join(__dirname, '../tools');
    }

    /**
     * Load all tools from the tools directory
     */
    loadTools() {
        if (!fs.existsSync(this.toolsPath)) {
            fs.mkdirSync(this.toolsPath, { recursive: true });
        }

        const toolFiles = fs.readdirSync(this.toolsPath).filter(file => file.endsWith('.js'));

        this.tools.clear();

        for (const file of toolFiles) {
            try {
                const filePath = path.join(this.toolsPath, file);
                // Clear cache to allow hot-reloading if needed
                delete require.cache[require.resolve(filePath)];
                const tool = require(filePath);

                if (tool.definition && tool.execute) {
                    const toolName = tool.definition.function.name;
                    this.tools.set(toolName, tool);
                    console.log(`🛠️ Loaded tool: ${toolName}`);
                } else {
                    console.warn(`⚠️ Skipped invalid tool file: ${file}`);
                }
            } catch (error) {
                console.error(`❌ Error loading tool ${file}:`, error);
            }
        }

        console.log(`✅ Loaded ${this.tools.size} tools total`);
    }

    /**
     * Get all tool definitions for the API
     * @returns {Array} Array of tool definitions
     */
    getToolDefinitions() {
        return Array.from(this.tools.values()).map(t => t.definition);
    }

    /**
     * Execute a tool by name
     * @param {string} name - Tool name
     * @param {object} args - Tool arguments
     * @returns {Promise<string>} Tool execution result
     */
    async executeTool(name, args) {
        const tool = this.tools.get(name);
        if (!tool) {
            throw new Error(`Tool '${name}' not found`);
        }

        console.log(`▶️ Executing tool ${name} with args:`, args);
        try {
            const result = await tool.execute(args);
            // Ensure result is a string
            return typeof result === 'string' ? result : JSON.stringify(result);
        } catch (error) {
            console.error(`❌ Tool execution failed (${name}):`, error);
            return `Error executing tool ${name}: ${error.message}`;
        }
    }
}

module.exports = new ToolManager();
