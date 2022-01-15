// const Discord = require("discord.js")
// const client = new Discord.Client()
// const botToken = process.env['TOKEN']

// client.on("ready", () => {
//   console.log('Logged in')
// })

// client.on("message", msg => {
//   if(msg.content === "ping"){
//     msg.reply("pong")
//   }
// })

// client.login(process.env.TOKEN)


const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const TOKEN = process.env['TOKEN']
const CLIENT_ID = process.env['client_id']
const GUILD_ID = process.env['guild_id']

const commands = [{
  name: 'yo',
  description: 'Replies with levi?'
}]; 

const rest = new REST({ version: '9' }).setToken(TOKEN);


(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
      { body: commands },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();