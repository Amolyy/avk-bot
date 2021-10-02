const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
message.delete()
const attachment = new Discord.MessageAttachment('./sound/y2mate.com - Ziak  Raspoutine Prod Jango.mp3')
message.channel.send(``, attachment);
}


module.exports.help = {
    name:"music"
}