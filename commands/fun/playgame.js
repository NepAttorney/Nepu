const Commando = require('discord.js-commando');
const { Message } = require('discord.js');

module.exports = class PlaygameCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'playgame',
            group: 'fun',
            memberName: 'playgame',
            description: "Play a game with a user and see who wins!",
            aliases: ["play"],
        })
    }

    /**
     * @param {Message} message 
     * @param {String[]} args 
     */
    async run(message, args) {
        const user = message.author;
        const target = message.mentions.users.first();

        if (!target) return message.channel.send("Mention a user to play with!");

        let playerTarget = message.guild.members.cache.get(target.id);

        const games = [
            "Super Nep Bros",
            "Nepperlands",
            "Nepcraft",
            "Nep of Duty",
            "Apex Neps",
            "Nep 4 Dead 2"
        ];
        const game = games[Math.floor(Math.random() * games.length)];

        const whoWon = Math.floor(Math.random() * 100) + 1;

        if(whoWon >= 50) {
            message.channel.send(`**${user.username}** and **${playerTarget.user.username}** played a game of ${game}.\n**${user.username}** had won!`);
        } else {
            message.channel.send(`**${user.username}** and **${playerTarget.user.username}** played a game of ${game}.\n**${playerTarget.user.username}** had won!`);
        }
    }
}