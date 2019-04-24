const Discord = require('discord.js')

module.exports.run = async (client, msg, args) => {

msg.channel.send('Fale uma palavra!')

let collector = msg.channel.createMessageCollector(membro => membro.author.id === msg.author.id, { time: 30000 });

collector.on("collect", (message) => {
  collector.stop()
  msg.channel.send(message.content)
})

}

module.exports.config = {
    name: "resposta",
    aliases: ["collector"]
}
