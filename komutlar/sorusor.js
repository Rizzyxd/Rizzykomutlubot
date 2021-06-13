// Biraz gülelim eğlenelim yani 
const Discord = require('discord.js') 
const cevaplar = [
  "Evet", 
    "Hayır", 
    "Muhtemelen", 
    "İmkansız", 
    "Ne yazık ki hayır", 
    "Maalesef",  
    "Tabii ki", 
    "Belki de", 
    "Şimdi söylemeyeceğim", 
  "Odaklan ve tekrar sor",
  "yani",
  "olamaz",
  "hmm",
  "bu soruya bir şey diyemem",
  "sjsjsjs",
  "31",
  "imana gel putperest",
  "banned",
  "ab düşünmem lazım"
];
exports.run = function(client, message, args) {
    var soru = args.join(' ');
    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
if(!soru) return  message.channel.send('Bana Sormak İstediğin Soruyu Yazarmısın?')
    else message.reply(cevap)
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0    
  };  
  exports.help = {
    name: 'sorusor'
    
  };