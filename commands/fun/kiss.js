const Commando = require('discord.js-commando');

module.exports = class KissCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "kiss",
            group: "fun",
            memberName: "kiss",
            description: "Give a user the \"Oh my, how lewd~\" move!",
            argsType: "multiple"
        })
    }

    /**
     * @param {Commando.CommandoMessage} message 
     * @param {String[]} args 
     */
    async run(message, args) {
        const target = message.mentions.users.first();
        if(target) {
            let kissTarget = message.guild.members.cache.get(target.id);

            message.channel.send(`You and ${kissTarget} did the "Oh my, how lewd~"`)
        } else {
            message.channel.send("Mention a user to kiss!");
        }
    }
}