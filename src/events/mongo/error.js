const chalk = require('chalk');

module.exports = {
    name: "error",
    execute() {
        console.log(chalk.red(`Error: ${err}`));
    },
};