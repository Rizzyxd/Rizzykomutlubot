const Discord = require('discord.js');//
const client = new Discord.Client();//
const ayarlar = require('./ayarlar.json');//
const chalk = require('chalk');//
const moment = require('moment');//
var Jimp = require('jimp');//
const { Client, Util } = require('discord.js');//
const fs = require('fs');//
const db = require('quick.db');//
const express = require('express');//
require('./util/eventLoader.js')(client);//
const path = require('path');//
const snekfetch = require('snekfetch');//
const ms = require('ms');//
Discord.Constants.DefaultOptions.ws.properties.$browser = "Discord Android"
//

var prefix = ayarlar.prefix;//
//
const log = message => {//
    console.log(`${message}`);//
};

client.commands = new Discord.Collection();//
client.aliases = new Discord.Collection();//
fs.readdir('./komutlar/', (err, files) => {//
    if (err) console.error(err);//
    log(`${files.length} komut yüklenecek.`);//
    files.forEach(f => {//
        let props = require(`./komutlar/${f}`);//
        log(`Yüklenen komut: ${props.help.name}.`);//
        client.commands.set(props.help.name, props);//
        props.conf.aliases.forEach(alias => {//
            client.aliases.set(alias, props.help.name);//
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};



client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }

    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });
client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});
client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);
client.on("ready", () => {
    client.channels.cache.get("802185350596001824").join();
  })
  // BOOST BASANA MESAJ
  client.on("guildMemberUpdate", async (client, OLD, NEW) => {
    if(!OLD.premiumSince && NEW.premiumSince) {
    client.channels.cache.get('kanalid').send(`${NEW.user.username} Adlı Kullanıcı Sunucumuza Boost Bastı! Teşekkür Ederiz <3`)
    }
    })
    // BOOST BASANA MESAJ^^
    ///////////////////////////////////////////////////////////////////
    // Yasaklı tag komutunu yapmaya üşendim o yüzden kısa bir şey yaptım buyrun tagları koy geldiği gibi banned xd.
    client.on('message', msg => {
        const mention = msg.member.user.username.includes('YASAKLI TAG');
        if(mention){
          msg.member.ban()
          return;
        }
        });
        // Bu kodu normalda kimseye paylaşmam ama artık kod gizlimekden sıkılmadınızmı kk  emek veriyorsunuz biliyorum yayın kullansın millet nolcak:=)
        client.on("messageUpdate", async (oldMessage, newMessage) => {
            if (newMessage.author.bot || newMessage.channel.type == "dm") return;
                let kanal = 'log kanal id' //log kanalının idsini yazınız //
              if (!kanal) return;
            if (oldMessage.content == newMessage.content) return;
            const embed = new Discord.MessageEmbed()
            .setColor('#8A2BE2')
             .setTimestamp()
            .setAuthor("Mesaj Düzenlendi")
            .setDescription(`Mesajı düzenlenen kullanıcı : ${oldMessage.author} | (**${oldMessage.author.id}**) \n Mesajın düzenlendiği kanal : ${oldMessage.channel} | (**${oldMessage.channel.id}**)`)
            .addField('Eski mesaj : ', `** ${oldMessage.content} **`)
            .addField('Yeni mesaj : ', `** ${newMessage.content} **`)
            client.channels.cache.get(kanal).send(embed) 
            })
            client.on("messageDelete", async (message) => { 
            if (message.author.bot || message.channel.type == "dm") return;
                let kanal = 'log kanal id' //log kanalının idsini yazınız
              if (!kanal) return;
            const embed = new Discord.MessageEmbed()
            .setColor('#8A2BE2') 
             .setTimestamp()
            .setAuthor("Mesaj Silindi")
            .setDescription(`Mesajı silinen kullanıcı : ${message.author} | (**${message.author.id}**) \n Mesajın silindiği kanal : ${message.channel} | (**${message.channel.id}**)`)
            .addField('Silinen mesaj : ', `** ${message.content} **`)
            client.channels.cache.get(kanal).send(embed) 
            })
            