import * as flatbuffers from 'flatbuffers';
export declare class TeamWon {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TeamWon;
    static getRootAsTeamWon(bb: flatbuffers.ByteBuffer, obj?: TeamWon): TeamWon;
    static getSizePrefixedRootAsTeamWon(bb: flatbuffers.ByteBuffer, obj?: TeamWon): TeamWon;
    winner(): number;
    scores(index: number): number | null;
    scoresLength(): number;
    scoresArray(): Uint32Array | null;
    static startTeamWon(builder: flatbuffers.Builder): void;
    static addWinner(builder: flatbuffers.Builder, winner: number): void;
    static addScores(builder: flatbuffers.Builder, scoresOffset: flatbuffers.Offset): void;
    static createScoresVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createScoresVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startScoresVector(builder: flatbuffers.Builder, numElems: number): void;
    static endTeamWon(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTeamWon(builder: flatbuffers.Builder, winner: number, scoresOffset: flatbuffers.Offset): flatbuffers.Offset;
}
