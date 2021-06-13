// bu kod böyle değil farklı ama benzetmeye çalıştım :)
const Discord = require('discord.js')

exports.run = async (client ,message ) => {
  if(message.channel.id !== "kullanılabilecek kanal idsi")return message.channel.send(new Discord.RichEmbed() .setDescription(`<#hangi kanalda yapılsın o kanal id> Burada yapabilirsin :x:`).setAuthor(message.author.tag ,message.author.avatarURL).setColor("PURPLE")).then(m => m.delete(5000));
 const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
      var taguye = message.guild.members.filter(member => member.user.username.includes("tag girilecek örnek : ⚝")).size
  ///buralar duzenlencek o kadar ////
  let count = 0;
  let kayıtszorl = ''
  let erkekrol = ''
  let kadinrol = ''
 let boostrol = ''
 
   for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  let kayıtsız = message.guild.members.filter(r=>r.roles.has(kayıtszorl)).size 
  let boost = message.guild.members.filter(r=>r.roles.has(boostrol)).size 
let erkek = message.guild.members.filter(r=>r.roles.has(erkekrol)).size
let kadin = message.guild.members.filter(r=>r.roles.has(kadinrol)).size
    
const eren = new Discord.RichEmbed()

.setDescription(`
**Kişi Sayısı** : **${message.guild.memberCount}**
**Aktif Üye** : **${message.guild.members.filter(m => m.presence.status !== "offline").size}**
**Sesli Üye** : **${count}**
**Booster Üye** : **${boost}**
**Tagli Üye** : **${taguye}**
**Kız Üye** : **${kadin}**
**Erkek Üye** : **${erkek}**
**Kayıtsız Uye** : **${kayıtsız}**
`)
.setImage('https://cdn.discordapp.com/attachments/693539816847048755/704698799179825162/f5261bc883840c1b7e35016749df2ce6.gif')
message.channel.send(eren)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucubilgi',],
  kategori: "AVATAR KOMUTLARI",
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'sunucu hakkında blgi verir',
  usage: ''
};