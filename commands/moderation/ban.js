const Commando = require('discord.js-commando');
const { Message, MessageEmbed } = require('discord.js');

module.exports = class BanCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "ban",
            group: "moderation",
            memberName: "ban",
            description: "Ban someone from the server!",
            argsType: "multiple",
            clientPermissions: [
                "BAN_MEMBERS"
            ],
            userPermissions: [
                "BAN_MEMBERS"
            ],
            throttling: {
                usages: 2,
                duration: 5,
            }
        })
    }

    /**
     * @param {Message} message 
     * @param {String[]} args 
     */
    async run(message, args) {
        const member = message.mentions.users.first();
        const reason = args[1] || "None."
        if(member?.id === this.client.user.id){
            return message.channel.send("Nepuuuu! You can't ban me!")
        }

        if(member){
            const banTarget = message.guild.members.cache.get(member.id);
            banTarget.ban({
                reason
            });

            message.channel.send(
                new MessageEmbed()
                .setTitle("User has been banned!")
                .setColor("#ff0000")
                .setThumbnail(member.avatarURL({ size: 4096, dynamic: true }))
                .setDescription(`${member.tag} has been banned from the factory!\nReason: ${reason}`)
            );
        } else {
            message.channel.send("You can't ban the void.");
        }
    }
}