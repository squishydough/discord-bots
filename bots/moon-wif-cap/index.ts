import 'dotenv/config'

import { Client, Intents } from 'discord.js'
import dickSynonyms from './dick-synonyms'
import dickPhrases, { blankSpot } from './dick-phrases'

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
  for (const dickWord of dickSynonyms) {
    if (content.includes(dickWord)) {
      identifiedDickWord = dickWord
      break
    }
  }

  if (identifiedDickWord) {
    const dickPhrase = dickPhrases[randomNumber(0, dickPhrases.length - 1)]
    message.react('🍆')
    message.react('<:feelsMoonMan:980865025394745354>')
    message.react('<:smau:815016088576065547>')
    message.reply(
      dickPhrase.replace(blankSpot, identifiedDickWord ?? '--redacted--')
    )
  }
})

// Login to Discord
client.login(process.env.TOKEN)

const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
