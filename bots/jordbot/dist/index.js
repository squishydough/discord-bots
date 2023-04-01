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
 * @param min Lower bounds
 * @param max Upper bounds
 * @returns
 */
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/** Discord.js client */
var client = new discord_js_1.Client({
    intents: [discord_js_1.Intents.FLAGS.GUILDS, discord_js_1.Intents.FLAGS.GUILD_MESSAGES],
});
// When the client is ready, run this code (only once)
client.once('ready', function () {
    console.info("".concat(new Date(), " - Moon wif cap is ready!"));
});
// When a message is received, run this code
client.on('messageCreate', function (message) { return __awaiter(void 0, void 0, void 0, function () {
    var content, identifiedTrigger, _i, triggers_2, trigger, instrument, artist, instrumentFoundAt, artistFoundAt, triggerFound, wikipediaUrl, similarArtists, similarArtist;
    return __generator(this, function (_a) {
        // Exit if message is from a bot
        if (message.author.bot)
            return [2 /*return*/];
        content = message.content.toLowerCase();
        identifiedTrigger = null;
        // Check all triggers for a match, exit as soon as one is found
        for (_i = 0, triggers_2 = triggers_1.triggers; _i < triggers_2.length; _i++) {
            trigger = triggers_2[_i];
            instrument = trigger.instrument.toLowerCase();
            artist = trigger.artist.toLowerCase();
            instrumentFoundAt = content.indexOf(instrument) // Returns the index where the word was found, -1 if not found
            ;
            artistFoundAt = content.indexOf(artist) // Returns the index where the word was found, -1 if not found
            ;
            triggerFound = instrumentFoundAt > -1 || artistFoundAt > -1;
            if (triggerFound) {
                identifiedTrigger = trigger;
                break; // exit loop, don't need to look anymore
            }
        }
        // No action required if no trigger found
        if (!identifiedTrigger)
            return [2 /*return*/];
        wikipediaUrl = "https://en.wikipedia.org/wiki/".concat(identifiedTrigger.artist.replace(' ', '_'));
        similarArtists = triggers_1.triggers.filter(function (t) {
            return t.instrument === (identifiedTrigger === null || identifiedTrigger === void 0 ? void 0 : identifiedTrigger.instrument) &&
                t.artist !== (identifiedTrigger === null || identifiedTrigger === void 0 ? void 0 : identifiedTrigger.artist);
        });
        similarArtist = similarArtists[randomNumber(0, similarArtists.length - 1)];
        // Send the response
        message.reply("\n    ".concat(identifiedTrigger.artist, " is a decent ").concat(identifiedTrigger.instrument, " player, but they're no ").concat(similarArtist.artist, ".\n    Check out ").concat(similarArtist.artist, "'s Wikipedia page: ").concat(wikipediaUrl, "\n  "));
        return [2 /*return*/];
    });
}); });
// Login to Discord
client.login(process.env.TOKEN);
