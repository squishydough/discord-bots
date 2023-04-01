"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var discord_js_1 = require("discord.js");
var triggers_1 = require("./triggers");
/**
 * Picks a random number between two numbers
 */
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * Checks if the message contains a one-off trigger.
 */
function checkOneOffTriggers(message) {
    if (message.indexOf('jazz') > -1) {
        var responses = [
            'but if you dont like jazz then have fun driving for hours and the only thing you can see is grass everywhere',
            'im a jazz guys actually',
            'I LOVE JAZZ SO MUCH OMG',
            'i live in a small town there are no jazz here ;(',
            'am i allowed to talk ab music in here',
        ];
        return responses[randomNumber(0, responses.length - 1)];
    }
    if (message.indexOf('miles davis') > -1) {
        var weight = 6;
        var random = randomNumber(1, 10);
        if (random < weight) {
            return 'https://i.imgur.com/jSO2YvA.png';
        }
    }
    if (message.indexOf('shoes') > -1) {
        return 'https://i.imgur.com/Epm6dQl.png';
    }
    if (message.indexOf('joey alexander') > -1) {
        var weight = 6;
        var random = randomNumber(1, 10);
        if (random < weight) {
            return 'For more info about Joey Alexander, greatest jazz pianist of our time, consult with Joey Alexander Fan Club president (aka Head Joey) SquishyDough, and not some other imposter that rhymes with Bordo. https://i.guim.co.uk/img/media/6c45f0f6188c6b2ec1b357d74058588c00706c39/0_91_2696_1618/master/2696.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=ef8a45e1269f746a73aa5d322874121c';
        }
    }
    if (message.indexOf('chess') > -1) {
        var weight = 3;
        var random = randomNumber(1, 10);
        if (random < weight) {
            return 'YOU WONT LAST 0.0035 SECONDS PLAYING THIS GAME';
        }
    }
    if (message.indexOf('squirrel') > -1) {
        return 'squirrels arent real';
    }
    if (message.indexOf('surefour') > -1) {
        return 'bro surefour is from calgary how cool is that\r\nme and him literally went to the same laser tag place when we were little\r\nnot at the same time but still';
    }
    if (message.indexOf('legs') > -1) {
        return 'crazy calves bro\r\nim not jealous at all :ANGRYCRYING:';
    }
    if (message.indexOf('pokemon') > -1) {
        return 'i forget how to fuxkint spell it';
    }
    if (message.indexOf('party') > -1) {
        return 'invite me next time :heart_eyes: :heart_eyes:';
    }
    if (message.indexOf('congrats') > -1 ||
        message.indexOf('congratulations') > -1 ||
        message.indexOf('grats') > -1) {
        var responses = [
            'Thank you so much mr. Moderator. I deeply apperciate your congratulationsand will cherish this moment in my memories as a great moment and I respect you greatly.',
            'i cant tell what is genuine from you anymore\r\nbut thanks!!',
            'and the michael jackson insta account is celebrating by giving away cds lmao',
        ];
        return responses[randomNumber(0, responses.length - 1)];
    }
    if (message.indexOf('among us') > -1) {
        return 'among us';
    }
    if (message.indexOf('donald glover') > -1 ||
        message.indexOf('childish gambino') > -1) {
        return 'WAIT DONALD GLOVER IS CHILDISH GAMBINO??\r\nWHY DOES DONALD GLOVER DO EVERYTHING\r\nliterally fucking writes acts comdeians and then turns around and makes bangers with 1.2 billion streams\r\nand has won 5 grammys???\r\ngod dammit\r\ni need to jus stop';
    }
    if (message.indexOf('squishydough') > -1) {
        var responses = [
            'squish you enhance my qualities',
            'i want to go to christmas dinner with squishydough ☹️',
        ];
        var weight = 2;
        var random = randomNumber(1, 10);
        if (random < weight) {
            return responses[randomNumber(0, responses.length - 1)];
        }
    }
    if (message.indexOf('burger') > -1) {
        return 'they put too many onion on my quarter pounder with cheese and now i feel icky ☹️';
    }
    if (message.indexOf('dog') > -1) {
        return 'i resent this lack of respect for me. i always put ketchup and mustard on my dogs';
    }
    if (message.indexOf('hotdog') > -1 || message.indexOf('hot dog') > -1) {
        var responses = [
            'hot dog lore',
            'just saw a place selling a poutine dog\r\nwhich is a hot dog with gracy and cheese on',
        ];
        return responses[randomNumber(0, responses.length - 1)];
    }
    if (message.indexOf('thankful') > -1 || message.indexOf('grateful') > -1) {
        return 'im thankful for your cute face';
    }
    if (message.indexOf('onnen') > -1) {
        var weight = 2;
        var random = randomNumber(1, 10);
        if (random < weight) {
            return 'happy thanksigiving @Onnen#7393';
        }
    }
    if (message.indexOf('mansplain') > -1) {
        return 'IT WAS JUST A DISCLAIMER I DIDNT MEAN TO MANSPLAIN';
    }
    if (message.indexOf('stupid') > -1) {
        var weight = 2;
        var random = randomNumber(1, 10);
        if (random < weight) {
            return "\u201CIt's not just that I'm stupid; it's that I'm just smart enough to know how stupid I am. I wish I weren't so stupid. Or that I were stupider.\u201D - John Hall";
        }
    }
    if (message.indexOf('egg') > -1) {
        return 'ILL SHOVEL THE HARD BOILDE EGGS INTO MY MOUTH UNTIL I DIE';
    }
    if (message.indexOf('food') > -1 || message.indexOf('hungry') > -1) {
        var responses = [
            'AT A TABLE\r\nWE ARE EATINGN',
            'ILL COOK 5 AND EAT EACH ONE IN A BITE',
        ];
        var weight = 2;
        var random = randomNumber(1, 10);
        if (random < weight) {
            return responses[randomNumber(0, responses.length - 1)];
        }
    }
    if (message.indexOf('vegetable') > -1) {
        return 'i dojt eat vegetabled';
    }
    if (message.indexOf('breakfast') > -1) {
        return 'OMG I WAS JUST EATING BREAKFAST TOO';
    }
    if (message.indexOf('dairy queen') > -1) {
        return 'bro i havent had a dairy queen salad in a lonngass time';
    }
    if (message.indexOf('musk') > -1) {
        return 'musk fetish 😨😨😨💀💀';
    }
    if (message.indexOf('dj khaled') > -1) {
        return 'god dj khaled is so cringe';
    }
    if (message.indexOf('mercy') > -1) {
        return 'bro whats this gotta do with my support';
    }
    if (message.indexOf('toronto') > -1 || message.indexOf('montreal') > -1) {
        return 'toronto and montreal are the only decent jazz scenes';
    }
    if (message.indexOf('alberta') > -1) {
        return 'only cool thing here is the jazz musicians';
    }
    if (message.indexOf('club') > -1) {
        return 'theres this place called the yardbirde suite its a jazz club';
    }
    if (message.indexOf('camp') > -1) {
        return 'i thought it was supposed to be like a jazz camp with a bunch of young whippersnappers\r\nbut 4/9 people are at least 40\r\n1 of the guys is literally 72 fucking years old';
    }
    if (message.indexOf('anime') > -1) {
        return 'its an anime about jazz';
    }
    if (message.indexOf('league of legends') > -1) {
        return 'you should play jazz music instead';
    }
    if (message.indexOf('michael jackson') > -1) {
        var responses = [
            'michael jackson died on the same day joey alexander was born',
            'i was reading a story about someone saying they went to high school with michael jackson and then i realized it was probably fanfiction',
            'economy collapsed then michael jackson died',
            'bro did you know that kid is the godfather of 2 of michael jacksons kids',
            'i just gave up and now listening to michael jackson',
            'someone in my game yesterday told me michael jackson was overrated',
        ];
        return responses[randomNumber(0, responses.length - 1)];
    }
    if (message.indexOf('classical') > -1) {
        return 'not much classical music i can actually jam out to but this is it';
    }
    if (message.indexOf('apple') > -1) {
        return 'sheesh whats the deal with apple music';
    }
    if (message.indexOf('jeopardy') > -1) {
        return 'who was the dancer on the music video for Moments Notice';
    }
    if (message.indexOf('beatles') > -1) {
        return 'not a joke i know more music theory than the beatles';
    }
    if (message.indexOf('fall guys') > -1) {
        return 'i would love to put down my saxophone right now and play fall guys with you (my best friends)';
    }
    if (message.indexOf('shorts') > -1) {
        return "but also the first thing i think when i see those shorts is 'squishy wears those'";
    }
}
/**
 * Checks if the message contains a name for a specific artist.
 * If so, it will return a response stating a different artist who plays the
 * same instrument is better, along with a link to their Wikipedia page.
 */
function checkArtistTriggers(message) {
    var artistTrigger = null;
    for (var _i = 0, triggers_2 = triggers_1.triggers; _i < triggers_2.length; _i++) {
        var trigger = triggers_2[_i];
        var artist = trigger.artist.toLowerCase();
        var artistFoundAt = message.indexOf(artist); // Returns the index where the word was found, -1 if not found
        var triggerFound = artistFoundAt > -1;
        if (triggerFound) {
            artistTrigger = trigger;
            break; // exit loop, don't need to look anymore
        }
    }
    // No action required if no trigger found
    if (artistTrigger) {
        // Find triggers from the same instrument type
        var similarTriggers = triggers_1.triggers.filter(function (t) {
            return t.instrument === (artistTrigger === null || artistTrigger === void 0 ? void 0 : artistTrigger.instrument) &&
                t.artist !== artistTrigger.artist;
        });
        var similarTrigger = similarTriggers[randomNumber(0, similarTriggers.length - 1)];
        // Wikipedia link
        var artistWikipediaUrl = "https://en.wikipedia.org/wiki/".concat(artistTrigger.artist.replace(/ /g, '_'));
        var similarWikipediaUrl = "https://en.wikipedia.org/wiki/".concat(similarTrigger.artist.replace(/ /g, '_'));
        var otherInstruments = triggers_1.instruments.filter(function (i) { return i.instrument !== (artistTrigger === null || artistTrigger === void 0 ? void 0 : artistTrigger.instrument); });
        var otherInstrument = otherInstruments[randomNumber(0, otherInstruments.length - 1)];
        var responses = [
            "".concat(artistTrigger.artist, " is an awesome ").concat(artistTrigger.instrument, " player who won the best rhythm section player award at the alberta international band festival. ").concat(artistWikipediaUrl),
            "".concat(artistTrigger.artist, " is a decent ").concat(artistTrigger.instrument, " player, but they're no ").concat(similarTrigger.artist, ". ").concat(similarWikipediaUrl),
            "they are pieces of art on the same level as da vinci and miles davis. ".concat(artistWikipediaUrl),
            "bro is famous ".concat(artistWikipediaUrl),
            "they are hairy and bulging ".concat(artistWikipediaUrl),
            "finally some god damn facts.\r\n".concat(similarTrigger.artist, " is a better ").concat(similarTrigger.instrument, " player. ").concat(similarWikipediaUrl),
            "".concat(artistTrigger.artist, " when he sees a cute animal :heart_eyes: ").concat(artistWikipediaUrl),
            "god they're all so fancily dressed. ".concat(artistWikipediaUrl),
            "that man cannot play swing. check out ".concat(similarTrigger.artist, ". ").concat(similarWikipediaUrl),
            "and they are such a classical ".concat(artistTrigger.instrument, " player its making me cringe when they play swing. ").concat(artistWikipediaUrl),
            "but im better than them so its okay ".concat(artistWikipediaUrl),
            "the ".concat(artistTrigger.instrument, " players tone oh my goddddddddddddddddddd\r\nits so gorgeous\r\nthis is now my fav ").concat(artistTrigger.artist, " song. ").concat(artistWikipediaUrl),
            "2 of my favorite ".concat(artistTrigger.instrument, " players got sponsored by overwatch\r\nkind of large actually\r\n").concat(artistWikipediaUrl, " ").concat(similarWikipediaUrl),
            "not me arranging a ".concat(artistTrigger.artist, " song for my jazz combo ").concat(artistWikipediaUrl),
            "holy shit ~~bill clinton~~ ".concat(artistTrigger.artist, " on the ").concat(artistTrigger.instrument, " ").concat(artistWikipediaUrl),
            "WHY IS ".concat(artistTrigger.artist.toUpperCase(), " PLAYING A D# OVER A B MINOR CHORD. ").concat(similarTrigger.artist.toUpperCase(), " IS BETTER ").concat(similarWikipediaUrl),
            "currently plays in an all female jazz group called artemis that literaly just has some of the best jazz players of the modern day ".concat(artistWikipediaUrl),
            "fun fact: they also play jazz ".concat(artistWikipediaUrl),
            "well actually this one woman and ".concat(artistTrigger.instrument, " player dude did kids songs, but it was jazz and that was actualyl dope ").concat(artistWikipediaUrl),
            "dont tell me you guys think ".concat(artistTrigger.artist, " can only play smooth jazz ").concat(artistWikipediaUrl),
            "i saw a video of an ai music robot and like you could program it to play 50% like ".concat(artistTrigger.artist, " and 50% like ").concat(similarTrigger.artist),
            "the music side is great, they got this amazing ".concat(similarTrigger.instrument, " player named ").concat(similarTrigger.artist, " who is just insane, they play ").concat(otherInstrument, " too at an insane level ").concat(artistWikipediaUrl),
            "i was watching his tiny desk and was like 'what a nice young artist i wonder if he is making any more new music' ".concat(artistWikipediaUrl),
            "theyve inspired me to quit music forever ".concat(artistWikipediaUrl),
            "you think this 12 year old was blasting music next to you too? ".concat(artistWikipediaUrl),
            "but they dont play music. try ".concat(similarTrigger.artist, " ").concat(similarWikipediaUrl),
            "not a joke i know more music theory than ".concat(artistTrigger.artist, " ").concat(artistWikipediaUrl),
            "OH MY GOD SAME ".concat(artistTrigger.instrument.toUpperCase(), " PLAYERS AND RHYTHM SECTION B TWITH JOEY ALEXANDER ").concat(artistWikipediaUrl),
            "magical things happen on ".concat(artistTrigger.artist, "s birthday ").concat(artistWikipediaUrl),
            "welp now i know youre a real ".concat(artistTrigger.artist, " fan ").concat(artistWikipediaUrl),
            "so if youre a bigger ".concat(artistTrigger.artist, " fand and you even know his dad then youd know the answer too ").concat(artistWikipediaUrl),
            "regular sized woman plays oversized ".concat(artistTrigger.instrument, " ").concat(artistWikipediaUrl),
            "i found another piano idol ".concat(artistWikipediaUrl),
            "i shjould also say that is my ".concat(artistTrigger.instrument, " teacehr ").concat(artistWikipediaUrl),
        ];
        // Send the response
        return responses[randomNumber(0, responses.length - 1)];
    }
}
/**
 * Checks if the message contains a name for a specific instrument.
 * If so, it will return a response stating the instrument is dogwater,
 * and recommend a different instrument.
 */
function checkInstrumentTriggers(message) {
    var instrumentTrigger = null;
    for (var _i = 0, instruments_1 = triggers_1.instruments; _i < instruments_1.length; _i++) {
        var trigger = instruments_1[_i];
        var instrument = trigger.instrument.toLowerCase();
        var instrumentFoundAt = message.indexOf(instrument); // Returns the index where the word was found, -1 if not found
        var triggerFound = instrumentFoundAt > -1;
        if (triggerFound) {
            instrumentTrigger = trigger;
            break; // exit loop, don't need to look anymore
        }
    }
    // No action required if no trigger found
    if (instrumentTrigger) {
        // Find triggers from the same instrument type
        var similarTriggers = triggers_1.instruments.filter(function (trigger) { return trigger.instrument !== (instrumentTrigger === null || instrumentTrigger === void 0 ? void 0 : instrumentTrigger.instrument); });
        var similarTrigger = similarTriggers[randomNumber(0, similarTriggers.length - 1)];
        var responses = [
            "".concat(instrumentTrigger.instrument, " is a dogwater instrument. Try learning ").concat(similarTrigger.instrument, " if you want a real jazz instrument."),
            "".concat(instrumentTrigger.instrument, " is whack bro. ").concat(similarTrigger.instrument, " is way better"),
            "bro ".concat(similarTrigger.artist, " is the best ").concat(instrumentTrigger.instrument, " player"),
            "it plays me my jazz",
            "incase you dont know: the highest regular note on ".concat(instrumentTrigger.instrument, " is F# (not concert), so anything above that is going into altissimo which has totally non standard fingerings which are incredibly hard to get a sound with"),
            "i TAUGHT those kids how to play ".concat(instrumentTrigger.instrument),
            "\u2018what if i played the halo theme on every single audio filter this ".concat(instrumentTrigger.instrument, " has\u2019"),
        ];
        // Send the response
        return responses[randomNumber(0, responses.length - 1)];
    }
}
function respondRandomly() {
    var responses = [
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
        "you can just search 'land of the misty giants'\r\nor my name when i show up\r\nill lyk when im up",
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
        "if i looked up 'Joey Alexander Fan Cublets' then why did the link titled 'Joey Alexander Fan Cublets' not pop up",
        "i hope i break my arm in a way that still lets me play piano and saxophone but i can never play overwatch against you again",
    ];
    var random = randomNumber(0, 100);
    var weight = 2;
    if (random < weight) {
        return responses[randomNumber(0, responses.length - 1)];
    }
}
/** Discord.js client */
var client = new discord_js_1.Client({
    intents: [discord_js_1.Intents.FLAGS.GUILDS, discord_js_1.Intents.FLAGS.GUILD_MESSAGES],
});
// When the client is ready, run this code (only once)
client.once('ready', function () {
    console.info("".concat(new Date(), " - Jordbot is ready!"));
});
// When a message is received, run this code
client.on('messageCreate', function (message) { return __awaiter(void 0, void 0, void 0, function () {
    var content, oneOffResponse, artistResponse, instrumentResponse, randomResponse;
    return __generator(this, function (_a) {
        // Exit if message is from a bot
        if (message.author.bot)
            return [2 /*return*/];
        content = message.content.toLowerCase();
        oneOffResponse = checkOneOffTriggers(content);
        if (oneOffResponse) {
            message.reply(oneOffResponse);
            return [2 /*return*/];
        }
        artistResponse = checkArtistTriggers(content);
        if (artistResponse) {
            message.reply(artistResponse);
            return [2 /*return*/];
        }
        instrumentResponse = checkInstrumentTriggers(content);
        if (instrumentResponse) {
            message.reply(instrumentResponse);
            return [2 /*return*/];
        }
        randomResponse = respondRandomly();
        if (randomResponse) {
            message.reply(randomResponse);
            return [2 /*return*/];
        }
        return [2 /*return*/];
    });
}); });
// Login to Discord
client.login(process.env.TOKEN);
