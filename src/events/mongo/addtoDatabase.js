const mongoose = require('mongoose');
const chalk = require('chalk');
const db = mongoose.connection;



const isUserinDatabase = async (userid) => {
    const userCollection = db.collection('users');
    const existingUser = await userCollection.findOne({ userId: userid });
    if (existingUser) {
        console.log(chalk.redBright('User already in database'));
        return true 
        }
    return false
    }

const insertData = async (userid, messageid) => {
    try {
        const userCollection = db.collection('users');
        const user = { userId: userid, messageId: messageid };
        const result = await userCollection.insertOne(user);
        console.log(`Added user to the database`);  
    } catch (error) {
        console.log(chalk.redBright('Database Error: Unable to add user to database'));
    }
};

isUserinDatabase('1234')
isUserinDatabase('255050835732594688')

module.exports = { insertData, isUserinDatabase };