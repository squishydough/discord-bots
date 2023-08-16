"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ONE_OFF_TRIGGER_WEIGHT = exports.INSTRUMENT_TRIGGER_WEIGHT = exports.ARTIST_TRIGGER_WEIGHT = exports.RANDOM_RESPONSE_WEIGHT = void 0;
// Before returning a response, the bot will generate a random
// number between 1 and 100. If the number is less than or equal
// to the weight, the response will be returned. Otherwise, no
// response will be returned.
var DEFAULT_WEIGHT = 15;
exports.RANDOM_RESPONSE_WEIGHT = 3;
exports.ARTIST_TRIGGER_WEIGHT = 100;
exports.INSTRUMENT_TRIGGER_WEIGHT = DEFAULT_WEIGHT;
exports.ONE_OFF_TRIGGER_WEIGHT = DEFAULT_WEIGHT;
