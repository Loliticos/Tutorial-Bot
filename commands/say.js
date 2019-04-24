const Discord = require('discord.js')

module.exports.run = async (client, msg, args) => {
    const message = args.join(' ') // Pega tudo aquilo que estiver espaço

    msg.channel.send(message)
}

module.exports.config = {
    name: "say",
    aliases: ["falar"]
}
