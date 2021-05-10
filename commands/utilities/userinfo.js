const Commando = require('discord.js-commando');
const { Message, MessageEmbed } = require('discord.js');

module.exports = class UserinfoCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "userinfo",
            group: 'utilities',
            memberName: 'userinfo',
            description: "Get some info about yourself!",
            argsType: 'multiple'
        })
    }

    /**
     * 
     * @param {Message} message 
     * @param {String[]} args 
     */
    async run(message, args) {
        const { guild, channel } = message

        const user = message.mentions.users.first() || message.author;
        const member = guild.members.cache.get(user.id);

        message.channel.send(
            new MessageEmbed()
            .setColor('#66fcf1')
            .setAuthor(`User info for ${user.username}`, user.displayAvatarURL({
                size: 4096,
                format: 'png'
            }))
            .setThumbnail(user.displayAvatarURL({
                size: 4096,
                dynamic: true
            }))
            .addFields(
                {name: "Username", value: user.tag},
                {name: "Nickname", value: member.nickname || "None"},
                {name: "User ID", value: user.id},
                {name: "Joined Server", value: new Date(member.joinedTimestamp).toLocaleDateString()},
                {name: "Created Account", value: new Date(user.createdTimestamp).toLocaleDateString()},
                {name: "Role Count", value: member.roles.cache.size - 1}
            )
        )
    }
}