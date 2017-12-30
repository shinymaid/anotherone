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
const swearWords = ["damn", "sucks", "fuck", "shit","lee","dick"];
const newUsers = [];
/*const cheerio = require('cheerio'),
      snekfetch = require('snekfetch'),
      querystring = require('querystring');*/

let prefix = ".";

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
    if(responseObject[message.content]) {
    message.reply(responseObject[message.content]);
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
  if( swearWords.some(word => message.content.includes(word)) ) {
  message.reply("Language pls. FUCKER!");
    }
  /*if(message.content.startsWith(prefix + "search")) {
    async function googleCommand(msg, args) {

   
   let searchMessage = await <Message>.reply('Searching...');
   let searchUrl = `https://www.google.com/search?q=${encodeURIComponent(msg.content)}`;

   
   return snekfetch.get(searchUrl).then((result) => {

      
      let $ = cheerio.load(result.text);

      
      let googleData = $('.r').first().find('a').first().attr('href');

      
      googleData = querystring.parse(googleData.replace('/url?', ''));
      searchMessage.edit(`Ok...\n${googleData.q}`);

  
  }).catch((err) => {
     searchMessage.edit('Li dwy shr ny dr lr :)');
  });
    }
    } */
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  if (!newUsers[guild.id]) newUsers[guild.id] = new Discord.Collection();
  newUsers[guild.id].set(member.id, member.user);

  if (newUsers[guild.id].size > 10) {
    const userlist = newUsers[guild.id].map(u => u.toString()).join(" ");
    guild.channels.get(guild.id).send("Welcome! I mean lee lr loke dr lr :)!\n" + userlist);
    newUsers[guild.id].clear();
  }
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  if (newUsers[guild.id].has(member.id)) newUsers.delete(member.id);
});
  client.on("error", (e) => console.error(e));
  client.on("warn", (e) => console.warn(e));
  client.on("debug", (e) => console.info(e));


client.login(process.env.BOT_TOKEN);
