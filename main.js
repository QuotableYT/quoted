//const dotenv = require("dotenv").config(); //Dotenv Extention (Not Required Yet, Disabled)
const fs = require("fs"); //Fs Extention
const Discord = require("discord.js"); //Discord.js Extention
const { prefix, token, testingBot } = require("./config.json");
const client = new Discord.Client(); //Makes The BOT's Discord Client
//This whole set of lines was disabled for forEach being undefined; Check code on codesandbox.io
fs.readdir("./events", (err, files) => {
  files.forEach(file => {
    const eventHandler = require(`../events/${file}`);
    const eventName = file.split(".")[0];
    client.on(eventName, arg => eventHandler(client, arg));
  });
});

fs.readdir("./commands", (err, files) => {
  files.forEach(file => {
    const eventHandler = require(`./commands/${file}`);
    const eventName = file.split(".")[0];
    client.on(eventName, arg => eventHandler(client, arg));
  });
});

client.on("message", msg => {
  if (msg.content === "Ping") {
    msg.reply("Pong!");
  }
});

client.on("message", msg => {
  if (msg.content === "Ding") {
    msg.reply("Dong!");
  }
});

client.on("message", msg => {
  if (msg.content === "Hi") {
    msg.reply("Hello!");
  }
});

client.on("message", msg => {
  if (msg.content === "hi") {
    msg.reply("Hello!");
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "help") {
    msg.reply("Prefix is: q!");
    msg.reply("q!help-general For Help With **Main Commands**");
  }
});

client.login(testingBot);
