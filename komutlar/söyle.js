exports.run = (client, message) => {
    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();
    const voiceChannel = message.member.voiceChannel;
   
    if (!voiceChannel) return message.channel.send(`İlk Önce Sesli Bir Kanala Gir!`)
    google(`${args.slice(' ')}`, 'tr', 1).then(url => {
    message.member.voiceChannel.join().then(connection => {
    message.channel.send(`${args.slice(' ')} Adlı Mesaj Sesli Olarak Söyleniyor.`)
    connection.playStream(url).on("end", () => {
    connection.disconnect();
   
    })
    })
    })
   };

   exports.conf = {
       enabled: true,
       guildOnly: false,
       aliases: [],
       permLevel: 0
   };
 
   exports.help = {
       name: 'söyle',
       description: 'Bota yazdığınız şeyi sesli mesaj olarak söyletir',
       usage: 'söyle <mesaj>'
   };
   // kodu çalma mq kullan die ztn altyapıyı yapıyorum çalan veya yayılma amacında o kişini hakkında işlem yapılacaktır.