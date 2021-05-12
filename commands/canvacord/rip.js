const Commando = require('discord.js-commando');
const { Message, MessageAttachment } = require('discord.js');

const { Canvas } = require('canvacord');

module.exports = class RipCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "rip",
            group: 'canvacord',
            memberName: 'rip',
            description: "Get yours or someone elses pfp to have the rip effect!",
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

        const image = await Canvas.rip(avatar);

        message.channel.send(
            new MessageAttachment(image, "rip.png")
        );
    }
}