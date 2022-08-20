import * as flatbuffers from 'flatbuffers';
export declare class MatchEnd {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MatchEnd;
    static getRootAsMatchEnd(bb: flatbuffers.ByteBuffer, obj?: MatchEnd): MatchEnd;
    static getSizePrefixedRootAsMatchEnd(bb: flatbuffers.ByteBuffer, obj?: MatchEnd): MatchEnd;
    winner(): number;
    scores(index: number): number | null;
    scoresLength(): number;
    scoresArray(): Uint32Array | null;
    static startMatchEnd(builder: flatbuffers.Builder): void;
    static addWinner(builder: flatbuffers.Builder, winner: number): void;
    static addScores(builder: flatbuffers.Builder, scoresOffset: flatbuffers.Offset): void;
    static createScoresVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createScoresVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startScoresVector(builder: flatbuffers.Builder, numElems: number): void;
    static endMatchEnd(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createMatchEnd(builder: flatbuffers.Builder, winner: number, scoresOffset: flatbuffers.Offset): flatbuffers.Offset;
}
