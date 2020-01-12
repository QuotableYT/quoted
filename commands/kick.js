module.exports = message => {
    const member = message.mentions.members.first()
  
    if (!member) {
      return message.reply(`Who are you trying to kick? You must mention a user.`) //No User Specified
    }
  
    if (!member.kickable) {
      return message.reply(`I can't kick this user. Sorry!`) //User Has A Higher Role Then The Bot Or Bot Cannot Kick Members
    }
  
    return member
      .kick()
      .then(() => message.reply(`${member.user.tag} was kicked.`)) //Kicked Sucessfully
      .catch(error => message.reply(`Sorry, an error occured.`)) //Could Not Kick
  }