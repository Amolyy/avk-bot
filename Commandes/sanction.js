const Discord = require('discord.js')
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
const sanctionembed = new Discord.MessageEmbed()
.setColor('#00BDFF')
.setTitle("Sanction staff ->")
.setAuthor(config.Speudo, message.author.displayAvatarURL({dynamic: true}))
.setThumbnail(message.author.displayAvatarURL({dynamic: true}))
.addFields(
    { name: "Insulte = !warn @pseudo#0000 raison", value: '(P Assistant)'},
    { name: "Insulte grave = !tempmute 2h @pseudo#0000 raison", value: '(P Assistant(e)s)'},
    { name: "Mots interdits = !tempmute 10m si récidive 20m si récidive 60m si récidive 2h si récidive kick si récidive ban Perm.", value: " (P Assistant(e)s et Modérateur pour ban)"},
    { name: "Invitation discord (autre que dans le salon `│📡・publicités` = Ban perms (par vous-même sans commande) comme raison : Bannissement pour publicités discord autre que dans le salon publicités par VotrePseudoDiscord.", value: "(P Modérateurs)"},
    { name: 'Se venter = !warn @pseudo#0000 Votre raison de warn est : Vous vous vanter au prêt des autres.', value: " (P Assistant(e)s)"},
    { name: 'Dégrader les autres = Sois vous êtes de bonne humeur : !tempmute 5h Dégrade les autres. Ou si vous voulez le sanctionné plutôt fort alors : !tempban 5h Dégrade les autres ', value: '(P Assistant(e)s et Modérateur pour tempban)'},
    { name: 'Fause acusation = On retire les rôles. Comme s\'il venait de rejoindre le serveur il n\'y a plus accès pendant 10h ', value: '(P Administrateur (Pour les Assistant(e)s Et Modératrices/eurs nous demander.)'},
    { name: "Pour les abus de report c\'est un mute de 2j.", value: 'P Assistant(e)s'},
    { name: "Difamations = Ban perms. ", value: "(P Modérateur)"},
    { name: "Spam = !tempmute 1h.", value: "P Assistant(e)s"},
    { name: "Évidemment que si vous voulez mettre plus longtemps de temps de sanction vous pouvez dans la limite du raisonnable.", value: "Si des sanctions n'ont pas été citées dit le moi en mp."}
)

.setTimestamp()
.setFooter(message.author.username, message.author.displayAvatarURL({dynamic: true}));
message.channel.send(sanctionembed)
}

module.exports.help = {
    name:"sanction"
}