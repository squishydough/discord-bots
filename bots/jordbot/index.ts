import 'dotenv/config'
import { Client, Intents } from 'discord.js'
import { triggers, instruments, type Trigger } from './triggers'

/**
 * Picks a random number between two numbers
 */
function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * Checks if the message contains a one-off trigger.
 */
function checkOneOffTriggers(message: string): string | undefined {
  if (message.indexOf('miles davis') > -1) {
    return 'https://imgur.com/a/FauNoJr'
  }

  if (message.indexOf('joey alexander') > -1) {
    return 'For more info about Joey Alexander, greatest jazz pianist of our time, consult with Joey Alexander Fan Club president (aka Head Joey) SquishyDough, and not some other imposter that rhymes with Bordo. https://i.guim.co.uk/img/media/6c45f0f6188c6b2ec1b357d74058588c00706c39/0_91_2696_1618/master/2696.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=ef8a45e1269f746a73aa5d322874121c'
  }
}

/**
 * Checks if the message contains a name for a specific artist.
 * If so, it will return a response stating a different artist who plays the
 * same instrument is better, along with a link to their Wikipedia page.
 */
function checkArtistTriggers(message: string): string | undefined {
  let artistTrigger: Trigger | null = null
  for (const trigger of triggers) {
    const artist = trigger.artist.toLowerCase()
    const artistFoundAt = message.indexOf(artist) // Returns the index where the word was found, -1 if not found
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
    return `${artistTrigger.artist} is a decent ${artistTrigger.instrument} player, but they're no ${similarTrigger.artist}. ${wikipediaUrl}`
  }
}

function checkInstrumentTriggers(message: string): string | undefined {
  let instrumentTrigger: Trigger | null = null
  for (const trigger of instruments) {
    const instrument = trigger.instrument.toLowerCase()
    const instrumentFoundAt = message.indexOf(instrument) // Returns the index where the word was found, -1 if not found
    const triggerFound = instrumentFoundAt > -1

    if (triggerFound) {
      instrumentTrigger = trigger
      break // exit loop, don't need to look anymore
    }
  }

  // No action required if no trigger found
  if (instrumentTrigger) {
    // Find triggers from the same instrument type
    const similarTriggers = instruments.filter(
      (trigger) => trigger.instrument !== instrumentTrigger?.instrument
    )
    const similarTrigger =
      similarTriggers[randomNumber(0, similarTriggers.length - 1)]

    // Send the response
    return `${instrumentTrigger.instrument} is a dogwater instrument. Try learning ${similarTrigger.instrument} if you want a real jazz instrument.`
  }
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

  const oneOffResponse = checkOneOffTriggers(content)
  if (oneOffResponse) {
    message.reply(oneOffResponse)
    return
  }

  const artistResponse = checkArtistTriggers(content)
  if (artistResponse) {
    message.reply(artistResponse)
    return
  }

  const instrumentResponse = checkInstrumentTriggers(content)
  if (instrumentResponse) {
    message.reply(instrumentResponse)
    return
  }
})

// Login to Discord
client.login(process.env.TOKEN)
