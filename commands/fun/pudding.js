const Commando = require('discord.js-commando');

module.exports = class PuddingCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "pudding",
            group: "fun",
            memberName: "pudding",
            description: "Give me or a user some pudding!"
        })
    }

    /**
     * @param {Commando.CommandoMessage} message 
     * @param {String[]} args 
     */
    async run(message, args) {
        const target = message.mentions.users.first();
        if(target) {
            let puddingTarget = message.guild.members.cache.get(target.id);

            message.channel.send(`You gave ${puddingTarget} some pudding!`);
        } else {
            message.channel.send("Yay! Pudding time!");
        }
    }
}