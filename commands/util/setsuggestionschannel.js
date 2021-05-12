const Commando = require('discord.js-commando');

const suggestionsSchema = require('../../models/suggestionsSchema');
const { fetchSuggestionsChannels } = require('../../features/features/suggestions');

module.exports = class SetSuggestionsChannelCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'setsuggestionschannel',
            group: 'util',
            memberName: 'setsuggestionschannel',
            description: "Set the suggestions channel!",
            throttling: {
                usages: 1,
                duration: 5
            },
            argsType: 'multiple',
            userPermissions: [
                "ADMINISTRATOR"
            ],
        })
    }

    /**
     * @param {Commando.CommandoMessage} message 
     * @param {String[]} args 
     */
    async run(message, args) {
        const channel = message.mentions.channels.first() || message.channel

        const { guild: { id: serverID } } = message
        const { id: channelID } = channel

        await suggestionsSchema.findOneAndUpdate({
            serverID,
        }, {
            serverID,
            channelID,
        }, {
            upsert: true
        });

        message.reply(`the suggestion channel has been set to ${channel}`);

        fetchSuggestionsChannels(serverID)
    }
}