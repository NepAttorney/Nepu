module.exports = async (Discord, client, message) => {
    // Check if bot was pinged
    if (message.author.bot) return false;

    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;

    if (message.mentions.has(client.user.id)) {
        const pingedMessages = [
            "Nep!",
            "Imma nep you up!",
            "Nepu!",
            "Nepu?",
            "Nepu nepu nepu!",
            "Sounds cool!",
            "Coolio.",
            "Who's next on the nep list?",
            "Is it pudding time?",
            "Pudding! Pudding! Pudding!",
            "Blepu~",
            "*Happy Nep noises*",
            "Nepupu!",
            "Get nepped!",
            "How about a huggu?"
        ];

        const pingedMessage = pingedMessages[Math.floor(Math.random() * pingedMessages.length)];

        message.channel.send(pingedMessage);
    };
}