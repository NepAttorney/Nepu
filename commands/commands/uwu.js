const owoify = require('owoify-js').default;

const Commando = require('discord.js-commando');
const { Message } = require('discord.js');

module.exports = class UwuCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "uwu",
            group: "commands",
            memberName: "uwu",
            description: "Turn your message into an uwudable message!"
        })
    }

    /**
     * @param {Message} message 
     * @param {String[]} args 
     */
    async run(message, args) {
        const randomChance = Math.floor(Math.random() * 100) + 1
        if(randomChance >= 77){
            const owomessage = owoify(args, 'uvu');
            message.channel.send(owomessage)
        } else if(randomChance >= 33){
            const owomessage = owoify(args, 'uwu');
            message.channel.send(owomessage)
        } else {
            const owomessage = owoify(args);
            message.channel.send(owomessage)
        }
    }
}