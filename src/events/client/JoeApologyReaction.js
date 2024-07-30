const { insertData, isUserinDatabase } = require('../mongo/addtoDatabase');

module.exports = {
    name: 'messageCreate',
    once: false,
    async execute(message) {
        if (message.author.bot) return;

        // Await the result of isUserinDatabase
        const userExists = await isUserinDatabase(message.author.id);

        if (message.content.toLowerCase() === "sorry joe" && userExists === false) {
            message.channel.send("Alright, apology accepted. Just be more mindful of your language next time, okay? We're all trying to keep things civil here.");
            message.channel.send({
                files: [{
                    attachment: 'JoeForgiven.jpg',
                    name: 'JoeForgiven.jpg'
                }]
            });
            insertData(message.author.id, message.url);
        } else if (message.content.toLowerCase() === "sorry joe" && userExists === true) {
            message.channel.send("Come on, really? If you were really sorry, you wouldn't have said it again. I thought we had an understanding. I'm not even mad, I'm just disappointed. I expected better from you. Let's clean up the language and keep things respectful, alright?");
            message.channel.send({
                files: [{
                    attachment: 'SadJoe.jpg',
                    name: 'SadJoe.jpg'
                }]
            });
        }
    }
};