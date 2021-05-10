const Commando = require('discord.js-commando');
const { Message } = require('discord.js');

module.exports = class PatCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'pat',
            group: 'commands',
            memberName: 'pat',
            description: "Pat someone... or me!",
            aliases: ["pet"]
        })
    }

    /**
     * @param {Message} message 
     * @param {String[]} args 
     */
    async run(message, args) {
        const target = message.mentions.users.first();
        if(target){
            let patTarget = message.guild.members.cache.get(target.id);

            message.channel.send(`You gave ${patTarget} a headpat!`);
        } else {
            message.channel.send("Headpats!");
        }
    }
}