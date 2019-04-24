const Discord = require('discord.js')

module.exports.run = async (client, msg, args) => {

  const role = msg.mentions.roles.first() || msg.guild.roles.get(args.join(' '))

    msg.channel.send('Essa mensagem será reagida!').then(msg => {
      msg.react('👍')
    })

}

module.exports.config = {
    name: "reacao",
    aliases: ["reaçao"]
}
