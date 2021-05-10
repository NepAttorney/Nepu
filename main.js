require("module-alias/register");

const fs = require("fs");

const Commando = require("discord.js-commando");
const Discord = require("discord.js");
const path = require("path");

require("dotenv").config();

const client = new Commando.CommandoClient({
    owner: "428288065115783172",
    commandPrefix: process.env.PREFIX,
    partials: ["MESSAGE", "REACTION", "CHANNEL"],
});

client.events = new Discord.Collection();

require(`./handlers/event_handler`)(client, Discord);

client.once("ready", () => {
    client.user.setActivity("Nep nep nep nep", { type: "CUSTOM_STATUS" });

    client.registry
        .registerDefaultTypes()
        .registerGroups([
            ["commands", "Nep commands"],
            ["moderation", "Moderation Commands"],
            ["utilities", "Utility Commands"],
            ["canvacord", "Image Manipulation"]
        ])
        .registerDefaultGroups()
        .registerDefaultCommands({
            prefix: false,
            eval: false
        })
        .registerCommandsIn(path.join(__dirname, "commands"));
});

client.on('message', (message) => {
    // Check if bot was pinged
    if (message.author.bot) return false;

    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;

    if (message.mentions.has(client.user.id)) {
        const pingedMessages = [
            "Nep!",
            "Imma nep you up!",
            "Nepu!",
            "Nepu?",
            "Nepu nepu nepu!",
            "Sounds cool!",
            "Coolio.",
            "Who's next on the nep list?",
            "Is it pudding time?",
            "Pudding! Pudding! Pudding!",
            "Blepu~",
            "*Happy Nep noises*"
        ];

        const pingedMessage = pingedMessages[Math.floor(Math.random() * pingedMessages.length)];

        message.channel.send(pingedMessage);
    };
});
const logChannel = '840335142644219914'

client.on('guildCreate', (guild) => {
    client.channels.cache.get(logChannel).send(
        new Discord.MessageEmbed()
            .setTitle(`I joined a new server!`)
            .setThumbnail(guild.iconURL({
                size: 4096,
                dynamic: true
            }))
            .addFields(
                {name: "Server Name", value: `${guild.name}`},
                {name: "Server ID", value: `${guild.id}`},
                {name: "Owner Name", value: `${guild.owner}`},
                {name: "Owner ID", value: `${guild.owner.id}`},
                {name: "Member Count", value: `${guild.memberCount}`}
            )
            .setFooter(`Currently in ${client.guilds.cache.size} servers!`)
            .setTimestamp()
            .setColor('#ff97e0')
    );
});

client.on('guildDelete', (guild) => {
    client.channels.cache.get(logChannel).send(
        new Discord.MessageEmbed()
            .setTitle(`I got removed from a server!`)
            .setThumbnail(guild.iconURL({
                size: 4096,
                dynamic: true
            }))
            .addFields(
                {name: "Server Name", value: `${guild.name}`},
                {name: "Server ID", value: `${guild.id}`},
                {name: "Owner Name", value: `${guild.owner}`},
                {name: "Owner ID", value: `${guild.owner.id}`},
                {name: "Member Count", value: `${guild.memberCount}`}
            )
            .setFooter(`Currently in ${client.guilds.cache.size} servers!`)
            .setTimestamp()
            .setColor('RED')
    );
});

client.login(process.env.DISCORD_TOKEN);