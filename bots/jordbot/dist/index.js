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
    var oneOffTrigger = null;
    for (var _i = 0, oneOffTriggers_1 = triggers_1.oneOffTriggers; _i < oneOffTriggers_1.length; _i++) {
        var trigger = oneOffTriggers_1[_i];
        var triggerFound = false;
        for (var _a = 0, _b = trigger.triggers; _a < _b.length; _a++) {
            var t = _b[_a];
            var triggerFoundAt = message.indexOf(t); // Returns the index where the word was found, -1 if not found
            triggerFound = triggerFoundAt > -1;
            if (triggerFound) {
                break;
            }
        }
        if (triggerFound) {
            oneOffTrigger = trigger;
            break;
        }
    }
    if (oneOffTrigger) {
        var shouldReturnResponse = randomNumber(oneOffTrigger.lowestWeight, oneOffTrigger.highestWeight) <=
            oneOffTrigger.weight;
        if (shouldReturnResponse) {
            // Pick a random response
            return oneOffTrigger.responses[randomNumber(0, oneOffTrigger.responses.length - 1)];
        }
    }
}
/**
 * Checks if the message contains a name for a specific artist.
 * If so, it will return a response stating a different artist who plays the
 * same instrument is better, along with a link to their Wikipedia page.
 */
function checkArtistTriggers(message) {
    var artistTrigger = null;
    for (var _i = 0, artistTriggers_1 = triggers_1.artistTriggers; _i < artistTriggers_1.length; _i++) {
        var trigger = artistTriggers_1[_i];
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
        var similarArtistTriggers = triggers_1.artistTriggers.filter(function (t) {
            return t.instrument === (artistTrigger === null || artistTrigger === void 0 ? void 0 : artistTrigger.instrument) &&
                t.artist !== artistTrigger.artist;
        });
        var similarArtistTrigger = similarArtistTriggers[randomNumber(0, similarArtistTriggers.length - 1)];
        // Swap blank spaces with underscores for wikipedia urls
        var artistWikipediaUrl = "https://en.wikipedia.org/wiki/".concat(artistTrigger.artist.replace(/ /g, '_'));
        var similarArtistWikipediaUrl = "https://en.wikipedia.org/wiki/".concat(similarArtistTrigger.artist.replace(/ /g, '_'));
        // Find triggers from other instrument types other than the one that was detected.
        var otherInstrumentTriggers = triggers_1.instrumentTriggers.filter(function (i) { return i.instrument !== (artistTrigger === null || artistTrigger === void 0 ? void 0 : artistTrigger.instrument); });
        var otherInstrumentTrigger = otherInstrumentTriggers[randomNumber(0, otherInstrumentTriggers.length - 1)];
        var responses = [
            "".concat(artistTrigger.artist, " is an awesome ").concat(artistTrigger.instrument, " player who won the best rhythm section player award at the alberta international band festival. ").concat(artistWikipediaUrl),
            "".concat(artistTrigger.artist, " is a decent ").concat(artistTrigger.instrument, " player, but they're no ").concat(similarArtistTrigger.artist, ". ").concat(similarArtistWikipediaUrl),
            "they are pieces of art on the same level as da vinci and miles davis. ".concat(artistWikipediaUrl),
            "bro is famous ".concat(artistWikipediaUrl),
            "they are hairy and bulging ".concat(artistWikipediaUrl),
            "finally some god damn facts.\r\n".concat(similarArtistTrigger.artist, " is a better ").concat(similarArtistTrigger.instrument, " player. ").concat(similarArtistWikipediaUrl),
            "".concat(artistTrigger.artist, " when he sees a cute animal :heart_eyes: ").concat(artistWikipediaUrl),
            "god they're all so fancily dressed. ".concat(artistWikipediaUrl),
            "that man cannot play swing. check out ".concat(similarArtistTrigger.artist, ". ").concat(similarArtistWikipediaUrl),
            "and they are such a classical ".concat(artistTrigger.instrument, " player its making me cringe when they play swing. ").concat(artistWikipediaUrl),
            "but im better than them so its okay ".concat(artistWikipediaUrl),
            "the ".concat(artistTrigger.instrument, " players tone oh my goddddddddddddddddddd\r\nits so gorgeous\r\nthis is now my fav ").concat(artistTrigger.artist, " song. ").concat(artistWikipediaUrl),
            "2 of my favorite ".concat(artistTrigger.instrument, " players got sponsored by overwatch\r\nkind of large actually\r\n").concat(artistWikipediaUrl, " ").concat(similarArtistWikipediaUrl),
            "not me arranging a ".concat(artistTrigger.artist, " song for my jazz combo ").concat(artistWikipediaUrl),
            "holy shit ~~bill clinton~~ ".concat(artistTrigger.artist, " on the ").concat(artistTrigger.instrument, " ").concat(artistWikipediaUrl),
            "WHY IS ".concat(artistTrigger.artist.toUpperCase(), " PLAYING A D# OVER A B MINOR CHORD. ").concat(similarArtistTrigger.artist.toUpperCase(), " IS BETTER ").concat(similarArtistWikipediaUrl),
            "currently plays in an all female jazz group called artemis that literaly just has some of the best jazz players of the modern day ".concat(artistWikipediaUrl),
            "fun fact: they also play jazz ".concat(artistWikipediaUrl),
            "well actually this one woman and ".concat(artistTrigger.instrument, " player dude did kids songs, but it was jazz and that was actualyl dope ").concat(artistWikipediaUrl),
            "dont tell me you guys think ".concat(artistTrigger.artist, " can only play smooth jazz ").concat(artistWikipediaUrl),
            "i saw a video of an ai music robot and like you could program it to play 50% like ".concat(artistTrigger.artist, " and 50% like ").concat(similarArtistTrigger.artist),
            "the music side is great, they got this amazing ".concat(similarArtistTrigger.instrument, " player named ").concat(similarArtistTrigger.artist, " who is just insane, they play ").concat(otherInstrumentTrigger, " too at an insane level ").concat(artistWikipediaUrl),
            "i was watching his tiny desk and was like 'what a nice young artist i wonder if he is making any more new music' ".concat(artistWikipediaUrl),
            "theyve inspired me to quit music forever ".concat(artistWikipediaUrl),
            "you think this 12 year old was blasting music next to you too? ".concat(artistWikipediaUrl),
            "but they dont play music. try ".concat(similarArtistTrigger.artist, " ").concat(similarArtistWikipediaUrl),
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
    for (var _i = 0, instrumentTriggers_1 = triggers_1.instrumentTriggers; _i < instrumentTriggers_1.length; _i++) {
        var trigger = instrumentTriggers_1[_i];
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
        var similarInstrumentTriggers = triggers_1.instrumentTriggers.filter(function (trigger) { return trigger.instrument !== (instrumentTrigger === null || instrumentTrigger === void 0 ? void 0 : instrumentTrigger.instrument); });
        var similarInstrumentTrigger = similarInstrumentTriggers[randomNumber(0, similarInstrumentTriggers.length - 1)];
        var responses = [
            "".concat(instrumentTrigger.instrument, " is a dogwater instrument. Try learning ").concat(similarInstrumentTrigger.instrument, " if you want a real jazz instrument."),
            "".concat(instrumentTrigger.instrument, " is whack bro. ").concat(similarInstrumentTrigger.instrument, " is way better"),
            "bro ".concat(similarInstrumentTrigger.artist, " is the best ").concat(instrumentTrigger.instrument, " player"),
            "it plays me my jazz",
            "incase you dont know: the highest regular note on ".concat(instrumentTrigger.instrument, " is F# (not concert), so anything above that is going into altissimo which has totally non standard fingerings which are incredibly hard to get a sound with"),
            "i TAUGHT those kids how to play ".concat(instrumentTrigger.instrument),
            "\u2018what if i played the halo theme on every single audio filter this ".concat(instrumentTrigger.instrument, " has\u2019"),
            "i hope i break my arm in a way that still lets me play ".concat(instrumentTrigger.instrument, " and ").concat(similarInstrumentTrigger.instrument, " but i can never play overwatch against you again"),
        ];
        // Send the response
        return responses[randomNumber(0, responses.length - 1)];
    }
}
function getRandomResponse() {
    var responses = [
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
        "god damn thats pretty",
        "thats actuall wild though wtf",
        "why the fuck is he so committed",
    ];
    var random = randomNumber(0, 100);
    var weight = 3;
    if (random <= weight) {
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
        randomResponse = getRandomResponse();
        if (randomResponse) {
            message.reply(randomResponse);
            return [2 /*return*/];
        }
        return [2 /*return*/];
    });
}); });
// Login to Discord
client.login(process.env.TOKEN);
