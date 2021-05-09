const Commando = require('discord.js-commando');
const { Message } = require('discord.js');

module.exports = class KickCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "kick",
            group: "moderation",
            memberName: 'kick',
            description: "Kick someone from the server!",
            userPermissions: [
                "KICK_MEMBERS"
            ],
            clientPermissions: [
                "KICK_MEMBERS"
            ],
            throttling: {
                usages: 2,
                duration: 5
            }
        })
    }

    /**
     * @param {Message} message 
     */
    async run(message) {
        const member = message.mentions.users.first();
        if(member?.id === this.client.user.id) {
            return message.channel.send("Nepuuuu! You can't kick me!")
        }
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();

            message.channel.send("User has been kicked!");
        } else {
            message.channel.send("You cannot kick that member.");
        }
    }
}