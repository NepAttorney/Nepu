const Commando = require('discord.js-commando');
const { Message } = require('discord.js');

module.exports = class NepCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'nep',
            group: 'commands',
            memberName: 'nep',
            description: "Nepu nepu nep!",
            aliases: ["nepu"],
        })
    }

    /**
     * @param {Message} message 
     */
    async run(message) {
        const e = [
            "e",
            "ee",
            "eee",
            "eeee",
            "eeeee",
            "eeeeee",
            "eeeeeee",
            "eeeeeeee",
            "eeeeeeeee",
            "eeeeeeeeee",
            "eeeeeeeeeee",
            "eeeeeeeeeeee",
            "eeeeeeeeeeeee",
            "eeeeeeeeeeeeee",
        ];

        const eLetter = e[Math.floor(Math.random() * e.length)];

        const uChance = Math.floor(Math.random() * 100) + 1;
        if(uChance >= 50){
            message.channel.send(`n${eLetter}pu!`);
        } else {
            message.channel.send(`n${eLetter}p!`);
        }
    }
}