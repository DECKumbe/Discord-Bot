const http = require('http');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000);

//CODIGO DEL BOT :D
const Discord = require("discord.js");
const client = new Discord.Client();
const dyron = require("./dyron.json")
const number2Words = require('number-to-words');
const prefix = 'd.';

client.on("ready", () => {
   console.log("Sistema listo, a sus ordenes jefe");
   client.user.setActivity("Alice 1.5 By Dyron", {type: 'STREAMING', url: 'https://www.twitch.tv/dyronscript'});
});  
 client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', '💬│general');
  channel.send("Denle una cálida bienvenida a " +member+ " que se acaba de unir a nuestra comunidad, #work 4 ever");
});
client.on("message", (message) => {
  let prefix = 'd.'
  if(message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase
  
  
  //CANAL DE VOZ  EN MANTENIMIENTO
client.on('message', message => {
  
  if (!message.guild) return;

  if (message.content === 'Alice, canal de voz') {
    
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.channel.send('A la orden');
        })
        .catch(console.log);
    } else {
      message.reply('Necesito que se una a un canal de voz');
    }
  }
  });
  //CANAL DE VOZ
  //DESCONECTAR CANAL DE VOZ
  if (message.content === 'Alice, retirate') { 
    let Canalvoz = message.member.voiceChannel;
    if (!Canalvoz) {
        message.channel.send('No estoy conectada a un canal de voz');
    } else {
        message.channel.send('A la orden').then(() => {
        Canalvoz.leave();
        }).catch(error => message.channel.send(error));
    }   
  }
    //DESCONECTAR CANAL DE VOZ

  //AUDIO
  
  //AUDIO
  //PING
  if (message.content.startsWith("ping")) {
   let ping = Math.floor(message.client.ping);
   message.channel.send('`Latencia de '+ping+' ms.`'); 
  //PING
    
  //BIENVENIDA
   
   //BIENVENIDA
    
  }
  //REINICIO DE BOT
   if( message.content == "d.reset" && message.author.id == "193860633769279488" ) {
    message.channel.send("Reiniciando sistemas jefe.");
    return setTimeout(function(){
      message.channel.send("Sistemas reiniciados Señor.");
      setTimeout(function(){
        eval("Reiniciando, un momento.");
      },1000);
    },1000);
  }
  //REINICIO DE BOT
  
  //AVATAR
  if(message.content.startsWith ("avatar")){
    let usuario = message.mentions.members.first() || message.member;
    let embed = new Discord.RichEmbed()
    embed.setColor("RANDOM")
    embed.setAuthor(message.author.username, message.author.avatarURL)
    embed.setDescription(`Avatar de ${usuario.user.username}`)
    embed.addBlankField(true)
    embed.setImage(usuario.user.displayAvatarURL)
    embed.addBlankField(true)
    embed.setFooter("The Outsiders", client.user.avatarURL)
    return message.channel.send(embed)
}
  //AVATAR  
  
  if (!message.guild) return;
   if(message.content.startsWith("opcion.ban")) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.ban('Baneado por el señor Dyron').then(() => {
         message.channel.send(`Usuario ${user.tag} ha sido banead@ del servidor`);
        }).catch(err => {
          message.channel.send('`Algo ha ocurrido con el sistema de baneos señor.`');
          // Log the error
          console.error(err);
        });
      } else {
        message.channel.send('That user isn\'t in this guild!');
      }
    } else {
      message.channel.send('`No es posible banear a ese usuario Señor`');
    }
  }

  
 
  if( message.content == "anuncio" && message.author.id == "193860633769279488" ) {
   message.channel.send("@everyone Dyron tiene algo que decir, pongan atención");
  }
  if(message.content.startsWith("Luis")){
     message.reply("SpikyWork ya murió tío :v");
  }
  if(message.content.startsWith("luis")){
     message.channel.send("Cuando abre tu server nmms van 20 años");
  }  
  if(message.content == "Alice" && message.author.id == "193860633769279488"){
    message.channel.send("¿Qué se le ofrece?");
  }
  if(message.content == "Yo soy inevitable" && message.author.id == "193860633769279488"){
    message.channel.send("Usted es inevitable Sr.Dyron");  
  }
  if(message.content.startsWith("#Work")){
   message.reply("Prison ya está casi terminado");    
  }
  if(message.content.startsWith("Paica")){
   message.channel.send("Señor, esa cosa es inútil e inofensiva"); 
  }
  if(message.content.startsWith("Cup")){
   message.reply("Si 2+2 = 5, por el culo te la inco?"); 
  }
  if(message.content.startsWith("Lukas")){
   message.reply("El pinga corta");
  }
  if(message.content.startsWith("lukas")){
   message.reply("El pinga corta");
  }
  if(message.content.startsWith("cup")){
   message.reply("Si 2+2 = 5, por el culo te la inco?"); 
  }
  if(message.content.startsWith("#work")){
   message.channel.send("Ya me tienen hasta la puta madre");
  }
  if(message.content.startsWith("Inv")){
    const embed = new Discord.RichEmbed()
       .setTitle("The Outsiders")
       .addBlankField(true)
       .setAuthor(message.author.username, message.author.avatarURL)
       .setDescription("Link de invitación permanente")
       .addField("https://discord.gg/7DwzBb9", "The Outsiders Team")
       .addBlankField(true)
       .setTimestamp()
       .addBlankField(true)
       .setFooter("Invita a tus amigos para crecer como comunidad", client.user.avatarURL)
       message.channel.send(embed);
  }
  if (message.content.startsWith("Info")){
    const embed = new Discord.RichEmbed()
        .setTitle("The Outsiders")
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor(0x00AE86)
        .setDescription("Canal de ocio/variedad para charlar y pasar un buen rato.")
        .setFooter("By The Outsiders Team", client.user.avatarURL)
        .setThumbnail(message.author.avatarURL)
        .setTimestamp()
        .setURL("https://discord.gg/7DwzBb9")
        .addField("Contenido para todos!(literalmente)",
          "Contenido explícito única y exclusivamente en canales NSFW, de lo contrario habrá sancion.")
        .addField("Outsiders:", "Si no tienes roles puedes elegir uno en el canal de roles, debes solicitarlo a un staff (Los unicos miembros del equipo que pueden asignar roles son Encargados y Dueños", true)
        .addField("Sorteos!", "Hacemos sorteos cada cierto tiempo!, anímate a participar, puede que seas un ganador...")
        .addField("Staff", "De vez en cuando reclutamos usuarios aptos y maduros para asumir el cargo de Ayudante y/o Encargado, si crees que eres capaz, atiende al llamado y únete al equipo")
        message.channel.send(embed);
}

  //SECCIÓN DE MÚSICA


    //FIN SECCIÓN MÚSICA
});
client.login(dyron.token); 
