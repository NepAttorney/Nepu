const Commando = require('discord.js-commando');
const { Message } = require('discord.js');

module.exports = class CuddleCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "cuddle",
            group: 'commands',
            memberName: 'cuddle',
            description: "Cuddle someone... or me!",
            argsType: "multiple"
        })
    }

    /**
     * @param {Message} message 
     * @param {String[]} args 
     */
    async run(message, args) {
        const target = message.mentions.users.first();

        if (target) {
            let cuddleTarget = message.guild.members.cache.get(target.id);

            message.channel.send(`**${message.author.username}** and **${cuddleTarget.user.username}** cuddled each other!`);
        } else {
            message.channel.send("Cuddle time!");
        }
    }
}