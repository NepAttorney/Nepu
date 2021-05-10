const Commando = require('discord.js-commando');
const { Message, Util } = require('discord.js');

module.exports = class EmoteCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "emote",
            group: 'utilities',
            memberName: 'emote',
            description: "Get the URL of an emote.",
            argsType: 'multiple'
        })
    }

    /**
     * @param {Message} message 
     * @param {String[]} args 
     */
    async run(message, args) {
        if (!args.length) return message.channel.send("Please specify an emote!");

        const rawEmoji = args[0];
        const parsedEmote = Util.parseEmoji(rawEmoji)
        if (parsedEmote.id) {
            const extension = parsedEmote.animated ? ".gif" : ".png";
            const url = `https://cdn.discordapp.com/emojis/${parsedEmote.id + extension}`
            message.channel.send(`${parsedEmote.name}\n${url}`)
        }
    }
}