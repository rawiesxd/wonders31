const Discord = require('discord.js');
const db = require("quick.db")
const ms = require('ms');
exports.run = async (award, message, args) => {


   
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.send("<:neutralno:910935142707646484> Bu komutu kullanmaya yetkin yok!");
            return;
          }
    
    let myteria = args[0];
    let kazanan = args[1];
    let odul = args[2];
    let zaman = args[3];
    if(!myteria) return message.channel.send("<:neutralno:910935142707646484> Lütfen geçerli bir mesaj kimliği belirtin! (Kullanım: <MessageID> <WinnersAmount> <Prize> <TimeValue>)")
    if(!kazanan) return message.channel.send("<:neutralno:910935142707646484> Geçerli bir kazanan sayısı belirtmediniz! (Kullanım: <MessageID> <WinnersAmount> <Prize> <TimeValue>)")
    if(!odul) return message.channel.send("<:neutralno:910935142707646484> Bir ödül belirtmediniz! (Kullanım: <MessageID> <WinnersAmount> <Prize> <TimeValue>)")
    if(!ms(zaman) && zaman) return message.channel.send("<:neutralno:910935142707646484> Geçerli bir saat biçimi kullanmadınız! (Kullanım: <MessageID> <WinnersAmount> <Prize> <TimeValue>)")
            award.giveawaysManager.edit(gweep, {
                newWinnerCount: kazanan,
                newPrize: odul,
                addTime: ms(zaman)
            }).then(() => {
                message.channel.send("<:neutralyes:910935020120735806> Başarıyla! Çekiliş düzenlendi!");
            }).catch((err) => {
                message.channel.send("<:neutralno:910935142707646484> O çekilişi bulamadım.");
            });
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'çekiliş-düzenle',
  description: '',
  usage: ''
};