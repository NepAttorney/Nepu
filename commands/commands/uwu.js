const owoify = require('owoify-js').default;

const { Client, Message } = require('discord.js');

module.exports = {
    name: 'uwu',
    permissions: [],
    description: "Turn your message into an uwudable message!",
    aliases: [],
    /**
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    execute(client, message, args, Discord){
        let messageArgs = args.join(' ');

        if(!messageArgs) return console.log('no args')

        const randomChance = Math.floor(Math.random() * 100) + 1
        if(randomChance >= 77){
            const owomessage = owoify(messageArgs, 'uvu');
            message.channel.send(owomessage)
        } else if(randomChance >= 33){
            const owomessage = owoify(messageArgs, 'uwu');
            message.channel.send(owomessage)
        } else {
            const owomessage = owoify(messageArgs);
            message.channel.send(owomessage)
        }
    }
}