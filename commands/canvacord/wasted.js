const Commando = require('discord.js-commando');
const { Message, MessageAttachment } = require('discord.js');

const { Canvas } = require('canvacord');

module.exports = class Wastedommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "wasted",
            group: 'canvacord',
            memberName: 'wasted',
            description: "Get yours or someone elses pfp to have the wasted effect!",
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

        const image = await Canvas.wasted(avatar);

        message.channel.send(
            new MessageAttachment(image, "wasted.png")
        );
    }
}