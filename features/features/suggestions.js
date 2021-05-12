
const { MessageEmbed } = require('discord.js');
const { CommandoClient } = require('discord.js-commando');
const suggestionsSchema = require('../../models/suggestionsSchema');

let suggestionCache = {}

const fetchSuggestionsChannels = async (guildID) => {
    let query = {}

    if (guildID) {
        query.serverID = guildID
    }

    const results = await suggestionsSchema.find(query)

    for (const result of results) {
        const { serverID, channelID } = result
        suggestionCache[serverID] = channelID
    }
}

/**
 * @param {CommandoClient} client 
 */
module.exports = (client) => {
    fetchSuggestionsChannels()

    client.on('message', (message) => {
        const { guild, channel, content, member } = message

        const cachedChannelID = suggestionCache[guild.id]
        if (cachedChannelID && cachedChannelID === channel.id && !member.user.bot) {
            message.delete()

            message.channel.send(
                new MessageEmbed()
                .setColor('#FADF2E')
                .setAuthor(member.user.tag, member.user.displayAvatarURL({
                    dynamic: true
                }))
                .setDescription(content)
                .setFooter(`New suggestion!`)
                .setTimestamp()
            ).then((message) => {
                message.react("✅")
                message.react("❌")
            })
        }
    })
}

module.exports.fetchSuggestionsChannels = fetchSuggestionsChannels