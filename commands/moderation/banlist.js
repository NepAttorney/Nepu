const Commando = require('discord.js-commando');
const { Message, MessageEmbed } = require('discord.js');

module.exports = class BanlistCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'banlist',
            group: 'moderation',
            memberName: 'banlist',
            description: "Check the users who've been banned!",
            clientPermissions: [
                "BAN_MEMBERS"
            ],
            userPermissions: [
                "BAN_MEMBERS"
            ],
        })
    }

    /**
     * @param {Message} message 
     */
    async run(message) {
        const banList = await message.guild.fetchBans()
        const bannedMembers = (await banList).map((member) => member.user.tag).join("\n");

        message.channel.send(
            new MessageEmbed()
            .setTitle(`List of banned users in ${message.guild.name}`)
            .setColor("#ff0000")
            .setThumbnail(message.guild.iconURL({ size: 4096, dynamic: true }))
            .setDescription(bannedMembers)
        )
    }
}