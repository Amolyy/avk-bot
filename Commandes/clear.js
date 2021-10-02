const Discord = require("discord.js");
const config = require("../config.json");
var prefix = config.prefix;

module.exports.run = (client, message, args) => {
    message.delete()
    if (!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) { return message.channel.send(new Discord.MessageEmbed()
        .setTitle("**Erreur**")
        .setDescription("**Vous n'eavez pas la permission.**")
        .setColor("RED")
        ); }
    if (!args[0]) { return message.channel.send(new Discord.MessageEmbed()
        .setTitle("Erreur")
        .setColor("RED")
        .setDescription('Vous devez spécifier un nombre de messages à supprimer !')); }
    else if (isNaN(args[0])) { return message.channel.send(new Discord.MessageEmbed
        .setTitle("Erreur")
        .setColor("RED")
        .setDescription('Veuillez spécifier un nombre !')); }                                                   
        message.channel.bulkDelete(args[0])
            .then((messages) => {
                message.channel.send(new Discord.MessageEmbed()
                    .setDescription(`**🗑 | **${messages.size}** messages ont été supprimés avec succès !**`));
              });
};

module.exports.help = {
    name: 'clear'
};