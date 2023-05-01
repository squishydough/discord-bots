"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var discord_js_1 = require("discord.js");
var synonyms_1 = __importDefault(require("./synonyms"));
var phrases_1 = __importStar(require("./phrases"));
var descriptors_1 = __importDefault(require("./descriptors"));
/**
 * Inserts a synonym and descriptor into a phrase.
 * @param phrase The base phrase to build off of
 * @param synonym The synonym to insert into the phrase
 * @returns
 */
function buildFinalPhrase(phrase, synonym) {
    // Pick a random `synonym.replace` if it exists
    // Otherwise just use the label
    var replacement = synonym.replace
        ? synonym.replace[randomNumber(0, synonym.replace.length - 1)].toLowerCase()
        : synonym.label;
    // Immutably clone descriptors
    // This will allow us to remove descriptors as we select them
    // in order to avoid duplicates.
    var descriptorPool = __spreadArray([], descriptors_1.default, true);
    // Pick 1-2 descriptors
    var howManyDescriptors = randomNumber(1, 2);
    var selectedDescriptors = [];
    for (var i = 0; i < howManyDescriptors; i++) {
        var index = randomNumber(0, descriptorPool.length - 1);
        var selectedDescriptor = descriptorPool.splice(index, 1)[0];
        selectedDescriptors.push(selectedDescriptor);
    }
    return "".concat(phrase.replace(phrases_1.blankSpot, "".concat(selectedDescriptors.join(', '), " ").concat(replacement)));
}
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
    var invalidChannel, authorIsBot, content, identifiedSynonym, weed_terms, term_found, _i, synonyms_2, synonym, synonymLabel, foundAt, synonymFound, randomPhrase, finalPhrase;
    return __generator(this, function (_a) {
        invalidChannel = message.channel.id !== '874747632319361075' &&
            message.channel.id !== '696877172186677291' &&
            message.channel.id !== '697152467527401563' &&
            message.channel.id !== '697599842070954095';
        authorIsBot = message.author.bot && message.author.username !== 'Jordbot';
        if (authorIsBot || invalidChannel)
            return [2 /*return*/];
        content = message.content.toLowerCase();
        identifiedSynonym = null;
        weed_terms = [
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
        ];
        term_found = weed_terms.some(function (term) { return content.indexOf(term) > -1; });
        if (term_found) {
            message.reply('<:moonDank:980216144818499604> <:moonDank:980216144818499604> <:moonDank:980216144818499604>');
            return [2 /*return*/];
        }
        // Check all synonyms for a match, exit as soon as one is found
        for (_i = 0, synonyms_2 = synonyms_1.default; _i < synonyms_2.length; _i++) {
            synonym = synonyms_2[_i];
            synonymLabel = synonym.label.toLowerCase();
            foundAt = content.indexOf(synonymLabel) // Returns the index where the word was found, -1 if not found
            ;
            synonymFound = foundAt > -1;
            // If synonym is found, do some extra checking if exactMatch is true
            // If everything looks good, store synonym in identifiedSynonym and break loop
            if (synonymFound) {
                if (synonym.exactMatch && synonymLabel !== content) {
                    // Beginning of sentence
                    if (foundAt === 0) {
                        // If no space after the synonym, don't use it
                        if (content[synonymLabel.length] !== ' ') {
                            continue; // go to next synonym
                        }
                    }
                    // End of sentence
                    else if (foundAt === content.length - synonymLabel.length) {
                        // If no space before synonym, don't use it
                        if (content[foundAt - 1] !== ' ') {
                            continue; // go to next synonym
                        }
                    }
                    // Middle of sentence should be surrounded by spaces
                    else {
                        if (content[foundAt - 1] !== ' ' ||
                            content[foundAt + synonymLabel.length] !== ' ') {
                            continue; // go to next synonym
                        }
                    }
                }
                identifiedSynonym = synonym;
                break; // exit loop, don't need to look anymore
            }
        }
        // No action required if no synonym found
        if (!identifiedSynonym)
            return [2 /*return*/];
        randomPhrase = phrases_1.default[randomNumber(0, phrases_1.default.length - 1)];
        finalPhrase = buildFinalPhrase(randomPhrase, identifiedSynonym);
        // Send the response
        message.reply(finalPhrase);
        // Add some emojis to the orginal message
        message.react('🍆');
        message.react('<:feelsMoonMan:980865025394745354>');
        message.react('<:smau:815016088576065547>');
        // Timestamp and log it!
        console.info("".concat(new Date(), " - User ").concat(message.author.username, " said: \"").concat(content, "\". Matched ").concat(identifiedSynonym.label, ". Output \"").concat(finalPhrase, "\"."));
        return [2 /*return*/];
    });
}); });
// Login to Discord
client.login(process.env.TOKEN);
