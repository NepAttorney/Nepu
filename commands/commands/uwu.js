const owoify = require('owoify-js').default;

const Commando = require('discord.js-commando');
const { Message } = require('discord.js');

module.exports = class UwuCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "uwu",
            group: "commands",
            memberName: "uwu",
            description: "Turn your message into an uwudable message!",
            argsType: 'multiple'
        })
    }

    /**
     * @param {Message} message 
     * @param {String[]} args 
     */
    async run(message, args) {
        let messageArgs = args.join(" ");

        const randomChance = Math.floor(Math.random() * 100) + 1
        if(randomChance >= 77){
            const owomessage = owoify(messageArgs, 'uvu');
            message.channel.send(owomessage)
        } else if(randomChance >= 33){
            const owomessage = owoify(messageArgs, 'uwu');
            message.channel.send(owomessage)
        } else {
            const owomessage = owoify(messageArgs);
            message.channel.send(owomessage)
        }
    }
}