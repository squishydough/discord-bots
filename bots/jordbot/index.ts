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
  if (message.indexOf('jazz') > -1) {
    const responses = [
      'but if you dont like jazz then have fun driving for hours and the only thing you can see is grass everywhere',
      'im a jazz guys actually',
      'I LOVE JAZZ SO MUCH OMG',
      'i live in a small town there are no jazz here ;(',
      'am i allowed to talk ab music in here',
    ]
    return responses[randomNumber(0, responses.length - 1)]
  }

  if (message.indexOf('miles davis') > -1) {
    const weight = 6
    const random = randomNumber(1, 10)
    if (random < weight) {
      return 'https://i.imgur.com/jSO2YvA.png'
    }
  }

  if (message.indexOf('shoes') > -1) {
    return 'https://i.imgur.com/Epm6dQl.png'
  }

  if (message.indexOf('joey alexander') > -1) {
    const weight = 6
    const random = randomNumber(1, 10)
    if (random < weight) {
      return 'For more info about Joey Alexander, greatest jazz pianist of our time, consult with Joey Alexander Fan Club president (aka Head Joey) SquishyDough, and not some other imposter that rhymes with Bordo. https://i.guim.co.uk/img/media/6c45f0f6188c6b2ec1b357d74058588c00706c39/0_91_2696_1618/master/2696.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=ef8a45e1269f746a73aa5d322874121c'
    }
  }

  if (message.indexOf('chess') > -1) {
    const weight = 3
    const random = randomNumber(1, 10)
    if (random < weight) {
      return 'YOU WONT LAST 0.0035 SECONDS PLAYING THIS GAME'
    }
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
    const responses = [
      'Thank you so much mr. Moderator. I deeply apperciate your congratulationsand will cherish this moment in my memories as a great moment and I respect you greatly.',
      'i cant tell what is genuine from you anymore\r\nbut thanks!!',
      'and the michael jackson insta account is celebrating by giving away cds lmao',
    ]
    return responses[randomNumber(0, responses.length - 1)]
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

  if (message.indexOf('squishydough') > -1) {
    const responses = [
      'squish you enhance my qualities',
      'i want to go to christmas dinner with squishydough ☹️',
    ]
    const weight = 2
    const random = randomNumber(1, 10)
    if (random < weight) {
      return responses[randomNumber(0, responses.length - 1)]
    }
  }

  if (message.indexOf('burger') > -1) {
    return 'they put too many onion on my quarter pounder with cheese and now i feel icky ☹️'
  }

  if (message.indexOf('dog') > -1) {
    return 'i resent this lack of respect for me. i always put ketchup and mustard on my dogs'
  }

  if (message.indexOf('hotdog') > -1 || message.indexOf('hot dog') > -1) {
    const responses = [
      'hot dog lore',
      'just saw a place selling a poutine dog\r\nwhich is a hot dog with gracy and cheese on',
    ]
    return responses[randomNumber(0, responses.length - 1)]
  }

  if (message.indexOf('thankful') > -1 || message.indexOf('grateful') > -1) {
    return 'im thankful for your cute face'
  }

  if (message.indexOf('onnen') > -1) {
    const weight = 2
    const random = randomNumber(1, 10)
    if (random < weight) {
      return 'happy thanksigiving @Onnen#7393'
    }
  }

  if (message.indexOf('mansplain') > -1) {
    return 'IT WAS JUST A DISCLAIMER I DIDNT MEAN TO MANSPLAIN'
  }

  if (message.indexOf('stupid') > -1) {
    const weight = 2
    const random = randomNumber(1, 10)
    if (random < weight) {
      return `“It's not just that I'm stupid; it's that I'm just smart enough to know how stupid I am. I wish I weren't so stupid. Or that I were stupider.” - John Hall`
    }
  }

  if (message.indexOf('egg') > -1) {
    return 'ILL SHOVEL THE HARD BOILDE EGGS INTO MY MOUTH UNTIL I DIE'
  }

  if (message.indexOf('food') > -1) {
    const responses = [
      'AT A TABLE\r\nWE ARE EATINGN',
      'ILL COOK 5 AND EAT EACH ONE IN A BITE',
    ]
    const weight = 2
    const random = randomNumber(1, 10)
    if (random < weight) {
      return responses[randomNumber(0, responses.length - 1)]
    }
  }

  if (message.indexOf('vegetable') > -1) {
    return 'i dojt eat vegetabled'
  }

  if (message.indexOf('breakfast') > -1) {
    return 'OMG I WAS JUST EATING BREAKFAST TOO'
  }

  if (message.indexOf('dairy queen') > -1) {
    return 'bro i havent had a dairy queen salad in a lonngass time'
  }

  if (message.indexOf('musk') > -1) {
    return 'musk fetish 😨😨😨💀💀'
  }

  if (message.indexOf('dj khaled') > -1) {
    return 'god dj khaled is so cringe'
  }

  if (message.indexOf('mercy') > -1) {
    return 'bro whats this gotta do with my support'
  }

  if (message.indexOf('toronto') > -1 || message.indexOf('montreal') > -1) {
    return 'toronto and montreal are the only decent jazz scenes'
  }

  if (message.indexOf('alberta') > -1) {
    return 'only cool thing here is the jazz musicians'
  }

  if (message.indexOf('club') > -1) {
    return 'theres this place called the yardbirde suite its a jazz club'
  }

  if (message.indexOf('camp') > -1) {
    return 'i thought it was supposed to be like a jazz camp with a bunch of young whippersnappers\r\nbut 4/9 people are at least 40\r\n1 of the guys is literally 72 fucking years old'
  }

  if (message.indexOf('anime') > -1) {
    return 'its an anime about jazz'
  }

  if (message.indexOf('league of legends') > -1) {
    return 'you should play jazz music instead'
  }

  if (message.indexOf('michael jackson') > -1) {
    const responses = [
      'michael jackson died on the same day joey alexander was born',
      'i was reading a story about someone saying they went to high school with michael jackson and then i realized it was probably fanfiction',
      'economy collapsed then michael jackson died',
      'bro did you know that kid is the godfather of 2 of michael jacksons kids',
      'i just gave up and now listening to michael jackson',
      'someone in my game yesterday told me michael jackson was overrated',
    ]
    return responses[randomNumber(0, responses.length - 1)]
  }

  if (message.indexOf('classical') > -1) {
    return 'not much classical music i can actually jam out to but this is it'
  }

  if (message.indexOf('apple') > -1) {
    return 'sheesh whats the deal with apple music'
  }

  if (message.indexOf('jeopardy') > -1) {
    return 'who was the dancer on the music video for Moments Notice'
  }

  if (message.indexOf('beatles') > -1) {
    return 'not a joke i know more music theory than the beatles'
  }

  if (message.indexOf('fall guys') > -1) {
    return 'i would love to put down my saxophone right now and play fall guys with you (my best friends)'
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
      / /g,
      '_'
    )}`
    const similarWikipediaUrl = `https://en.wikipedia.org/wiki/${similarTrigger.artist.replace(
      / /g,
      '_'
    )}`

    const otherInstruments = instruments.filter(
      (i) => i.instrument !== artistTrigger?.instrument
    )
    const otherInstrument =
      otherInstruments[randomNumber(0, otherInstruments.length - 1)]

    const responses = [
      `${artistTrigger.artist} is an awesome ${artistTrigger.instrument} player who won the best rhythm section player award at the alberta international band festival. ${artistWikipediaUrl}`,
      `${artistTrigger.artist} is a decent ${artistTrigger.instrument} player, but they're no ${similarTrigger.artist}. ${similarWikipediaUrl}`,
      `they are pieces of art on the same level as da vinci and miles davis. ${artistWikipediaUrl}`,
      `bro is famous ${artistWikipediaUrl}`,
      `they are hairy and bulging ${artistWikipediaUrl}`,
      `finally some god damn facts.\r\n${similarTrigger.artist} is a better ${similarTrigger.instrument} player. ${similarWikipediaUrl}`,
      `${artistTrigger.artist} when he sees a cute animal :heart_eyes: ${artistWikipediaUrl}`,
      `god they're all so fancily dressed. ${artistWikipediaUrl}`,
      `that man cannot play swing. check out ${similarTrigger.artist}. ${similarWikipediaUrl}`,
      `and they are such a classical ${artistTrigger.instrument} player its making me cringe when they play swing. ${artistWikipediaUrl}`,
      `but im better than them so its okay ${artistWikipediaUrl}`,
      `the ${artistTrigger.instrument} players tone oh my goddddddddddddddddddd\r\nits so gorgeous\r\nthis is now my fav ${artistTrigger.artist} song. ${artistWikipediaUrl}`,
      `2 of my favorite ${artistTrigger.instrument} players got sponsored by overwatch\r\nkind of large actually\r\n${artistWikipediaUrl} ${similarWikipediaUrl}`,
      `not me arranging a ${artistTrigger.artist} song for my jazz combo ${artistWikipediaUrl}`,
      `holy shit ~~bill clinton~~ ${artistTrigger.artist} on the ${artistTrigger.instrument} ${artistWikipediaUrl}`,
      `WHY IS ${artistTrigger.artist.toUpperCase()} PLAYING A D# OVER A B MINOR CHORD. ${similarTrigger.artist.toUpperCase()} IS BETTER ${similarWikipediaUrl}`,
      `currently plays in an all female jazz group called artemis that literaly just has some of the best jazz players of the modern day ${artistWikipediaUrl}`,
      `fun fact: they also play jazz ${artistWikipediaUrl}`,
      `well actually this one woman and ${artistTrigger.instrument} player dude did kids songs, but it was jazz and that was actualyl dope ${artistWikipediaUrl}`,
      `dont tell me you guys think ${artistTrigger.artist} can only play smooth jazz ${artistWikipediaUrl}`,
      `i saw a video of an ai music robot and like you could program it to play 50% like ${artistTrigger.artist} and 50% like ${similarTrigger.artist}`,
      `the music side is great, they got this amazing ${similarTrigger.instrument} player named ${similarTrigger.artist} who is just insane, they play ${otherInstrument} too at an insane level ${artistWikipediaUrl}`,
      `i was watching his tiny desk and was like 'what a nice young artist i wonder if he is making any more new music' ${artistWikipediaUrl}`,
      `theyve inspired me to quit music forever ${artistWikipediaUrl}`,
      `you think this 12 year old was blasting music next to you too? ${artistWikipediaUrl}`,
      `but they dont play music. try ${similarTrigger.artist} ${similarWikipediaUrl}`,
      `not a joke i know more music theory than ${artistTrigger.artist} ${artistWikipediaUrl}`,
      `OH MY GOD SAME ${artistTrigger.instrument.toUpperCase()} PLAYERS AND RHYTHM SECTION B TWITH JOEY ALEXANDER ${artistWikipediaUrl}`,
      `magical things happen on ${artistTrigger.artist}s birthday ${artistWikipediaUrl}`,
      `welp now i know youre a real ${artistTrigger.artist} fan ${artistWikipediaUrl}`,
      `so if youre a bigger ${artistTrigger.artist} fand and you even know his dad then youd know the answer too ${artistWikipediaUrl}`,
      `regular sized woman plays oversized ${artistTrigger.instrument} ${artistWikipediaUrl}`,
      `i found another piano idol ${artistWikipediaUrl}`,
      `i shjould also say that is my ${artistTrigger.instrument} teacehr ${artistWikipediaUrl}`,
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
      `${instrumentTrigger.instrument} is whack bro. ${similarTrigger.instrument} is way better`,
      `bro ${similarTrigger.artist} is the best ${instrumentTrigger.instrument} player`,
      `it plays me my jazz`,
      `incase you dont know: the highest regular note on ${instrumentTrigger.instrument} is F# (not concert), so anything above that is going into altissimo which has totally non standard fingerings which are incredibly hard to get a sound with`,
      `i TAUGHT those kids how to play ${instrumentTrigger.instrument}`,
      `‘what if i played the halo theme on every single audio filter this ${instrumentTrigger.instrument} has’`,
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
    `i hope i break my arm in a way that still lets me play piano and saxophone but i can never play overwatch against you again`,
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
