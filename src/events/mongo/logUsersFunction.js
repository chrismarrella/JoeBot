const mongoose = require('mongoose');
const chalk = require('chalk');
const db = mongoose.connection;
// Define a function to log the 'word' key from documents in the "words" collection
const logUsersCollection = async () => {
    try {
        const userCollection = db.collection('users');
        const documents = await userCollection.find().toArray();

        users = {};

        documents.forEach(document => {
            users[document.userid] = document.messageid;
        });

        return users;
    } catch (error) {
        console.error(chalk.redBright('Error logging user in users collection'), error);

    }
};

const checkUser = async (users, id) => {
    return id in users;
};

// Export the functions
module.exports = {
    logUsersCollection,
    checkUser
};