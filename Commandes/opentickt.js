const Discord = require('discord.js')

module.exports.run = async(bot,message,args) => {

    function wait(ms){
        var start = new Date().getTime()
        var end = start
        while(end < start + ms) {end = new Date().getTime();}
    }


    message.delete()
    if(!message.member.hasPermission("ADMINISTRATOR")) return

    let OpenTicket = new Discord.MessageEmbed()
    .setDescription('Appuyez sur `📄` pour ouvrir un ticket')

    let myGuild = bot.guilds.cache.get('886190748796583986');
    let SendChannel = myGuild.channels.cache.get('886190748968562734')
    SendChannel.send(OpenTicket)
    .then(msg => msg.react('📄'))

}

module.exports.help = {
    name: "ticket"
}