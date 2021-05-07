module.exports = {
    name: 'avatar',
    permissions: [],
    description: "Get your avatar or someone elses!",
    aliases: [],
    execute(client, message, args, Discord){
        let member = message.mentions.users.first() || message.author;

        let avatar = member.displayAvatarURL({ dynamic: true, format: "png", size: 4096 })

        let avatarEmbed = new Discord.MessageEmbed()
        .setColor('#327eeb')
        .setTitle(member.tag)
        .setImage(avatar)

        message.channel.send(avatarEmbed);
    }

}