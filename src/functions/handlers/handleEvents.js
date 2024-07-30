const fs = require('fs');
const { connection } = require('mongoose');

module.exports = (client) => {
    // Define a function called 'handleEvents' on the 'client' object
    client.handleEvents = async () => {
        const eventFolders = fs.readdirSync(`./src/events`);
        for (const folder of eventFolders) {
            const eventFiles = fs
            .readdirSync(`./src/events/${folder}`)
            .filter((file) => file.endsWith('.js'));
        switch (folder) {
            case 'client':
                for (const file of eventFiles) {
                    const event = require(`../../events/${folder}/${file}`);
                    
                    // If the event should run only once, attach an event listener that will be called only the first time the specified event is emitted
                    if (event.once) client.once(event.name, (...args) => event.execute(...args, client));

                    // If the event should run multiple times, attach an event listener that will be called every time a specified event is emitted
                    else client.on(event.name, (...args) => event.execute(...args, client));
                }
                break;

                case "mongo":
                    for (const file of eventFiles) {
                        const event = require(`../../events/${folder}/${file}`);
                        if (event.once) connection.once(event.name, (...args) => event.execute(...args, client));
                        else connection.on(event.name, (...args) => event.execute(...args, client));
                    }
                    break;
            }
        }
    }
}