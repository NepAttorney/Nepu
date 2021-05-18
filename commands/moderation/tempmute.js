const Commando = require('discord.js-commando');
const ms = require('ms');

module.exports = class TempMuteCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "tempmute",
            group: "moderation",
            memberName: "tempmute",
            description: "Mute a member for a specified amount of time!",
            clientPermissions: [
                "MUTE_MEMBERS"
            ],
            userPermissions: [
                "MUTE_MEMBERS"
            ],
            throttling: {
                usages: 2,
                duration: 10
            },
        })
    }

    /**
     * @param {Commando.CommandoMessage} message 
     * @param {String[]} args 
     */
    async run(message, args) {
        const target = message.mentions.users.first();
        if (!target) {
            if (!args) {
                message.channel.send("You need to specify the time in `s` `m` `h` or `d`");
                return;
            }
            let muteRole = message.guild.roles.cache.find((role) => role.name === "Muted");

            let muteTarget = message.guild.members.cache.get(target.id);

            muteTarget.roles.add(muteRole.id);
        
            message.channel.send(`<@${muteTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);

            setTimeout(function() {
                muteTarget.roles.remove(muteRole.id);
            }, ms(args[1]));
        } else {
            message.channel.send("Can't find that member.");
        }
    }
}