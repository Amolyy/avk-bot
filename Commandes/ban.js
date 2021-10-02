const Discord = require("discord.js");
const config = require("../config.json");
var prefix = config.prefix;

function wait(ms){
    var start = new Date().getTime()
    var end = start
    while(end < start + ms) {end = new Date().getTime();}
}

module.exports.run = async (client, message, args) => {
    message.delete()
    var user = message.mentions.users.first();
    var reason = args.join(" ").slice(22);

    if (!message.guild.member(message.author).hasPermission('BAN_MEMBERS')) {return message.channel.send(new Discord.MessageEmbed()
        .setDescription("Vous devez avoir la permission : 'BAN MEMBERS' pour utiliser cette commande.")
        .setTitle("Erreur")
        .setColor("RED")
        .setTimestamp()
        ); }
    if(!user) {const fail = await message.channel.send(new Discord.MessageEmbed()
        .setTitle("Erreur")
        .setDescription("Vous devez mentionnez l'utilisateur à bannir.")
        .setColor("RED")
        .setTimestamp()
    ); wait(3000); fail.delete(); return}
    if(!reason) {const fail = await message.channel.send(new Discord.MessageEmbed()
        .setDescription("Quelle est la raison du bannissement ?")
        .setTitle("Erreur")
        .setColor("RED")
        .setTimestamp()
        ); wait(3000); fail.delete(); return}

    const kickchannel = new Discord.MessageEmbed()
    .setAuthor('L\'utilisateur a été Ban', '')
    .setColor("RED")
    .addField('Pour la raison suivante :', `${reason}`, true)
    .setFooter(`A été bannie par ${message.author.tag}`, message.author.displayAvatarURL());

    message.channel.send(kickchannel)

    message.guild.member(user).ban(reason)
};

module.exports.help = {
    name: 'ban'
};