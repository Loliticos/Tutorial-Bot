const Discord = require('discord.js')

module.exports.run = async (client, msg, args) => {

  // Comando mais avançado!

const itens = ['Não sei!', 'A resposta está em você', 'E eu vou saber ?', 'Desista']

if(!msg.content.endsWith('?')) {
  return msg.channel.send('Você precisa fazer uma pergunta!')
}

const embed = new Discord.RichEmbed()
.addField(`Pergunta: \`${args.join(' ')}\``, `**Resposta:** \`${itens[Math.floor(Math.random()*itens.length)]}\``)
.setColor('#007fc7')
msg.channel.send(embed)

}

module.exports.config = {
    name: "duvida",
    aliases: ["8ball"]
}
