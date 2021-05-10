const Commando = require('discord.js-commando');
const { Message } = require('discord.js');

module.exports = class EightBallCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: '8ball',
            group: 'commands',
            memberName: '8ball',
            description: 'An 8ball command where the user asks something and I will reply.',
            argsType: "multiple"
        })
    }

    /**
     * @param {Message} message 
     * @param {String[]} args 
     */
    async run(message, args) {
        if (!args[0]) return message.channel.send("Please ask a question!");

        const response = [
            "yes, of course!",
            "absolutely!",
            "the future says yes.",
            "the Nep agrees!",
            "the future says no.",
            "nope.",
            "nah.",
            "maybe.",
            "probably.",
            "probably not.",
            "meh.",
        ];

        const answer = response[Math.floor(Math.random() * response.length)];
        message.reply(answer);
    }
}