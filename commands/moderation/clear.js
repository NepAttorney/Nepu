const Commando = require('discord.js-commando');
const { Message } = require('discord.js');

module.exports = class ClearCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'clear',
            group: 'moderation',
            memberName: 'clear',
            description: "Clear the specified amount of messages in a channel.",
            clientPermissions: [
                "ADMINISTRATOR"
            ],
            userPermissions: [
                "ADMINISTRATOR"
            ],
        })
    }

    /**
     * @param {Message} message 
     * @param {String[]} args 
     */
    async run(message, args) {

        if(!args[0]) return message.reply("Please enter the amount of messages you want to clear!");
        if(isNaN(args[0])) return message.reply("Please enter a real number!");

        if(args[0] > 100) return message.reply("You cannnot delete more thna 100 messages!");
        if(args[0] < 1) return message.reply("You must delete at least one message!")

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        })
    }
}