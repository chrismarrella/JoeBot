const mongoose = require('mongoose');
const chalk = require('chalk');
const db = mongoose.connection;
// Define a function to log the 'word' key from documents in the "words" collection
const logWordsCollection = async () => {
    try {
        const wordsCollection = db.collection('words');
        const documents = await wordsCollection.find().toArray();

        // Object to store documents in the "words" collection
        let words1 = {};
        let words2 = {};
        let words3 = {};

        documents.forEach(document => {
            if (document.level === 1) {
                words1[document.word] = document.level;
            }
            if (document.level === 2) {
                words2[document.word] = document.level;
            }
            if (document.level === 3) {
                words3[document.word] = document.level;
            }

        });
        return [words1, words2, words3];

    } catch (error) {
        console.error(chalk.redBright('Error logging words in words collection'), error);
    }
};

// Export the functions
module.exports = {
    logWordsCollection
};