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
  console.info('Bubble Wrap Bot - Ready!')
})

client.on('messageCreate', async (message) => {
  const commandFound = message.content.toLowerCase().indexOf('!bubblewrap') > -1

  const bubbleCount = 64

  let bubbles = ''
  if (commandFound) {
    for (let i = 0; i < bubbleCount; i++) {
      bubbles += '||pop|| '
      if ((i + 1) % 8 === 0 && i !== 0) {
        bubbles += '\n'
      }
    }
    message.reply(bubbles)
  }
})

// Login to Discord
client.login(process.env.TOKEN)
