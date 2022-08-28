import 'dotenv/config'

import { Client, Intents } from 'discord.js'
import synonyms, { Synonym } from './synonyms'
import phrases, { blankSpot } from './phrases'
import descriptors from './descriptors'

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

// When the client is ready, run this code (only once)
client.once('ready', () => {
  console.info('Moon wif cap - Ready!')
})

client.on('messageCreate', async (message) => {
  if (message.author.bot) return
  // Only watch the following channels:
  //    #moon-is-bitch  874747632319361075
  //    #shitposting    696877172186677291
  //    #nsfw           697152467527401563
  //    #discussion     697599842070954095 (my test server)
  if (
    message.channel.id !== '874747632319361075' &&
    message.channel.id !== '696877172186677291' &&
    message.channel.id !== '697152467527401563' &&
    message.channel.id !== '697599842070954095'
  ) {
    return
  }

  const content = message.content.toLowerCase()

  let identifiedSynonym: Synonym | null = null
  for (const synonym of synonyms) {
    const synonymLabel = synonym.label.toLowerCase()
    const foundAt = content.indexOf(synonymLabel)

    if (foundAt > -1) {
      if (synonym.exactMatch) {
        // Beginning of sentence
        if (foundAt === 0) {
          // Should have a space after it
          if (content[synonymLabel.length] !== ' ') {
            break
          }
        }

        // End of sentence
        if (foundAt === content.length - synonymLabel.length) {
          // Should have a space before it
          if (content[foundAt - 1] !== ' ') {
            break
          }
        }
      }

      identifiedSynonym = synonym
      break
    }
  }

  if (identifiedSynonym) {
    const phrase = phrases[randomNumber(0, phrases.length - 1)]
    const finalPhrase = buildFinalPhrase(phrase, identifiedSynonym)
    message.reply(finalPhrase)
    message.react('🍆')
    message.react('<:feelsMoonMan:980865025394745354>')
    message.react('<:smau:815016088576065547>')

    console.info(
      `${new Date()} - User ${
        message.author.username
      } said: "${content}". Matched ${
        identifiedSynonym.label
      }. Output "${finalPhrase}".`
    )
  }
})

// Login to Discord
client.login(process.env.TOKEN)

const buildFinalPhrase = (phrase: string, synonym: Synonym): string => {
  // If synonym replacements exist, pick a random one
  // Otherwise, use the label
  if (!synonym.replace) {
    return phrase.replace(blankSpot, synonym.label.toLowerCase())
  }

  // Pick a random `synonym.replace` if it exists
  // Otherwise just use the label
  const replacement: string | null = synonym.replace
    ? synonym.replace[randomNumber(0, synonym.replace.length - 1)].toLowerCase()
    : synonym.label

  // Pick a random `synonym.descriptor` if it exists
  const descriptor = `${descriptors[
    randomNumber(0, descriptors.length - 1)
  ].toLowerCase()}`

  return `${phrase.replace(blankSpot, `${descriptor} ${replacement}`)}`
}

const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
