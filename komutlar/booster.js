const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix

exports.run = async (client, message, args) => {
let booster = message.guild.roles.cache.get("booster rol id")
if(!booster) return message.channel.send("Böyle Bir rol Bulanamadı!")
  if(!message.member.roles.cache.has(booster.id)) return message.reply("Bu Komutu Kullanabilmek İçin Booster Rolüne Sahip Olmalısın!").then(codework => codework.delete({timeout: 5000}))

let isim = args.slice(0).join(' ');
if(!isim) return message.reply(`Lütfen bir kullanıcı adı giriniz!`)
if(isim.length > 32) return message.reply(`Lütfen **32** Karakteri Geçmeyen Bir İsim Giriniz!`)
  
message.guild.members.cache.get(message.author.id).setNickname(isim)
message.channel.send(`Başarılı! kullanıcı adın \`${isim}\` olarak değiştirildi.`)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['isimdegistir'],
    permLevel: 0
}

exports.help = {
    name: 'isimdeğiştir',
    description: 'boosterlerın isim değiştirmesini sağlar',
    usage: 'isimdeğiştir <kullanıcı adı>'
}