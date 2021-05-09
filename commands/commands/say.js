const Commando = require('discord.js-commando');
const { Message } = require('discord.js');
module.exports = class SayCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "say",
            group: "commands",
            memberName: "say",
            description: "Make me say something!"
        })
    }

    /**
     * @param {Message} message 
     * @param {String[]} args 
     */
    async run(message, args) {
        message.channel.send(args).then((msg) =>{
            message.delete();
        }).catch((err) =>{
            throw err
        });
    }
}