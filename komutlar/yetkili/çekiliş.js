const ms = require('ms')
const Discord = require('discord.js');
exports.run = async (client, message, args, prefix) => { 
 if(!message.member.permissions.has('ADMINISTRATOR')) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`Ne yazık ki bu komutu kullanmaya yetkin yok.`)
    message.channel.send(embed);
    return;
  }
    let giveawayChannel = message.mentions.channels.first();
    if(!giveawayChannel){
        return message.channel.send(`<:neutralno:910935142707646484> Lütfen bir **kanal süre**, **kazanan** ve **ödül** belirtin!\nÖrnek kullanım: \`w!çekiliş-başlat #kanal 1h 1 Nitro Classic\``);
    }

    let giveawayDuration = args[1];
    if(!giveawayDuration || isNaN(ms(giveawayDuration))){
        return message.channel.send(`<:neutralno:910935142707646484> Lütfen bir **kanal süre**, **kazanan** ve **ödül** belirtin!\nÖrnek kullanım: \`w!çekiliş-başlat #kanal 1h 1 Nitro Classic\``);
    }

    let giveawayNumberWinners = args[2];
    if(isNaN(giveawayNumberWinners)){
        return message.channel.send(`<:neutralno:910935142707646484> Lütfen bir **kanal süre**, **kazanan** ve **ödül** belirtin!\nÖrnek kullanım: \`w!çekiliş-başlat #kanal 1h 1 Nitro Classic\``);
    }

    let giveawayPrize = args.slice(3).join(' ');
    if(!giveawayPrize){
        return message.channel.send(`<:neutralno:910935142707646484> Lütfen bir **kanal süre**, **kazanan** ve **ödül** belirtin!\nÖrnek kullanım: \`w!çekiliş-başlat #kanal 1h 1 Nitro Classic\``);
    }

 client.giveawaysManager.start(giveawayChannel, {
            time: ms(giveawayDuration),
            prize: giveawayPrize,
            winnerCount: giveawayNumberWinners,
            hostedBy: message.author,
            messages: {
            giveaway: "🎉 **ÇEKİLİŞ BAŞLADI!** 🎉",
                giveawayEnded: "🎉 **ÇEKİLİŞ SONLANDI** 🎉",
                timeRemaining: "Kalan süre: **[{duration}](https://discord.gg/)**!",
                inviteToParticipate: "Katılmak için 🎉 tepkisine tıklayın!",
                winMessage: "🎉 Tebrikler, {winners}! **{prize}** ödülünü kazandınız!",
                embedFooter: "Çekiliş",
                noWinner: "bir kazanan belirlenemedi!",
                hostedBy: "Çekiliş'i başlatan: {user}",
                winners: "kazananlar",
                endedAt: "Bitiş tarihi",
units: {
                    seconds: "Saniye",
                    minutes: "Dakika",
                    hours: "Saat",
                    days: "Gün",
                    pluralS: false 
                }
            }
        });

  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
   aliases: ['çekiliş-başlat', 'start'],
  permLevel: 0
};

exports.help = {
  name: 'çekiliş-yap',
  description: 'çekiliş',
  usage: 'çekiliş-yap'
};