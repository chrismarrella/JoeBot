const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');


module.exports = (client) => {
    // Define a function called 'handleCommands' on the 'client' object that will be used to load the commands
    client.handleCommands = async () => {
        const commandFolders = fs.readdirSync(`./src/commands`);
        for (const folder of commandFolders) {
            const commandFiles = fs
                .readdirSync(`./src/commands/${folder}`)
                .filter((file) => file.endsWith('.js'));
                
            // Deconstruct the 'commands' and 'commandArray' properties from the 'client' object
            const { commands, commandArray } = client;
            for (const file of commandFiles) {
            
                const command = require(`../../commands/${folder}/${file}`);
                
                // Add the command to the 'commands' collection and the 'commandArray' array
                commands.set(command.data.name, command);
                commandArray.push(command.data.toJSON());
                console.log(`Command: ${command.data.name} has been passed through the handler.`);
            }
        }

        // Setting the client ID and guild ID for the bot
        const clientId = "1236042917672386641";
        const guildId = "1236045084168945809";
        const rest = new REST({ version: '9' }).setToken(process.env.token);
        try {
            console.log('Started refreshing application (/) commands.');

            await rest.put(
                Routes.applicationCommands(clientId, guildId),
                { body: client.commandArray },
            );
            // Log the success message if the commands are successfully reloaded
            console.log('Successfully reloaded application (/) commands.');
        } catch (error) {
            // Log errors that occur during the process
            console.error(error);
        }
    }
}