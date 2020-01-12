module.exports = client => {
    client.user.setStatus("online", "BOT");
    client.user.setActivity("Quoted BOT | q!help", {
      type: "PLAYING",
      url: ""
    });
    console.log(`Logged in as ${client.user.tag}, Hope the bot does well!`);
  };
  