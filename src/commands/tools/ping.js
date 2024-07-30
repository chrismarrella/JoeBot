const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    //Command to get the ping of the bot
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Returns my ping!'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({ 
            fetchReply: true
         });
        //Send the ping of the bot
         const newMessage = `API Latency: ${client.ws.ping}\nClient Ping: ${message.createdTimestamp - interaction.createdTimestamp}`;
         await interaction.editReply({content: newMessage});
    }
}