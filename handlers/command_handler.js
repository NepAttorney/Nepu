const {readdirSync} = require('fs');
const ascii = require('ascii-table')
let table = new ascii("Commands");
table.setHeading('Command', ' Load status');
module.exports = (client) => {
    readdirSync('./commands/').forEach(dir => {
        const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));
        for(let file of commands){
            let pull = require(`../commands/${dir}/${file}`);
            if(pull.name){
                client.commands.set(pull.name, pull);
                table.addRow(file,'Success')
            } else {
                table.addRow(file, 'Error -> Missing a help.name, or help.name is not a string.')
                continue;
            }
        }
    });
    console.log(table.toString());
}