const Discord = require("discord.js");
const db = require ('quick.db')

exports.run = (client, message, args) => {
if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("<:neutralno:910935142707646484> Yeterli yetkin yok!")
  let kisi = args[0]


  if(!kisi) return message.channel.send("<:neutralno:910935142707646484> Banını kaldırmak istediğiniz üyenin id sini yazınız.")
  
  message.guild.members.unban(kisi);
  const ban = new Discord.MessageEmbed()
  .setDescription(`<:neutralyes:910935020120735806> <@${kisi}>, Adlı ${kisi} İdli kişi ${message.author} Tarafından Banı kaldırıldı.`)
  .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({dynamic: true}))
  .setColor(client.ayarlar.embedRenk)
  .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({dynamic: true}))
  message.channel.send(ban);

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};

exports.help = {
  name: 'unban',
  description: 'Kişinin banını açar.',
  usage: 'w!unban'
}