// bunu nie ekledim bende bilmiyorum XD
  
const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username}` , client.user.avatarURL())
.setColor('RED')
.setDescription(`Discord'un Topluluk Kuralları Ve Sunucumuzun **Uyulması Zorunlu Olan** Kuralları
[Discord Topluluk Kuralları](https://discord.com/1299)
 Diğer kişileri taciz edici eylemler başlatma, onlara dahil olma veya onları teşvik etme.
 Nefret söylemi içeren sunucular başlatma, bu sunucuları destekleme veya koordine etme
Diğer kişileri şiddet uygulamak veya zarar vermekle tehdit etme.
Kullanıcı engellemelerini veya sunucu yasaklarını aşmaya çalışma.
Diğer kullanıcılara virüs veya kötü amaçlı yazılım gönderme.
 İçinde yetişkin içerikleri bulunan kanallara NSFW etiketi eklemen gerekir.
 Reşit olmayan kişileri hiçbir şekilde cinselleştiremezsin.
 İntihar veya kendine zarar vermeyi yücelten ya da destekleyen içerikleri paylaşamazsın.
Sadistik vahşet veya hayvan zulmü içeren görselleri paylaşamazsın.
Korsancılığa maruz kalmış yazılımların veya çalınmış hesapların hack'lenmesi, crack'lenmesi ya da dağıtımıyla ilgili içerikleri tanıtamaz, dağıtamaz veya bu içeriklere erişim sağlayamazsın.
Herhangi bir yasadışı davranışı teşvik etmemeli, desteklememeli veya bu tarz davranışlarda bulunmamalısın. 
`)
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3,
  kategori: `Geliştirici`
};

exports.help = {
  name: 'rules',
  description: '[Admin Komutu]',
  usage: '!bakım-mod aç'
};