const Commando = require('discord.js-commando');
const { Message, MessageAttachment } = require('discord.js');

const { Canvas } = require('canvacord');

module.exports = class InvertCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "invert",
            group: 'canvacord',
            memberName: 'invert',
            description: "Get yours or someone elses pfp to have the inverted effect!",
        })
    }

    /**
     * @param {Message} message 
     */
    async run(message) {
        const user = message.mentions.users.first() || message.author;

        const avatar = user.displayAvatarURL({
            format: "png",
            size: 4096
        });

        const image = await Canvas.invert(avatar);

        message.channel.send(
            new MessageAttachment(image, "invert.png")
        );
    }
}