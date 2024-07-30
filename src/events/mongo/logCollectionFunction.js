const mongoose = require('mongoose');
const chalk = require('chalk');
const db = mongoose.connection;

db.once('open', async () => {
    // Log collection names
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log(chalk.cyanBright('Collections:'));
    collections.forEach(collection => {
        console.log(collection.name);
    });
});