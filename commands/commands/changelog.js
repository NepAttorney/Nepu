const Commando = require('discord.js-commando');
const commonTags = require('common-tags');

const changeLog = [
    {
        version: "1.1.1",
        changes: commonTags.stripIndents`Added the tempmute commands.`
    },
    {
        version: "1.1.0",
        changes: commonTags.stripIndents`Fixed some bugs
        Fun group added.
        Deleted the ability to make suggestions channels.
        Removed an unneeded package.`
    },
    {
        version: "1.0.5",
        changes: commonTags.stripIndents`Added a database.
        Can set a suggestions channel where every message will be an embed.
        Util group added.`
    },
    {
        version: "1.0.0",
        changes: commonTags.stripIndents`First version!`
    }
]

module.exports = class ChangeLogCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "changelog",
            group: "commands",
            memberName: "changelog",
            description: "See the changelog!",
            hidden: true,
            ownerOnly: true
        })
    }

    /**
     * @param {Commando.CommandoMessage} message 
     */
    async run(message) {
        let changesMessage = ""
        for (const change of changeLog) {
            const { version, changes } = change
            changesMessage += `**Version:** ${version}\n${changes}\n\n`
        }

        message.channel.send(changesMessage)
    }
}