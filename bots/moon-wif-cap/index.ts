import 'dotenv/config'
import { Client, Intents } from 'discord.js'
import synonyms, { Synonym } from './synonyms'
import phrases, { blankSpot } from './phrases'
import descriptors from './descriptors'

/**
 * Inserts a synonym and descriptor into a phrase.
 * @param phrase The base phrase to build off of
 * @param synonym The synonym to insert into the phrase
 * @returns
 */
function buildFinalPhrase(phrase: string, synonym: Synonym): string {
  // Pick a random `synonym.replace` if it exists
  // Otherwise just use the label
  const replacement: string | null = synonym.replace
    ? synonym.replace[randomNumber(0, synonym.replace.length - 1)].toLowerCase()
    : synonym.label

  // Immutably clone descriptors
  // This will allow us to remove descriptors as we select them
  // in order to avoid duplicates.
  let descriptorPool = [...descriptors]

  // Pick 1-2 descriptors
  const howManyDescriptors = randomNumber(1, 2)
  const selectedDescriptors: string[] = []
  for (let i = 0; i < howManyDescriptors; i++) {
    const index = randomNumber(0, descriptorPool.length - 1)
    const selectedDescriptor = descriptorPool.splice(index, 1)[0]
    selectedDescriptors.push(selectedDescriptor)
  }

  return `${phrase.replace(
    blankSpot,
    `${selectedDescriptors.join(', ')} ${replacement}`
  )}`
}

/**
 * Picks a random number between two numbers
 * @param min Lower bounds
 * @param max Upper bounds
 * @returns
 */
function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/** Discord.js client */
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

// When the client is ready, run this code (only once)
client.once('ready', () => {
  console.info(`${new Date()} - Moon wif cap is ready!`)
})

// When a message is received, run this code
client.on('messageCreate', async (message) => {
  // Exit if message from a bot other than Jordbot,
  // or if the message is in a channel we don't want to watch

  //    #moon-is-bitch  874747632319361075
  //    #shitposting    696877172186677291
  //    #nsfw           697152467527401563
  //    #discussion     697599842070954095 (my test server)
  const invalidChannel =
    message.channel.id !== '874747632319361075' &&
    message.channel.id !== '696877172186677291' &&
    message.channel.id !== '697152467527401563' &&
    message.channel.id !== '697599842070954095'
  const authorIsBot =
    message.author.bot && message.author.username !== 'Jordbot'

  if (authorIsBot || invalidChannel) return

  /** Discord message content, lower-cased for better string matching. */
  const content = message.content.toLowerCase()
  /** The synonym found in the message content. */
  let identifiedSynonym: Synonym | null = null

  // First check if we need to reply to a comment about blazing
  const weed_terms = [
    'weed',
    'blaze it',
    'smoke up',
    'bong',
    '420',
    '4:20',
    'get high',
    'dank',
    'schmoke',
    'shmoke',
    'hoots',
  ]
  const term_found = weed_terms.some((term) => content.indexOf(term) > -1)

  if (term_found) {
    message.reply(
      '<:moonDank:980216144818499604> <:moonDank:980216144818499604> <:moonDank:980216144818499604>'
    )
    return
  }

  // Check all synonyms for a match, exit as soon as one is found
  for (const synonym of synonyms) {
    const synonymLabel = synonym.label.toLowerCase()
    const foundAt = content.indexOf(synonymLabel) // Returns the index where the word was found, -1 if not found
    const synonymFound = foundAt > -1

    // If synonym is found, do some extra checking if exactMatch is true
    // If everything looks good, store synonym in identifiedSynonym and break loop
    if (synonymFound) {
      if (synonym.exactMatch && synonymLabel !== content) {
        // Beginning of sentence
        if (foundAt === 0) {
          // If no space after the synonym, don't use it
          if (content[synonymLabel.length] !== ' ') {
            continue // go to next synonym
          }
        }

        // End of sentence
        else if (foundAt === content.length - synonymLabel.length) {
          // If no space before synonym, don't use it
          if (content[foundAt - 1] !== ' ') {
            continue // go to next synonym
          }
        }

        // Middle of sentence should be surrounded by spaces
        else {
          if (
            content[foundAt - 1] !== ' ' ||
            content[foundAt + synonymLabel.length] !== ' '
          ) {
            continue // go to next synonym
          }
        }
      }

      identifiedSynonym = synonym
      break // exit loop, don't need to look anymore
    }
  }

  // No action required if no synonym found
  if (!identifiedSynonym) return

  /**  Pick a random phrase from the list of phrases */
  const randomPhrase = phrases[randomNumber(0, phrases.length - 1)]

  /** Phrase without blanks and with descriptors. */
  const finalPhrase = buildFinalPhrase(randomPhrase, identifiedSynonym)

  // Send the response
  message.reply(finalPhrase)

  // Add some emojis to the orginal message
  message.react('🍆')
  message.react('<:feelsMoonMan:980865025394745354>')
  message.react('<:smau:815016088576065547>')

  // Timestamp and log it!
  console.info(
    `${new Date()} - User ${
      message.author.username
    } said: "${content}". Matched ${
      identifiedSynonym.label
    }. Output "${finalPhrase}".`
  )
})

// Login to Discord
client.login(process.env.TOKEN)
