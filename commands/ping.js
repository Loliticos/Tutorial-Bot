const Discord = require('discord.js')

module.exports.run = async (client, msg, args) => {

  msg.channel.send('Ping').then(message => {
    message.react('🏓')

    const emoji = message.createReactionCollector((reacao, membro) => reacao.emoji.name === '🏓' && membro.id === msg.author.id, { time: 30000 })

    emoji.on("collect", (r) => {
      message.edit('Pong!')
    })
  })



}

module.exports.config = {
    name: "ping",
    aliases: ["pong"]
}
