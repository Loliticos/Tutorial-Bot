const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs')

// Depois de todas as importações concluidas nós iremos passar para o Command Handler

client.commands = new Discord.Collection()
client.aliases = new Discord.Collection

client.on("ready", async () => {
    console.log(`${client.user.username} está pronto(a)!`)
})

fs.readdir('./commands/', (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split('.').pop() === 'js')
    if(jsfile.length <= 0) {
        return console.log('[Comandos] Não consegui encontrar comandos')
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`)
        client.commands.set(pull.config.name, pull)
        pull.config.aliases.forEach(alias => {
            client.aliases.set(alias, pull.config.name)
        })
    })
})

const prefix = config.prefix

client.on('message', async msg => {

        if(msg.channel.type === 'dm' || msg.author.bot) return; // Se a mensagem for em dm ou o autor for o bot não faz nada
        let messageArray = msg.content.split(' ')
        let cmd = messageArray[0]
        let args = messageArray.slice(1) // O argumentos do comando

        if(!msg.content.startsWith(prefix)) return; // não responde a outros prefixos

            let commandFile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)))
            if(commandFile) commandFile.run(client, msg, args)
    })

client.login(config.token) // Liga o bot
