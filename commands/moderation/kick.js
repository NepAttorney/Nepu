module.exports = {
    name: 'kick',
    permissions: ["KICK_MEMBERS"],
    description: "Kick someone from the server!",
    aliases: [],
    execute(client, message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();

            message.channel.send("User has been kicked!");
        } else {
            message.channel.send("You cannot kick that member.");
        }
    }
}