const Discord = require('discord.js')

module.exports.run = async (client, msg, args) => {

  const role = msg.mentions.roles.first() || msg.guild.roles.get(args.join(' '))

  const embed = new Discord.RichEmbed() // Cria uma RichEmbed

  .setTitle(`Informações sobre: ${role.name}`) // O nome do cargo
  .addField('Cor:', role.hexColor) // Cria um field com a informação da cor do cargo
  .addField('ID:', role.id) // O id do cargo
  .addField('Membros:', role.members.map(cargo => cargo).join(' ')) // Irá mencionar todos cargos que o usuário possui
  .addField('Posição:', role.position) // A posição do cargo
  .addField('Mencionavel:', role.mentionable ? 'Sim' : 'Não') // Caso o cargo seja mencionavel irá mostrar SIM caso não seja irá mostrar não. OPERADOR TERNÁRIO
  msg.channel.send(embed) // Envia a embed para o canal selecionado

}

module.exports.config = {
    name: "roleinfo",
    aliases: ["cargoinfo"]
}
