// Sometimes we may not want a term to always trigger a response.
// In those cases, we can use a weight to randomize whether it actually triggers.
//
// So if the weight is a number between 1 and 10, such as 6, it will trigger if a
// random between 1 and 10 is 6 or less, i.e. a 60% chance.
type Weight = {
  lowestWeight: number
  highestWeight: number
  weight: number
}

export const DEFAULT_WEIGHT: Weight = {
  lowestWeight: 1,
  highestWeight: 100,
  weight: 20,
}

export const RANDOM_RESPONSE_WEIGHT: Weight = {
  lowestWeight: 1,
  highestWeight: 100,
  weight: 2,
}

export const ARTIST_TRIGGER_WEIGHT: Weight = {
  lowestWeight: 1,
  highestWeight: 100,
  weight: 20,
}

export const INSTRUMENT_TRIGGER_WEIGHT: Weight = {
  lowestWeight: 1,
  highestWeight: 100,
  weight: 20,
}
