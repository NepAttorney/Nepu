const Commando = require('discord.js-commando');
const { Message } = require('discord.js');

module.exports = class MotivationCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "motivation",
            group: "commands",
            memberName: 'motivation',
            description: "Let me motivate you!",
            aliases: ["motive"],
        })
    }

    /**
     * @param {Message} message 
     */
    async run(message) {
        const motivationMessages = [
            "It's dangerous to go alone. Take Nep!",
            "Hang in there, player!",
            "Cheer up! Here, have a pat-pat."
        ];

        const motivationMessage = motivationMessages[Math.floor(Math.random() * motivationMessages.length)];

        message.channel.send(motivationMessage);
    }
}