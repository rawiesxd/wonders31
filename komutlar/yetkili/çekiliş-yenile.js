const ms = require('ms');
const Discord = require('discord.js');
exports.run = async (client, message, args) => {
 if(!message.member.permissions.has('ADMINISTRATOR')) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`<:neutralno:910935142707646484> Ne yazık ki bu komutu kullanmaya yetkin yok.`)
    message.channel.send(embed);
    return;
  }

let messageID = args[0]
    if(!messageID){
        return message.channel.send('<:neutralno:910935142707646484> bir çekiliş kimliği **belirtmelisin!**');
    }
client.giveawaysManager.reroll(messageID, {
    messages: {
        congrat: ":tada: Yeni kazanan(lar): {winners}! Tebrikler!",
        error: "Geçerli katılım yok, kazanan seçilemez!"
                    }   
}).catch((err) => {
    message.channel.send("<:neutralno:910935142707646484> `"+ messageID +"` için çekiliş bulamadım, lütfen kontrol edin ve tekrar deneyin");
})
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['reroll'],
  permLevel: 0
};

exports.help = {
  name: 'çekiliş-yenile',
  description: 'çekiliş',
  usage: 'çekiliş-tekrar'
};