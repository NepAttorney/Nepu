const Commando = require('discord.js-commando');
const { MessageButton } = require('discord-buttons');

module.exports = class InviteCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "invite",
            group: "util",
            memberName: "invite",
            description: "My invite link!"
        })
    }

    /**
     * @param {Commando.CommandoMessage} message 
     */
    async run(message) {
        const topggButton = new MessageButton()
            .setLabel("Top.gg link")
            .setStyle('url')
            .setURL("https://top.gg/bot/840326170267484180")

        const discordButton = new MessageButton()
            .setLabel("Invite link")
            .setStyle("url")
            .setURL("https://discord.com/oauth2/authorize?client_id=840326170267484180&permissions=2416438342&scope=bot")

        message.channel.send("You can invite me with these following links!", {
            buttons: [
                topggButton,
                discordButton
            ]
        });
    }
}