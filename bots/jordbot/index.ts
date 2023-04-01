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
    return 'https://i.imgur.com/jSO2YvA.png'
  }

  if (message.indexOf('shoes') > -1) {
    return 'https://i.imgur.com/Epm6dQl.png'
  }

  if (message.indexOf('joey alexander') > -1) {
    return 'For more info about Joey Alexander, greatest jazz pianist of our time, consult with Joey Alexander Fan Club president (aka Head Joey) SquishyDough, and not some other imposter that rhymes with Bordo. https://i.guim.co.uk/img/media/6c45f0f6188c6b2ec1b357d74058588c00706c39/0_91_2696_1618/master/2696.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=ef8a45e1269f746a73aa5d322874121c'
  }

  if (message.indexOf('squirrel') > -1) {
    return 'squirrels arent real'
  }

  if (message.indexOf('surefour') > -1) {
    return 'bro surefour is from calgary how cool is that\r\nme and him literally went to the same laser tag place when we were little\r\nnot at the same time but still'
  }

  if (message.indexOf('legs') > -1) {
    return 'crazy calves bro\r\nim not jealous at all :ANGRYCRYING:'
  }

  if (message.indexOf('pokemon') > -1) {
    return 'i forget how to fuxkint spell it'
  }

  if (message.indexOf('party') > -1) {
    return 'invite me next time :heart_eyes: :heart_eyes:'
  }

  if (
    message.indexOf('congrats') > -1 ||
    message.indexOf('congratulations') > -1 ||
    message.indexOf('grats') > -1
  ) {
    return 'Thank you so much mr. Moderator. I deeply apperciate your congratulationsand will cherish this moment in my memories as a great moment and I respect you greatly.'
  }

  if (message.indexOf('among us') > -1) {
    return 'among us'
  }

  if (
    message.indexOf('donald glover') > -1 ||
    message.indexOf('childish gambino') > -1
  ) {
    return 'WAIT DONALD GLOVER IS CHILDISH GAMBINO??\r\nWHY DOES DONALD GLOVER DO EVERYTHING\r\nliterally fucking writes acts comdeians and then turns around and makes bangers with 1.2 billion streams\r\nand has won 5 grammys???\r\ngod dammit\r\ni need to jus stop'
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

    // Wikipedia link
    const artistWikipediaUrl = `https://en.wikipedia.org/wiki/${artistTrigger.artist.replace(
      ' ',
      '_'
    )}`
    const similarWikipediaUrl = `https://en.wikipedia.org/wiki/${similarTrigger.artist.replace(
      ' ',
      '_'
    )}`

    const responses = [
      `${artistTrigger.artist} is an awesome ${artistTrigger.instrument} player who won the best rhythm section player award at the alberta international band festival. ${artistWikipediaUrl}`,
      `${artistTrigger.artist} is a decent ${artistTrigger.instrument} player, but they're no ${similarTrigger.artist}. ${similarWikipediaUrl}`,
      `they are pieces of art on the same level as da vinci and miles davis. ${artistWikipediaUrl}`,
      `bro is famous ${artistWikipediaUrl}`,
      `they are hairy and bulging ${artistWikipediaUrl}`,
      `finally some god damn facts.\r\n${similarTrigger.artist} is a better ${similarTrigger.instrument} player. ${similarWikipediaUrl}`,
      `${artistTrigger.artist} when he sees a cute animal :heart_eyes: ${artistWikipediaUrl}`,
    ]

    // Send the response
    return responses[randomNumber(0, responses.length - 1)]
  }
}

/**
 * Checks if the message contains a name for a specific instrument.
 * If so, it will return a response stating the instrument is dogwater,
 * and recommend a different instrument.
 */
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

    const responses = [
      `${instrumentTrigger.instrument} is a dogwater instrument. Try learning ${similarTrigger.instrument} if you want a real jazz instrument.`,
      `${instrumentTrigger.instrument} is whack bro`,
    ]

    // Send the response
    return responses[randomNumber(0, responses.length - 1)]
  }
}

function respondRandomly(): string | undefined {
  const responses = [
    'YOOOO LETS GO',
    'NOO THEY NERFED BALL MINES',
    'invite me next time :heart_eyes: :heart_eyes: ',
    'bro just started going off on a 17 year old on the internet.',
    'jesus',
    'like why are you so quick with it\r\ngive me a chance\r\njesus',
    'kinda real though',
    'im not jealous at all :ANGRYCRYING:',
    'HOW DO YOU KNOW',
    'im parked. in a parking lot.',
    'ok WHY was i kicked',
    'it was nice knowing you all',
    'OH MY GOD SOMEONE SAID IT',
    'sorry i hate men',
  ]

  const random = randomNumber(0, 100)
  const weight = 5
  if (random < weight) {
    return responses[randomNumber(0, responses.length - 1)]
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

  const randomResponse = respondRandomly()
  if (randomResponse) {
    message.reply(randomResponse)
    return
  }
})

// Login to Discord
client.login(process.env.TOKEN)
