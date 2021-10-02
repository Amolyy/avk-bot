const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
message.delete()
var member  = message.mentions.users.first() || message.author;
const pdpEmbed = new Discord.MessageEmbed()
    .setAuthor("Photo demandee par :")
    .setColor("#00BDFF")
    .setDescription(message.author.tag)
    .setImage(member.avatarURL({dynamic: true}))
 
message.channel.send(pdpEmbed);
}

module.exports.help = {
    name: "pp"
}