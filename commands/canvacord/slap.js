const Commando = require('discord.js-commando');
const { Message, MessageAttachment } = require('discord.js');

const { Canvas } = require('canvacord');

module.exports = class SlapCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "slap",
            group: 'canvacord',
            memberName: 'slap',
            description: "Slap someone!",
        })
    }

    /**
     * @param {Message} message 
     */
    async run(message) {
        const target = message.mentions.users.first();
        if (!target) return message.channel.send("Mention a user to slap!");
        const user = message.author

        const targetAvatar = target.displayAvatarURL({
            format: "png",
            size: 4096
        });
        const userAvatar = user.displayAvatarURL({
            format: "png",
            size: 4096
        });

        const image = await Canvas.slap(userAvatar, targetAvatar);

        message.channel.send(
            new MessageAttachment(image, "slap.png")
        );
    }
}