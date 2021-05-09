module.exports = {
    name: 'say',
    permissions: [],
    description: "Make me say something!",
    aliases: [],
    execute(client, message, args, discord){
        let messageArgs = args.join(' ');

        if(!messageArgs) return;
        
        message.channel.send(messageArgs).then((msg) =>{
            message.delete();
        }).catch((err) =>{
            throw err
        });
    }
}