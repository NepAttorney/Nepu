require("module-alias/register");

const fs = require("fs");

const { MongoClient } = require('mongodb');
const { MongoDBProvider } = require('commando-provider-mongo');

const Commando = require("discord.js-commando");
const Discord = require("discord.js");
const path = require("path");

require("dotenv").config();

const client = new Commando.CommandoClient({
    owner: "428288065115783172",
    commandPrefix: process.env.PREFIX,
    partials: ["MESSAGE", "REACTION", "CHANNEL"],
});

client.setProvider(
    MongoClient.connect(process.env.MONGODB_SRV, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then((client) => {
            console.log("Connected to Le Deb!")
            return new MongoDBProvider(client, "BotDB")
        }).catch((err) => {
            console.error(err)
        })
);

client.events = new Discord.Collection();

require(`./handlers/event_handler`)(client, Discord);

client.once("ready", () => {
    client.user.setActivity("Nep nep nep nep", { type: "CUSTOM_STATUS" });

    client.registry
        .registerDefaultTypes()
        .registerGroups([
            ["commands", "Nep commands"],
            ["moderation", "Moderation Commands"],
            ["util", "Utility Commands"],
            ["canvacord", "Image Manipulation"]
        ])
        .registerDefaultGroups()
        .registerDefaultCommands({
            eval: false,
        })
        .registerCommandsIn(path.join(__dirname, "commands"));
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