require('dotenv').config();
//Load the token from the .env file
const { token, databaseToken } = process.env;
const { connect, default: mongoose } = require('mongoose');
//Load the necessary modules
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const fs = require('fs');


//Create a new client with the necessary intents, these will specify what events the bot will listen to
const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.MessageContent
] 
});


//Create an array and collection to store the commands
client.commands = new Collection();
client.commandArray = [];


//Load the function files
const functionFolders = fs.readdirSync(`./src/functions`);
for (const folder of functionFolders) {
    const functionFiles = fs
    .readdirSync(`./src/functions/${folder}`)
    .filter((file) => file.endsWith('.js'));
    for (const file of functionFiles)
        require(`./functions/${folder}/${file}`)(client);
}


//Call the functions to handle the events and commands and load the token
client.handleEvents();
client.handleCommands();
client.login(token);

//Connect to the MongoDB database
mongoose.connect(databaseToken, {});