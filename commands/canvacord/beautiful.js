const Commando = require('discord.js-commando');
const { Message, MessageAttachment } = require('discord.js');

const { Canvas } = require('canvacord');

module.exports = class BeautifulCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "beautiful",
            group: 'canvacord',
            memberName: 'beautiful',
            description: "Get yours or someone elses pfp to have the beautiful effect!",
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

        const image = await Canvas.beautiful(avatar);

        message.channel.send(
            new MessageAttachment(image, "beautiful.png")
        );
    }
}