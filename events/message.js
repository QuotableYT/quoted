const kick = require("../commands/kick");
const snipe = require("../commands/snipe");
const help = require("../commands/help");
const purge = require("../commands/purge");
const prefix = require("../config.json");

module.exports = (client, message) => {
  if (message.startsWith(prefix + "purge")) {
    return purge(message); //Purge Message
  }

  if (message.content.startsWith("q!snipe")) {
    return snipe(message); //Snipe Message
  }
  if (message.content.startsWith("q!kick")) {
    return kick(message); //Kick Script
  }
  if (message.content === "q!help") {
    return help(message); //Help Message
  }
};
