import 'dotenv/config'
import { Client, Intents } from 'discord.js'
import { triggers, type Trigger } from './triggers'

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
  console.info(`${new Date()} - Jordbot is ready!`)
})

// When a message is received, run this code
client.on('messageCreate', async (message) => {
  // Exit if message is from a bot
  if (message.author.bot) return

  /** Discord message content, lower-cased for better string matching. */
  const content = message.content.toLowerCase()

  // Check specific values
  if (content.indexOf('miles davis') > -1) {
    message.reply('https://imgur.com/a/FauNoJr')
    return
  }

  if (content.indexOf('joey alexander') > -1) {
    message.reply(
      'For more info about Joey Alexander, greatest jazz pianist of our time, consult with Joey Alexander fan club president SquishyDough, and not some other imposter that rhymes with Bordo. https://i.guim.co.uk/img/media/6c45f0f6188c6b2ec1b357d74058588c00706c39/0_91_2696_1618/master/2696.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=ef8a45e1269f746a73aa5d322874121c'
    )
    return
  }

  // Check all a matching artist triggers

  /** The synonym found in the message content. */
  let artistTrigger: Trigger | null = null
  for (const trigger of triggers) {
    const artist = trigger.artist.toLowerCase()
    const artistFoundAt = content.indexOf(artist) // Returns the index where the word was found, -1 if not found
    const triggerFound = artistFoundAt > -1

    if (triggerFound) {
      artistTrigger = trigger
      break // exit loop, don't need to look anymore
    }
  }

  // No action required if no trigger found
  if (artistTrigger) {
    // Find triggers from the same instrument type
    const similarTriggers = triggers.filter(
      (t) =>
        t.instrument === artistTrigger?.instrument &&
        t.artist !== artistTrigger.artist
    )
    const similarTrigger =
      similarTriggers[randomNumber(0, similarTriggers.length - 1)]

    const wikipediaUrl = `https://en.wikipedia.org/wiki/${similarTrigger.artist.replace(
      ' ',
      '_'
    )}`

    // Send the response
    message.reply(`
        ${artistTrigger.artist} is a decent ${artistTrigger.instrument} player, but they're no ${similarTrigger.artist}. ${wikipediaUrl}
      `)
  }

  // Add some emojis to the orginal message
  // message.react('🍆')
  // message.react('<:feelsMoonMan:980865025394745354>')
  // message.react('<:smau:815016088576065547>')
})

// Login to Discord
client.login(process.env.TOKEN)
