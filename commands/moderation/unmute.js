const Commando = require('discord.js-commando');
const { Message } = require('discord.js');

module.exports = class UnmuteCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'unmute',
            group: 'moderation',
            memberName: 'unmute',
            description: "Unmute a member!",
            userPermissions: [
                "MUTE_MEMBERS"
            ],
            clientPermissions: [
                "MUTE_MEMBERS"
            ],
            throttling: {
                usages: 2,
                duration: 5,
            },
        })
    }

    /**
     * @param {Message} message 
     * @param {String[]} args 
     */
    async run(message, args) {
        const target = message.mentions.users.first();
        if(target) {
            let muteRole = message.guild.roles.cache.find((role) => role.name === "Muted");

            if (!muteRole) return message.channel.send("There's no `Muted` role in the server!");

            let muteTarget = message.guild.members.cache.get(target.id);

            muteTarget.roles.remove(muteRole.id);
            message.channel.send(`${muteTarget} has been unmuted!`);
        } else {
            message.channel.send("Can't find that member!");
        }
    }
}