const Discord = require('discord.js');
const client = new Discord.Client();
const responseObject = {
  "lol": "hahahahahahaah...",
  "Wat": "Nani?",
  "Wut": "Nani?",
  "Omae wa mou shindeiru": "Nani!!!",
  "ply?": "Lifeless",
  "ply": "Get a life",
  "hi": "hey! succ my d",
  "wut": "Nani?",
};

let prefix = ".";

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
    if(responseObject[message.content]) {
    message.channel.reply(responseObject[message.content]);
    }
    if (message.content.startsWith(prefix + "help")) {
    message.channel.send("Sorry helps are not available at this time. Smt is still writing them :)");
    } 
    if (message.content.startsWith(prefix + "about")) {
    message.channel.send("I'm self bot of soe min thant and I maintains the gp. U can also give me orders and commands but most are still under development. Basically I'm smt ;). Type '.help' for more.");
    } 
    if (message.content.startsWith("morning")) {
    message.channel.reply("No one cares.");
    } 
  if (message.content.startsWith("good morning")) {
    message.channel.reply("No one cares, dude.");
    }
  if (message.content.startsWith("Good Morning")) {
    message.channel.send("No one cares. But morning.");
    }
  if (message.content.startsWith("Good morning")) {
    message.channel.send("ok.");
    }
  if (message.content.startsWith("Good Night!")) {
    message.channel.reply("Yes! Oyasumi..");
    }
  if (message.content.startsWith("good night")) {
    message.channel.send("One last fap before sleep?");
    }
  if (message.content.startsWith("good")) {
    message.channel.send("Nice");
    }
  if (message.content.startsWith("G")) {
    message.channel.send("wp");
    }
  
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
