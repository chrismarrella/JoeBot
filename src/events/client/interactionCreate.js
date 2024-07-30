module.exports = {
    //Ensure that commands are properly executed when an interaction is created
    name: 'interactionCreate',
    async execute(interaction, client) {

        // If the interaction is a command
        if (interaction.isChatInputCommand()){
            const { commands } = client;
            // Get the name of the command that was invoked
            const { commandName } = interaction;
            // Find the command with the specified name from the commands collection
            const command = commands.get(commandName);
            // If the command does not exist, return early
            if (!command) return;

            try {
                // Execute the command and pass the interaction and client to it
                await command.execute(interaction, client);
            } catch (error) {
                // Log any errors that occur during command execution and reply to the interaction with an error message
                console.error(error);
                await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
            }
        }
    }
}