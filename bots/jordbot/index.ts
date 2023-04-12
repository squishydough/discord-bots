import 'dotenv/config'
import { Client, Intents } from 'discord.js'
import {
  artistTriggers,
  instrumentTriggers,
  oneOffTriggers,
  type ArtistInstrumentTrigger,
  type OneOffTrigger,
} from './triggers'

const RANDOM_RESPONSE_TRIGGER_WEIGHT = { lowest: 1, highest: 100, weight: 4 }
const ARTIST_TRIGGER_WEIGHT = { lowest: 1, highest: 10, weight: 3 }
const INSTRUMENT_TRIGGER_WEIGHT = { lowest: 1, highest: 10, weight: 3 }

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
  let oneOffTrigger: OneOffTrigger | null = null
  for (const trigger of oneOffTriggers) {
    let triggerFound = false
    for (const t of trigger.triggers) {
      const triggerFoundAt = message.indexOf(t) // Returns the index where the word was found, -1 if not found
      triggerFound = triggerFoundAt > -1
      if (triggerFound) {
        break
      }
    }
    if (triggerFound) {
      oneOffTrigger = trigger
      break
    }
  }

  if (oneOffTrigger) {
    const shouldReturnResponse =
      randomNumber(oneOffTrigger.lowestWeight, oneOffTrigger.highestWeight) <=
      oneOffTrigger.weight

    if (shouldReturnResponse) {
      // Pick a random response
      const randomIndex = randomNumber(0, oneOffTrigger.responses.length - 1)
      return oneOffTrigger.responses[randomIndex]
    }
  }
}

/**
 * Checks if the message contains a name for a specific artist.
 * If so, it will return a response stating a different artist who plays the
 * same instrument is better, along with a link to their Wikipedia page.
 */
function checkArtistTriggers(message: string): string | undefined {
  let artistTrigger: ArtistInstrumentTrigger | null = null
  for (const trigger of artistTriggers) {
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
    const similarArtistTriggers = artistTriggers.filter(
      (t) =>
        t.instrument === artistTrigger?.instrument &&
        t.artist !== artistTrigger.artist
    )
    const similarArtistTrigger =
      similarArtistTriggers[randomNumber(0, similarArtistTriggers.length - 1)]

    // Swap blank spaces with underscores for wikipedia urls
    const artistWikipediaUrl = `https://en.wikipedia.org/wiki/${artistTrigger.artist.replace(
      / /g,
      '_'
    )}`
    const similarArtistWikipediaUrl = `https://en.wikipedia.org/wiki/${similarArtistTrigger.artist.replace(
      / /g,
      '_'
    )}`

    // Find triggers from other instrument types other than the one that was detected.
    const otherInstrumentTriggers = instrumentTriggers.filter(
      (i) => i.instrument !== artistTrigger?.instrument
    )
    const otherInstrumentTrigger =
      otherInstrumentTriggers[
        randomNumber(0, otherInstrumentTriggers.length - 1)
      ]

    const responses = [
      `${artistTrigger.artist} is an awesome ${artistTrigger.instrument} player who won the best rhythm section player award at the alberta international band festival. ${artistWikipediaUrl}`,
      `${artistTrigger.artist} is a decent ${artistTrigger.instrument} player, but they're no ${similarArtistTrigger.artist}. ${similarArtistWikipediaUrl}`,
      `they are pieces of art on the same level as da vinci and miles davis. ${artistWikipediaUrl}`,
      `bro is famous ${artistWikipediaUrl}`,
      `they are hairy and bulging ${artistWikipediaUrl}`,
      `finally some god damn facts.\r\n${similarArtistTrigger.artist} is a better ${similarArtistTrigger.instrument} player. ${similarArtistWikipediaUrl}`,
      `${artistTrigger.artist} when he sees a cute animal :heart_eyes: ${artistWikipediaUrl}`,
      `god they're all so fancily dressed. ${artistWikipediaUrl}`,
      `that man cannot play swing. check out ${similarArtistTrigger.artist}. ${similarArtistWikipediaUrl}`,
      `and they are such a classical ${artistTrigger.instrument} player its making me cringe when they play swing. ${artistWikipediaUrl}`,
      `but im better than them so its okay ${artistWikipediaUrl}`,
      `the ${artistTrigger.instrument} players tone oh my goddddddddddddddddddd\r\nits so gorgeous\r\nthis is now my fav ${artistTrigger.artist} song. ${artistWikipediaUrl}`,
      `2 of my favorite ${artistTrigger.instrument} players got sponsored by overwatch\r\nkind of large actually\r\n${artistWikipediaUrl} ${similarArtistWikipediaUrl}`,
      `not me arranging a ${artistTrigger.artist} song for my jazz combo ${artistWikipediaUrl}`,
      `holy shit ~~bill clinton~~ ${artistTrigger.artist} on the ${artistTrigger.instrument} ${artistWikipediaUrl}`,
      `WHY IS ${artistTrigger.artist.toUpperCase()} PLAYING A D# OVER A B MINOR CHORD. ${similarArtistTrigger.artist.toUpperCase()} IS BETTER ${similarArtistWikipediaUrl}`,
      `currently plays in an all female jazz group called artemis that literaly just has some of the best jazz players of the modern day ${artistWikipediaUrl}`,
      `fun fact: they also play jazz ${artistWikipediaUrl}`,
      `well actually this one woman and ${artistTrigger.instrument} player dude did kids songs, but it was jazz and that was actualyl dope ${artistWikipediaUrl}`,
      `dont tell me you guys think ${artistTrigger.artist} can only play smooth jazz ${artistWikipediaUrl}`,
      `i saw a video of an ai music robot and like you could program it to play 50% like ${artistTrigger.artist} and 50% like ${similarArtistTrigger.artist}`,
      `the music side is great, they got this amazing ${similarArtistTrigger.instrument} player named ${similarArtistTrigger.artist} who is just insane, they play ${otherInstrumentTrigger} too at an insane level ${artistWikipediaUrl}`,
      `i was watching his tiny desk and was like 'what a nice young artist i wonder if he is making any more new music' ${artistWikipediaUrl}`,
      `theyve inspired me to quit music forever ${artistWikipediaUrl}`,
      `you think this 12 year old was blasting music next to you too? ${artistWikipediaUrl}`,
      `but they dont play music. try ${similarArtistTrigger.artist} ${similarArtistWikipediaUrl}`,
      `not a joke i know more music theory than ${artistTrigger.artist} ${artistWikipediaUrl}`,
      `OH MY GOD SAME ${artistTrigger.instrument.toUpperCase()} PLAYERS AND RHYTHM SECTION B TWITH JOEY ALEXANDER ${artistWikipediaUrl}`,
      `magical things happen on ${artistTrigger.artist}s birthday ${artistWikipediaUrl}`,
      `welp now i know youre a real ${artistTrigger.artist} fan ${artistWikipediaUrl}`,
      `so if youre a bigger ${artistTrigger.artist} fand and you even know his dad then youd know the answer too ${artistWikipediaUrl}`,
      `regular sized woman plays oversized ${artistTrigger.instrument} ${artistWikipediaUrl}`,
      `i found another piano idol ${artistWikipediaUrl}`,
      `i shjould also say that is my ${artistTrigger.instrument} teacehr ${artistWikipediaUrl}`,
      `with that dope of a name he has to be good ${artistWikipediaUrl}`,
    ]

    const { lowest, highest, weight } = ARTIST_TRIGGER_WEIGHT
    const random = randomNumber(lowest, highest)
    const shouldReturnResponse = random <= weight
    if (shouldReturnResponse) {
      // Send the response
      const randomIndex = randomNumber(0, responses.length - 1)
      return responses[randomIndex]
    }
  }
}

/**
 * Checks if the message contains a name for a specific instrument.
 * If so, it will return a response stating the instrument is dogwater,
 * and recommend a different instrument.
 */
function checkInstrumentTriggers(message: string): string | undefined {
  let instrumentTrigger: ArtistInstrumentTrigger | null = null
  for (const trigger of instrumentTriggers) {
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
    const similarInstrumentTriggers = instrumentTriggers.filter(
      (trigger) => trigger.instrument !== instrumentTrigger?.instrument
    )
    const similarInstrumentTrigger =
      similarInstrumentTriggers[
        randomNumber(0, similarInstrumentTriggers.length - 1)
      ]

    const responses = [
      `${instrumentTrigger.instrument} is a dogwater instrument. Try learning ${similarInstrumentTrigger.instrument} if you want a real jazz instrument.`,
      `${instrumentTrigger.instrument} is whack bro. ${similarInstrumentTrigger.instrument} is way better`,
      `bro ${similarInstrumentTrigger.artist} is the best ${instrumentTrigger.instrument} player`,
      `it plays me my jazz`,
      `incase you dont know: the highest regular note on ${instrumentTrigger.instrument} is F# (not concert), so anything above that is going into altissimo which has totally non standard fingerings which are incredibly hard to get a sound with`,
      `i TAUGHT those kids how to play ${instrumentTrigger.instrument}`,
      `‘what if i played the halo theme on every single audio filter this ${instrumentTrigger.instrument} has’`,
      `i hope i break my arm in a way that still lets me play ${instrumentTrigger.instrument} and ${similarInstrumentTrigger.instrument} but i can never play overwatch against you again`,
      `NOOOOO\r\nONE OF MY FAVORITE ${instrumentTrigger.instrument.toUpperCase()}S IS MOVING TO JAPAN`,
      `wow.. who is that ${instrumentTrigger.instrument} player..`,
    ]

    const { lowest, highest, weight } = INSTRUMENT_TRIGGER_WEIGHT
    const random = randomNumber(lowest, highest)
    const shouldReturnResponse = random <= weight
    if (shouldReturnResponse) {
      // Send the response
      const randomIndex = randomNumber(0, responses.length - 1)
      return responses[randomIndex]
    }
  }
}

function getRandomResponse(): string | undefined {
  const responses = [
    'YOOOO LETS GO',
    'NOO THEY NERFED BALL MINES',
    'I SAID BOFA DEEZ NUTS',
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
    `you can just search 'land of the misty giants'\r\nor my name when i show up\r\nill lyk when im up`,
    'WAIT HOW TFDID YOU KNOW THE NAME OF MY FILE',
    'i wish i appreciated jazz the way squishy does',
    'AHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
    'i will literally unleash my inner beast\r\nmy demons',
    'jimmy car is coming to my city should i go see him',
    'wait i dont understandable',
    'so true bestie',
    'i could hear you saying that in my head',
    'so youre the one that deleted my jazz playlist i posted here a while ago',
    'IM JAZZING',
    'I LOVE JAZZ SO MUCH OMG',
    'should probably quit music and go lay on the grass',
    'gotta say, the inside of the music building is quite ubderwhelming',
    'thats not what joey alexander would want',
    'youre a disappointment to all joey alexanser fans',
    `if i looked up 'Joey Alexander Fan Cublets' then why did the link titled 'Joey Alexander Fan Cublets' not pop up`,
    `god damn thats pretty`,
    `thats actuall wild though wtf`,
    `why the fuck is he so committed`,
    `IT WAS A TEAP\r\nahh`,
    `LMAOOO I SHOULDA DONE THAT`,
    `im finally 8!!!`,
    `im at my elementary school principals house`,
    `jeez i found cheeses soft spit\r\nspit\r\nspot`,
    `istg cheese has so many beldums and i have none\r\nrich get richer ig`,
    `????????\r\nyou guys arent real`,
    `IM JUST FJCKING CONFUSED\r\nU GUYS ARE THE REASON I DONT ASKQUESTIONSANYMORE`,
    `WE HAD A DANCE UNIT IN GYM AND I WAS AT MY HOUSE AND THESE MORMONS OR WHATEVER CAME TO OUR DOOR AND MY DAD GOT ME TO FUXKING DO MY DANCE FOR THEM`,
    `did you just call me wario`,
    `how u get ghost balls`,
    `i mean like hes right but i just got $4 on me bro im just here for the jazz`,
    `i had a dream there was a third minions movie and i went to see it but tickets were sold out`,
    `yep turning notifications off for this channel`,
    `ur my biggest hater u know that`,
    `i was at school. and then passed my drivers test. and am now busking at a market.`,
    `?\r\nwhat is your point exacrtly`,
    `you dont deserve me`,
  ]

  const { lowest, highest, weight } = RANDOM_RESPONSE_TRIGGER_WEIGHT
  const random = randomNumber(lowest, highest)
  const shouldReturnResponse = random <= weight
  if (shouldReturnResponse) {
    const randomIndex = randomNumber(0, responses.length - 1)
    return responses[randomIndex]
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

  const randomResponse = getRandomResponse()
  if (randomResponse) {
    message.reply(randomResponse)
    return
  }
})

// Login to Discord
client.login(process.env.TOKEN)
