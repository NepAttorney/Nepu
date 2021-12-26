const Commando = require('discord.js-commando');
const { Message } = require('discord.js');

module.exports = class RateCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "rate",
            group: 'commands',
            memberName: 'rate',
            description: "Rate yourself or someone!",
            argsType: "multiple"
        })
    }

    /**
     * @param {Message} message 
     * @param {String[]} args 
     */
    async run(message, args) {
        if (!args) {
            var rate = Math.floor(Math.random() * 10) + 1;

            return message.channel.send(`I rate you ${rate}/10!`);
        }

        if (args){
            var rate = Math.floor(Math.random() * 10) + 1;

            const target = message.mentions.users.first();
            let rateTarget
            if (target) {
                rateTarget = message.guild.members.cache.get(target.id);
            } else {
                rateTarget = args.join(" ")
            }

            message.channel.send(`I rate ${rateTarget} ${rate}/10!`)
        }
    }
}