const chalk = require('chalk');

module.exports = {
    name: "connected",
    execute() {
        console.log(chalk.greenBright('Connected to MongoDB!'));
    },
};