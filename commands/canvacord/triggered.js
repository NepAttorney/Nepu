const Commando = require('discord.js-commando');
const { Message, MessageAttachment } = require('discord.js');

const { Canvas } = require('canvacord');

module.exports = class TriggeredCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "triggered",
            group: 'canvacord',
            memberName: 'triggered',
            description: "Get yours or someone elses pfp to have the TRIGGERED effect!",
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

        const image = await Canvas.trigger(avatar);

        message.channel.send(
            new MessageAttachment(image, "triggered.gif")
        );
    }
}