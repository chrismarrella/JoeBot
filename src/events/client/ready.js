const mongoose = require('mongoose');

module.exports = {
    name: 'ready',
    once: true, // This event will only be called only when the bot is turned on
    async execute(client) {
        // Log the bot's tag when it is ready and online
        console.log(`Logged in as ${client.user.tag}`);
    }
}