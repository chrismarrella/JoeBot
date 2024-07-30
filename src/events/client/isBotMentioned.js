module.exports = {
    name: 'messageCreate',
    once: false, // This handler will be called on every message, not just once
    async execute(message) {
        // Check if the message mentions the bot
        if (message.author.bot) return;
        const isMentioned = message.mentions.has(message.client.user.id);
        console.log(isMentioned.toString());
        return isMentioned;
    }
};