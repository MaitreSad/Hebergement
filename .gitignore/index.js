const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = "$"

bot.on('ready', function() {
    console.log("I'm ready !");
});

bot.on('message', message => {
    if (message.content === prefix) {
        //message.reply('world !');
        if (message.content === '!hello') {}
    }

});

bot.on('guildMemberAdd', member => {
    member.createDM().then(channeL => {
        return channeL.send('**Salut bienvenue sur le serveur Light** ! **Si vous avez besoin daide hésiter pas a envoyer un message Priver aux fondateurs** https://discord.gg/sS8A2ky')
    }).catch(console.error)
});

bot.on('guildMemberRemove', member => {
    member.createDM().then(channeL => {
        return channeL.send('Merci detre passer sur le serveur Light a bientôt et bonne continuation https://discord.gg/sS8A2ky')
    }).catch(console.error)
});

bot.login(process.even.TOKEN) //tokenn
