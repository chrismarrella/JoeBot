module.exports = {
    name: 'messageCreate', 
    once: false, // This handler will be called on every message, not just once
    async execute(message) {
        try {
            if (message.author.bot) {
                // Log the content of the author and message to the console
                //console.log(`${message.author.username}: ${message.content} ${message.url}`);
            }

        } catch (error) {
            // Log any errors to the console
            console.error('Error handling message:', error);
        }
    }
};
