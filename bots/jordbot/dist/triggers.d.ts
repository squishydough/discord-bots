export declare type ArtistInstrumentTrigger = {
    instrument: string;
    artist: string;
};
export declare const artistTriggers: ArtistInstrumentTrigger[];
/**
 * One trigger for each instrument, used in instrument triggered responses
 */
export declare const instrumentTriggers: ArtistInstrumentTrigger[];
export declare type OneOffTrigger = {
    triggers: string[];
    responses: string[];
    weight: number;
    lowestWeight: number;
    highestWeight: number;
};
export declare const oneOffTriggers: OneOffTrigger[];
//# sourceMappingURL=triggers.d.ts.map