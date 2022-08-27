import 'dotenv/config'

import { Client, Intents } from 'discord.js'
import dickWords from './dick-words'
import dickPhrases, { madlib } from './dick-phrases'

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

// When the client is ready, run this code (only once)
client.once('ready', () => {
  console.info('Moon wif cap - Ready!')
})

client.on('messageCreate', async (message) => {
  if (message.author.bot) return

  const content = message.content.toLowerCase()

  let identifiedDickWord: string | null = null
  const dickWordFound = dickWords.some((dickWord) => {
    const found = content.indexOf(dickWord.toLowerCase()) > -1
    if (found) {
      identifiedDickWord = dickWord.toLowerCase()
    }
    return found
  })

  if (dickWordFound) {
    const dickPhrase = dickPhrases[randomNumber(0, dickPhrases.length - 1)]
    message.reply(
      dickPhrase.replace(madlib, identifiedDickWord ?? '--redacted--')
    )
  }
})

// Login to Discord
client.login(process.env.TOKEN)

const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
