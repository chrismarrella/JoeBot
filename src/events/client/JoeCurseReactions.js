const { logWordsCollection } = require('../mongo/logWordsFunction');

module.exports = {
    name: 'messageCreate',
    once: false,
    async execute(message) {
        if (message.author.bot) return;
        try {
            const [words1, words2, words3] = await logWordsCollection();

            // Use regex to create a checker for the words collection
            const checker1 = new RegExp(Object.keys(words1).join('|'), 'i');
            const checker2 = new RegExp(Object.keys(words2).join('|'), 'i');
            const checker3 = new RegExp(Object.keys(words3).join('|'), 'i');


            // Check if the message content contains any word from the words collection
            if (checker1.test(message.content)) {
                message.channel.send("Hey, watch your language there! We don't need that kind of talk around here. Show some respect, okay?");
                message.channel.send({
                    files: [{
                        attachment: 'level1JoeReaction.jpg',
                        name: 'level1JoeReaction.jpg',
                        description: ' '
                    }]
                });
                return message.author.id.toString();
            }
            if (checker2.test(message.content)) {
                message.channel.send("Whoa, whoa, whoa! That's completely uncalled for. Keep it clean, alright? Let's try to keep this conversation civil.");
                message.channel.send({
                    files: [{
                        attachment: 'level2JoeReaction.jpg',
                        name: 'level2JoeReaction.jpg',
                        description: ' '
                    }]
                });
                return message.author.id.toString();
            }
            if (checker3.test(message.content)) {
                message.channel.send("Are you kidding me?! That's way out of line! Watch your mouth or we're going to have a real problem here. Show some respect, or there will be consequences. Don't forget, I am law enforcment.");
                message.channel.send({
                    files: [{
                        attachment: 'level3JoeReaction.jpg',
                        name: 'level3JoeReaction.jpg',
                        description: ' '
                    }]
                });
                return message.author.id.toString();
            }
        } catch (error) {
            console.error('Error fetching words collection:', error);
        }
    }
};