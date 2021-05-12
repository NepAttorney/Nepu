const Commando = require('discord.js-commando');
const { Message, MessageAttachment } = require('discord.js');

const { Canvas } = require('canvacord');

module.exports = class JailCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "jail",
            group: 'canvacord',
            memberName: 'jail',
            description: "Get yours or someone elses pfp to have the jail effect! You can also add in true if you want to have the image greyscaled.",
        })
    }

    /**
     * @param {Message} message 
     */
    async run(message) {
        const user = message.mentions.users.first() || message.author;

        let isTrue = message.content.toLowerCase();
        if(isTrue.includes("true")) {
            isTrue = true
        } else {
            isTrue = false
        }

        const avatar = user.displayAvatarURL({
            format: "png",
            size: 4096
        });

        const image = await Canvas.jail(avatar, isTrue);

        message.channel.send(
            new MessageAttachment(image, "jail.png")
        );
    }
}