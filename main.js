const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Bot online.')
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command == 'img'){
        client.commands.get('image').execute(message, args);
    } else if (command == 'oi'){
        message.channel.send('calaboca')

    }
});



client.login('ODM3MDk5OTAzNTk5Mzc4NDMz.YInoCQ.t0i8hxM9d2RjH4gr0ReCn-mIBrk')