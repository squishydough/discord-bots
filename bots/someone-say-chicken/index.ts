import 'dotenv/config'

import { Client, Intents } from 'discord.js'

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
})

// When the client is ready, run this code (only once)
client.once('ready', () => {
  console.info('Someone Say Chicken Bot - Ready!')
})

client.on('messageCreate', async (message) => {
  const chickenFound = message.content.toLowerCase().indexOf('chicken') > -1
  if (chickenFound) {
    message.react('<:feelsCheeseMan:980926407439954031>')
    message.react('<:cheeseSheesh:980926407356059688>')
  }
})

// Login to Discord
client.login(process.env.TOKEN)
