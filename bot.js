/*
bot.js
Version History:
1.0 - used key word "ping" to talk to the bot and bot would respond with pong
1.1 - still keyword of ping to get a response, responses are now on a switch basis where a random number generator
      would decided the respone
2.0 - Users "activate" the bot when the bot is mentioned, random number generator still used to select response
*/

const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(auth.token);
client.on('message', message => {
    if (message.isMentioned(client.user)) {       
            var trig = Math.floor(Math.random() * Math.floor(23));
            switch (trig) {
                case 0:
                    message.reply('Your first mistake was thinking I fear death');
                    break;
                case 1:
                    message.reply('FEED ME');
                    break;
                case 2:
                    message.reply('May the Furb replicate eternal');
                    break;
                case 3:
                    message.reply('O little one, My little one, Come with Me.');
                    break;
                case 4:
                    message.reply("I think today I will defy God's will");
                    break;
                case 5:
                    message.reply('Y E S');
                    break;
                case 6:
                    message.reply('N O');
                    break;
                case 7:
                    message.reply("Y O U  D O N ' T  N E E D  T O  K N O W");
                    break;
                case 8:
                    message.reply('I have ascended to a level you could never reach, nor comprehend');
                    break;
                case 9:
                    message.reply('FURB sees all');
                    break;
                case 10:
                    message.reply("I don't meddle in the affairs of mortals");
                    break;
                case 11:
                    message.reply('F U R B  I S  P L E A S E D');
                    break;
                case 12:
                    message.reply('The void points to yes');
                    break;
                case 13:
                    message.reply('The void points to no');
                    break;
                case 14:
                    message.reply('I will ready my forces');
                    break;
                case 15:
                    message.reply('The weak shall kneel before my radiance <:Pope_Furb:643244965303943188>');
                    break;
                case 16:
                    message.reply('Prepare thyself');
                    break;
                case 17:
                    message.reply('Fleeing is a pointless endeavor');
                    break;
                case 18:
                    message.reply('Amuse me');
                    break;
                case 19:
                    message.reply("Don't look behind you");
                    break;
                case 20:
                    message.reply('No gods, no kings, only the law of the Furb');
                    break;
                case 21:
                    message.reply('I cannot be killed in a way that matters');
                    break;
                default:
                    message.reply('You ignored all the warning signs');
                    break;
            }
    }
});

client.on('error', err=> {
    console.warn(err);
});