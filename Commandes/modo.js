const Discord = require('discord.js');
const config = require('./config.json');
const embed = new Discord.MessageEmbed()

module.exports.run = async(client, message, args) => {
	if(!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) return message.reply(embed
		.setTimestamp()
		.setFooter(message.author.username, message.author.displayAvatarURL({dynamic: true}))
		.setAuthor(config.Speudo, message.author.displayAvatarURL({dynamic: true}))
		.setColor("RED")
		.setDescription("**<a:emoji:886362535828267008> Vous n'êtes pas staff, vous ne devez pas voir les commandes de Modération.**")
		.setTitle("Erreur de permission !"))
	message.delete()
const modoEmbed = new Discord.MessageEmbed()
	.setColor('#00BDFF')
	.setTitle('<a:emoji:886362535828267008> `・Liste des commandes de modération.`')
	.setAuthor(config.Speudo, message.author.displayAvatarURL({dynamic: true}))
	.setThumbnail(message.author.displayAvatarURL({dynamic: true}))
	.addFields(
    { name: '`💨` ┃ Clear', value: '*(Pour supprimer des messages.)*' },
	{ name: '`💬` ┃ Msg', value: '*(Pour envoyer un message avec le bot.)*' },
    { name: '<:moddiscord:886269902728593468> `┃ Kick`', value: '*(Pour kick.)*' },
    { name: '<a:860834254278754314:886231254863872021> `┃ Ban`', value: '*(Pour ban.)*' },
	{ name: '<:moddiscord:886269902728593468> `┃ Warn`', value: 'Commande: !warn raison, le bot sera bientôt capable de warn les gens avec une commande qui seras mise à votre disposition. '},
	{ name: '<:discord:886269902741180457> `┃ Sanctions`', value: 'Pour voir toutes les sanctions à appliquer pour différentes situations fait la commande `*sanction`'}

    )
	.setTimestamp()
    .setFooter(message.author.username, message.author.displayAvatarURL({dynamic: true}));
    message.channel.send(modoEmbed)
}

module.exports.help = {
    name:"mod"
}