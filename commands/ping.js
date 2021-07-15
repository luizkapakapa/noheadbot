module.exports = {
    name: 'ping',
    description: "idk",
    execute(message, args){
        message.channel.send('pong.');
    }
}