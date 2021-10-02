const Discord = require('discord.js');
const { on } = require('events');
const fs = require('fs');
const config = require('./config.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();
var prefix = config.prefix;

fs.readdir('./Commandes/', (error, f) => {
    if (error) { return console.error(error); }
        let commandes = f.filter(f => f.split('.').pop() === 'js');
        if (commandes.length <= 0) { return console.log('Aucune commande trouvée !'); }

        commandes.forEach((f) => {
            let commande = require(`./Commandes/${f}`);
            console.log(`${f} commande chargée !`);
            client.commands.set(commande.help.name, commande);
        });
});

fs.readdir('./Events/', (error, f) => {
    if (error) { return console.error(error); }
        console.log(`${f.length} events chargés`);

        f.forEach((f) => {
            let events = require(`./Events/${f}`);
            let event = f.split('.')[0];
            client.on(event, events.bind(null, client));
        });
});

client.login(process.env.TOKEN);


client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "bonjour"){
      message.channel.send('Bonjour !')
    }
  })
  
  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "bonsoir"){
      message.channel.send('Soir Bon !')
    }
  })
  
  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "salut"){
      message.channel.send('Salut à toi !')
    }
  })
  
  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "ca va ?"){
      message.channel.send('Bien et vous ? ')
    }
  })
  
  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "ça va ?"){
      message.channel.send('Bien et vous ? ')
    }
  })
  
  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "bien"){
      message.channel.send('<a:valid:893040373272805406>')
    }
  })

  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "chocolatine"){
      message.channel.send('<:no:886271559352848384> C\'est pain au chocolat !')
    }
  })

  client.on('message', message =>{
    if(!message.guild || message.author.bot == true) return;
    if(message.content.toLowerCase() == "pain au chocolat"){
      message.channel.send('<:no:886271559352848384> Chocolatine !')
    }
  })

  ///anti-insulte :

client.on("message", async message => {
  let insulte = ['fdp', 'zizi', 'ntm', 'connard', 'ftg', 'pute', 'putain', 'nazi', 'negro', 'negre', 'bougnoul', 'feuj', 'geule', 'nique', 'salope', 'PD', 'batard', 'putin', 'enfoiré', 'connare', 'fils de pute', 'bâtard', 'bicot', 'conasse', 'couille molle', 'débile', 'ducon', 'dugland', 'enculé', 'fachiste', 'imbécile', 'lavette']
  let foundInText = false;

  for(var i in insulte) {
    if(message.content.toLocaleLowerCase().includes(insulte[i].toLowerCase())) foundInText = true;
  }

  if (foundInText) {
    message.delete()
    message.reply('Votre infraction va être transmise à un Modérateur du discord.')
          let Modération = client.channels.cache.get('886196085096329256')
      Modération.send(new Discord.MessageEmbed()
      .setDescription(`L'utilisiteur à fait une infraction ! Voici l'infraction : **${message.content}**, L'infraction à été commise par **${message.author.username}**`)
      .setColor("RED")
      .setTitle("Modération"))
  }})

  ///anti-everyone :
const userEveryone = new Map()
  client.on('message', async message => {
    if (message.author.bot) return

    if(message.mentions.everyone) {
      if(userEveryone.has(message.author.id)){
        const userData = userEveryone.get(message.author.id);
        let {numberEveryoneSent} = userData;
        numberEveryoneSent += 1;
        userData.numberEveryoneSent = numberEveryoneSent
        userEveryone.set(message.author.id, userData)
        console.log(userData)
        if (numberEveryoneSent >= 2) {
          message.delete();
          message.reply('Votre infraction va être transmise à un Modérateur du discord.')
          let Modération = client.channels.cache.get('886196085096329256')
        Modération.send(new Discord.MessageEmbed()
        .setDescription(`L'utilisiteur à fait une infraction ! Voici l'infraction : **${message.content}**, L'infraction à été commise par **${message.author.username}**`)
        .setColor("RED")
        .setTitle("Modération"))
        }
        if (numberEveryoneSent === 3) {
          message.channel.send((new Discord.MessageEmbed()
          .setDescription(`L'utilisateur a été kick pour abus de mention.`)
          .setColor("RED")
          .setTitle("Modération")))
          message.guild.member(message.author.id).kick({reason: 'Abuse de la mention everyone'})
          let Modération = client.channels.cache.get('886196085096329256')
        Modération.send(new Discord.MessageEmbed()
        .setDescription(`L'utilisateur **${message.author.username}** à été kick par le bot. Infraction: Abus de mention.`)
        .setColor("RED")
        .setTitle("Modération"))
        }
      }
      else {
        userEveryone.set(message.author.id, {
          numberEveryoneSent: 1
        });
        setTimeout(() => {
          userEveryone.delete(message.author.id)
        }, 20000)
      }
    }
})

client.on('messageDelete', async message => {
 let logdelete = client.channels.cache.get('886190748968562734')
  const embedlogdelete = new Discord.MessageEmbed()
  .setTitle("Log")
  .setColor('#5c16c7')
  .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
  .setDescription(`**Message suprimé :** ${message.content} \n\n **Channel :** ${message.channel} \n\n **De :** ${message.author.username}`)
  .setTimestamp()
  logdelete.send(embedlogdelete)
})

client.on('roleUpdate', async (oldRole, newRole) => {
  let logrole = client.channels.cache.get('886190748968562734')
  const embedlogrole = new Discord.MessageEmbed()
  .setTitle("`Log`")
  .setColor('#5c16c7')
  .setAuthor('Rôle update')
  .addField('Rôle mis à jour :', oldRole.name)
  logrole.send(embedlogrole)
})

client.on('roleCreate', async role => {
  let logrolecreate = client.channels.cache.get('886190748968562734')
  const embedlogrolecreate = new Discord.MessageEmbed()
  .setTitle("`Log`")
  .setColor('#5c16c7')
  .setAuthor('Rôle Crée !')
  .addField('Rôle Crée :', role.name)
  logrolecreate.send(embedlogrolecreate)
})

client.on('roleDelete', async role =>{
  let logroledelete = client.channels.cache.get('886190748968562734')
  const logdeleteembed = new Discord.MessageEmbed()
  .setTitle("`Log`")
  .setColor('#5c16c7')
  .setAuthor('Rôle Suprimé !')
  .addField('Rôle Suprimé :', role.name)
  logroledelete.send(logdeleteembed)
})

client.on('inviteCreate', async invite => {
  let loginvite = client.channels.cache.get('886190748968562734')
  const loginviteembed = new Discord.MessageEmbed()
  .setTitle("`Log`")
  .setColor('#5c16c7')
  .setAuthor('Invitation postée et suprimée.')
  .addField('Invitation :', `discord.gg/${invite.code}`)
  .setAuthor('Invitation crée ', invite.guild.iconURL({dynamic: true}))
  loginvite.send(loginviteembed)
})
client.on('inviteDelete', async invite => {
  let loginvitedelete = client.channels.cache.get('886190748968562734')
  const loginvitedeleteembed = new Discord.MessageEmbed()
  .setTitle("`Log`")
  .setColor('#5c16c7')
  .setAuthor('Invitation suprimée.')
  .addField('Invitation :', `discord.gg/${invite.code}`)
  .setAuthor('Supression d\'une invitation', invite.guild.iconURL({dynamic: true}))
  loginvitedelete.send(loginvitedeleteembed)
})

client.on('messageReactionAdd', async(reaction, user) => {
  const message = reaction.message;
  const member = message.guild.members.cache.get(user.id);

  if(user.bot) return

  if(
    ["📄", "📪"].includes(reaction.emoji.name)
  ) {
    switch(reaction.emoji.name) {

      case "📄":
      if (reaction.message.channel.id !== "886190748968562734") return;

      reaction.users.remove(user);

      let username = user.username;
      let categoryID = "886190749304127494";
      let channel = await message.guild.channels.create(`Ticket de ${username}`, {type: 'text', parent: message.guild.channels.cache.get(categoryID)})
      .catch(err => {
        message.channel.send('Erreur. [MessageReactionAdd')
      })

      channel.updateOverwrite(message.guild.roles.everyone, {'VIEW_CHANNEL': false})
      channel.updateOverwrite(member, {
        'VIEW_CHANNEL': true,
        'SEND_MESSAGES': true,
        'ADD_REACTIONS': true
      });
      channel.updateOverwrite(message.guild.roles.cache.find(role => role.name == 'Staff test ➨'), {'VIEW_CHANNEL': true});

      var embed1 = new Discord.MessageEmbed()
      .setTitle('Ticket !')
      .setDescription("Expliquez votre problème au staff.")

      channel.send(`${member}`)
      channel.send(embed1).then(async msg => msg.react('📪'))

      let logchannel = message.guild.channels.cache.find(c => c.name == '🧠┃logs')
      if(!logchannel) return
      logchannel.send(new Discord.MessageEmbed()
      .setDescription(`Un membre à créer un ticket. \n Voici le salon ${channel}`)
      .setTitle("Ticket !")
      .setColor('RANDOM'))
      break;

      case "📪":

      if (!message.channel.name.startsWith('ticket')) return;
      if (!member.hasPermission('ADMINISTRATOR')) return;

      message.channel.delete()

      break;
    }
  }
})