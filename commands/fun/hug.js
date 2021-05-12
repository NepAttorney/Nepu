const Commando = require('discord.js-commando');
const { Message } = require('discord.js');

module.exports = class HugCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'hug',
            group: 'fun',
            memberName: 'hug',
            description: "Hug someone... or me!",
            aliases: ["huggu"],
        })
    }

    /**
     * @param {Message} message 
     * @param {String[]} args 
     */
    async run(message, args) {
        const target = message.mentions.users.first();
        if(target) {
            let hugTarget = message.guild.members.cache.get(target.id);

            message.channel.send(`You gave ${hugTarget} a huggu!`);
        } else {
            message.channel.send("Yay! Hugs!");
        }
    }
}