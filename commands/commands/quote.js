const Commando = require("discord.js-commando");
const { Message } = require("discord.js");

module.exports = class QuoteCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "quote",
            group: "commands",
            memberName: "quote",
            description: "Get a random Nep quote!",
        });
    }

    /**
     * @param {Message} message
     */
    async run(message) {
        const quotes = [
            "You can't be more popular than me. I'm the main character of this franchise and stuff!",
            "I think I've got a little more spring in my step or whatever, but not much.",
            "'Kay, I'm gonna go stir up some crazy trouble, but once everything gets back to normal-bormal, let's relax with Nep Jr.",
            "Actually, I heard this game is supposed to come with some cool bonus items.",
            "Et tu, Compa?! Blah, fine! You're both big dumburgers!",
            "I'm gonna use my CPU authority to get a life-size figure of me manufactured. My boobies'll increase by 20 percent!",
            "nepgear needs to get me my cookies lol",
            "Listen up, my amazing little sister. I came up with an awesome strategy. We can totally get all the shares of Planeptune back with this. No, all of Gamindustri's shares!",
            "Whoa there, kiddo. Don't get shy. All CPUs must be able to sing and dance. It's like a requirement or whatever.",
            "Most def, my gyrating sibling. Now, for the moment of truth!",
            "Oh, so you're old enough to ask that. Are you starting to realize the crazy importance of being a CPU and stuff?",

            "Da da dadaaa daa daa da dadaaaa!",
            "Still, I approve of me. I look pretty hot!",

            "No matter what happens, we'll make it through with my protag ruleset!",
            "Puddiiiiiiiiing! If I don't have any pudding, I'll die! Puddiiiiing!",
            "Let's not sweat the small stuff like logic and plot development! Let's just beat this fool up!",

            "Wohooo!",
            "Hehe, I win!",
            "Well, hey! I'M the protagonist! Of course I'd win!",
        ];

        const quote = quotes[Math.floor(Math.random() * quotes.length)];
        message.channel.send(`\"${quote}\"`)
    }
};
