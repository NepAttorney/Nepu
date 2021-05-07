module.exports = {
    name: 'banlist',
    permissions: ["BAN_MEMBERS"],
    description: "Check the users who've been banned!",
    aliases: [],
    async execute(client, message, args, discord){
        const banList = await message.guild.fetchBans()
        const bannedMembers = (await banList).map((member) => member.user.tag).join("\n");

        message.channel.send(
            new discord.MessageEmbed()
            .setTitle(`List of banned users in ${message.guild.name}`)
            .setColor("#ff0000")
            .setThumbnail(message.guild.iconURL({ size: 4096, dynamic: true }))
            .setDescription(bannedMembers)
        )
    }
}