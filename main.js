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
        .registerGroups([
            ["commands", "Nep commands"],
            ["moderation", "Moderation Commands"]
        ])
        .registerDefaults()
        .registerCommandsIn(path.join(__dirname, "commands"));
});

client.login(process.env.DISCORD_TOKEN);