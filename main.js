require('module-alias/register');

const fs = require('fs');

const Discord = require('discord.js');

require('dotenv').config();

const client = new Discord.Client({ partials: [ "MESSAGE", "REACTION", "CHANNEL"] });

client.commands = new Discord.Collection();
client.events = new Discord.Collection();
client.categories - fs.readdirSync('./commands/');

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
});

client.once('ready', () => {
    client.user.setActivity('Nep nep nep nep', { type: "CUSTOM_STATUS" });
});

client.login(process.env.DISCORD_TOKEN);