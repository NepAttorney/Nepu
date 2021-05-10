const Commando = require('discord.js-commando');
const { MessageEmbed, Message } = require('discord.js');
module.exports = class AvatarCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'avatar',
            group: 'util',
            memberName: 'avatar',
            description: "Get your avatar or someone elses!",
            aliases: ["pfp"]
        })
    }
    /**
     * @param {Message} message 
     */
    async run(message){
        let member = message.mentions.users.first() || message.author;

        let avatar = member.displayAvatarURL({ dynamic: true, format: "png", size: 4096 })

        let avatarEmbed = new MessageEmbed()
        .setColor('#327eeb')
        .setTitle(member.tag)
        .setImage(avatar)

        message.channel.send(avatarEmbed);
    }
}