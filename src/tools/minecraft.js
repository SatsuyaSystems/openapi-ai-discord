/**
 * Tool definition for getting the Elysium Minecraft server status
 */
const axios = require('axios');

module.exports = {
    // OpenAI Tool Definition
    definition: {
        type: 'function',
        function: {
            name: 'get_minecraft_status',
            description: 'Get the current status, player count, and version of the Elysium Minecraft server (elysium.satsuya.de)',
            parameters: {
                type: 'object',
                properties: {},
                required: []
            }
        }
    },

    // Execution function
    async execute(args) {
        const serverAddress = 'elysium.satsuya.de';
        try {
            const response = await axios.get(`https://api.mcsrvstat.us/3/${serverAddress}`);
            const data = response.data;

            if (!data.online) {
                return `The Minecraft server at ${serverAddress} is currently OFFLINE.`;
            }

            let status = `Server: ${serverAddress}\n`;
            status += `Status: ONLINE\n`;
            status += `Version: ${data.version}\n`;
            status += `Players: ${data.players.online}/${data.players.max}\n`;
            status += `MOTD: ${data.motd.clean.join('\n')}`;

            if (data.players.list && data.players.list.length > 0) {
                status += `\nOnline Players: ${data.players.list.map(p => p.name).join(', ')}`;
            }

            return status;
        } catch (error) {
            return `Error fetching Minecraft server status: ${error.message}`;
        }
    }
};
