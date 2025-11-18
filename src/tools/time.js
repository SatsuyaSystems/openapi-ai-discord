/**
 * Tool definition for getting the current time
 */
module.exports = {
    // OpenAI Tool Definition
    definition: {
        type: 'function',
        function: {
            name: 'get_current_time',
            description: 'Get the current time in a specific timezone',
            parameters: {
                type: 'object',
                properties: {
                    timezone: {
                        type: 'string',
                        description: 'The timezone to get the time for (e.g., "Europe/Berlin", "UTC")',
                        default: 'UTC'
                    }
                },
                required: []
            }
        }
    },

    // Execution function
    async execute(args) {
        const timezone = args.timezone || 'UTC';
        try {
            return new Date().toLocaleString('en-US', { timeZone: timezone });
        } catch (error) {
            return `Error: Invalid timezone '${timezone}'`;
        }
    }
};
