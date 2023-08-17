import 'dotenv/config'
import { Client, Intents } from 'discord.js'
import {
  artistTriggers,
  instrumentTriggers,
  oneOffTriggers,
  type ArtistInstrumentTrigger,
  type OneOffTrigger,
} from './triggers'
import {
  RANDOM_RESPONSE_WEIGHT,
  ARTIST_TRIGGER_WEIGHT,
  INSTRUMENT_TRIGGER_WEIGHT,
} from './weights'

/**
 * Returns a random number between min and max
 */
function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * Returns a random number between 1 - 100
 */
function randomWeight(): number {
  return randomNumber(1, 100)
}

/**
 * Checks if the message contains a one-off trigger.
 */
function checkOneOffTriggers(
  message: string,
  author: string
): string | undefined {
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
    // Dust egg trigger check
    if (oneOffTrigger.triggers.includes('egg') && author === 'dustadept') {
      const randomIndex = randomNumber(0, oneOffTrigger.responses.length - 1)
      console.info(
        `${new Date()} - randomIndex: ${randomIndex} - Dust egg trigger activated`
      )
      return `🥚 I HEAR YOUR CALL, EGG SUMMONER 🥚 \r\n ${oneOffTrigger.responses[randomIndex]}`
    }

    const weight = randomWeight()
    const shouldReturnResponse = weight <= oneOffTrigger.weight
    console.info(
      `${new Date()} - One-off trigger weight: ${
        oneOffTrigger.weight
      }, random weight: ${weight}, should return response: ${shouldReturnResponse}`
    )

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
  // Exit if the weight is too high
  const weight = randomWeight()
  const shouldReturnResponse = weight <= ARTIST_TRIGGER_WEIGHT
  console.info(
    `${new Date()} - Artist trigger weight: ${ARTIST_TRIGGER_WEIGHT}, random weight: ${weight}, should return response: ${shouldReturnResponse}`
  )
  if (!shouldReturnResponse) {
    return
  }

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

  if (!artistTrigger) {
    console.error(`${new Date()} - No artist trigger found`)
    return
  }

  // No action required if no trigger found
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
    otherInstrumentTriggers[randomNumber(0, otherInstrumentTriggers.length - 1)]

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
    `hey ${artistTrigger.artist} is from florida show some respect 😤`,
  ]

  const randomIndex = randomNumber(0, responses.length - 1)
  return responses[randomIndex]
}

/**
 * Checks if the message contains a name for a specific instrument.
 * If so, it will return a response stating the instrument is dogwater,
 * and recommend a different instrument.
 */
function checkInstrumentTriggers(message: string): string | undefined {
  // Exit if weight is too high
  const weight = randomWeight()
  const shouldReturnResponse = weight <= INSTRUMENT_TRIGGER_WEIGHT
  console.info(
    `${new Date()} - Instrument trigger weight: ${INSTRUMENT_TRIGGER_WEIGHT}, random weight: ${weight}, should return response: ${shouldReturnResponse}`
  )

  if (!shouldReturnResponse) {
    return
  }

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

  if (!instrumentTrigger) {
    console.error(`${new Date()} - No instrument trigger found`)
    return
  }

  // No action required if no trigger found
  // Find triggers from the same instrument type
  const otherInstrumentArtists = instrumentTriggers.filter(
    (trigger) =>
      trigger.instrument === instrumentTrigger?.instrument &&
      trigger.artist !== instrumentTrigger?.artist
  )
  const otherInstrumentArtist =
    otherInstrumentArtists[randomNumber(0, otherInstrumentArtists.length - 1)]

  const responses = [
    `bro ${otherInstrumentArtist.artist} is the best ${instrumentTrigger.instrument} player`,
    `it plays me my jazz`,
    `incase you dont know: the highest regular note on ${instrumentTrigger.instrument} is F# (not concert), so anything above that is going into altissimo which has totally non standard fingerings which are incredibly hard to get a sound with`,
    `i TAUGHT those kids how to play ${instrumentTrigger.instrument}`,
    `‘what if i played the halo theme on every single audio filter this ${instrumentTrigger.instrument} has’`,
    `i hope i break my arm in a way that still lets me play ${instrumentTrigger.instrument} and ${otherInstrumentArtist.instrument} but i can never play overwatch against you again`,
    `NOOOOO\r\nONE OF MY FAVORITE ${instrumentTrigger.instrument.toUpperCase()}S IS MOVING TO JAPAN`,
    `wow.. who is that ${instrumentTrigger.instrument} player..`,
  ]

  const randomIndex = randomNumber(0, responses.length - 1)
  return responses[randomIndex]
}

function getRandomResponse(author: string): string | undefined {
  // Exit if weight is too high
  const weight = randomWeight()
  const shouldReturnResponse = weight <= RANDOM_RESPONSE_WEIGHT
  console.info(
    `${new Date()} - Random response weight: ${RANDOM_RESPONSE_WEIGHT}, random weight: ${weight}, should return response: ${shouldReturnResponse}`
  )
  if (!shouldReturnResponse) {
    return
  }

  const responses = [
    'YOOOO LETS GO',
    'NOO THEY NERFED BALL MINES',
    'I SAID BOFA DEEZ NUTS',
    'bro just started going off on a 17 year old on the internet',
    'jesus',
    'like why are you so quick with it\r\ngive me a chance\r\njesus',
    'kinda real though',
    'im not jealous at all',
    'HOW DO YOU KNOW',
    'im parked. in a parking lot.',
    'ok WHY was i kicked',
    'it was nice knowing you all',
    'OH MY GOD SOMEONE SAID IT',
    'sorry i hate men',
    `you can just search 'land of the misty giants'\r\nor my name when i show up\r\nill lyk when im up`,
    'WAIT HOW TFDID YOU KNOW THE NAME OF MY FILE',
    // 'i wish i appreciated jazz the way squishy does',
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
    `GOD DAMN DIDNT KNOW U WERE CHILL LIKE THAT 🤝`,
    `maybe youll cut jordbot some slack\r\n😒`,
    `i have to work on my game to not be overshadowed by jordo`,
    `soon jordbot will be coded to join vc and yell about minecraft bedwars`,
    `YO WHY THE QUESTION MARKS IN MY NICKNAME`,
    `this is the airport in lauderdale`,
    `ok good cause thats what i was just about to ask`,
    `CAN YOL NOT FUCKING I TERRIPT ME I WASNT FUNISHED`,
    `YO CHILL\r\nI AINT EVEN DO ANYTHIBG`,
    `that fuxking remidns me\r\nthere were northern lights in my tiny ass souther town on sunday`,
    `HEY\r\nLISTEN HERE PAL\r\nWE AINT GONNA HAVE A PROBLEM HERE IS WE`,
    `what in the british`,
    `what does that have to do with walmart lettuce`,
    `WAIT THATS FUXKING ADORABLE`,
    `i dotn get it. bad joke.`,
    `wait wad there a period when i said that\r\ni dont remember there being a period`,
    `why do i look like skinny peter griffin`,
    `just joined a discord linked to my university never felt so crinfe`,
    `WHY IS THIS FUCKING ROBOT EXPOSING MY PAST`,
    `no he types in complete sentences and doesnt make any typose`,
    `I MEVER EVEN TYPED THAT SENTENCE YOU BITCH`,
    `ill headbitt yoy any time ${author}`,
    `${author} is the banana case i am me and my messages are the bananas`,
  ]

  const randomIndex = randomNumber(0, responses.length - 1)
  return responses[randomIndex]
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

  // Add reactions to Omar's messages
  // TODO Bring back of Omar is mean to poor lil Jordbot
  // if (message.author.username === 'Omar2727') {
  //   message.react('<:jordoWeezer:986338341773541477>')
  // }

  /** Discord message content, lower-cased for better string matching. */
  const content = message.content.toLowerCase()

  const oneOffResponse = checkOneOffTriggers(content, message.author.username)
  if (oneOffResponse) {
    console.info(
      `${new Date()} - One off responses triggered: ${oneOffResponse}`
    )

    message.reply(oneOffResponse)
    if (message.author.username === 'Dust') {
      message.react('🥚')
    }

    return
  }

  const artistResponse = checkArtistTriggers(content)
  if (artistResponse) {
    console.info(`${new Date()} - Artist response triggered: ${artistResponse}`)
    message.reply(artistResponse)
    return
  }

  const instrumentResponse = checkInstrumentTriggers(content)
  if (instrumentResponse) {
    console.info(
      `${new Date()} - Instrument response triggered: ${instrumentResponse}`
    )
    message.reply(instrumentResponse)
    return
  }

  const randomResponse = getRandomResponse(message.author.username)
  if (randomResponse) {
    console.info(`${new Date()} - Random response triggered: ${randomResponse}`)
    message.reply(randomResponse)
    return
  }
})

// Login to Discord
client.login(process.env.TOKEN)
