const Commando = require('discord.js-commando');
const { Message, MessageAttachment } = require('discord.js');

const { Canvas } = require('canvacord');

module.exports = class WantedCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "wanted",
            group: 'canvacord',
            memberName: 'wanted',
            description: "Get yours or someone elses pfp to have the wanted effect!",
        })
    }

    /**
     * @param {Message} message 
     */
    async run(message) {
        const user = message.mentions.users.first() || message.author;

        const avatar = user.displayAvatarURL({ format: "png" });

        const image = await Canvas.wanted(avatar);

        message.channel.send(
            new MessageAttachment(image, "wanted.png")
        );
    }
}