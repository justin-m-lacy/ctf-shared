import * as flatbuffers from 'flatbuffers';
export declare class TeamScored {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TeamScored;
    static getRootAsTeamScored(bb: flatbuffers.ByteBuffer, obj?: TeamScored): TeamScored;
    static getSizePrefixedRootAsTeamScored(bb: flatbuffers.ByteBuffer, obj?: TeamScored): TeamScored;
    who(): string | null;
    who(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    team(): number;
    flagTeam(): number;
    scores(index: number): number | null;
    scoresLength(): number;
    scoresArray(): Uint32Array | null;
    static startTeamScored(builder: flatbuffers.Builder): void;
    static addWho(builder: flatbuffers.Builder, whoOffset: flatbuffers.Offset): void;
    static addTeam(builder: flatbuffers.Builder, team: number): void;
    static addFlagTeam(builder: flatbuffers.Builder, flagTeam: number): void;
    static addScores(builder: flatbuffers.Builder, scoresOffset: flatbuffers.Offset): void;
    static createScoresVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createScoresVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startScoresVector(builder: flatbuffers.Builder, numElems: number): void;
    static endTeamScored(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTeamScored(builder: flatbuffers.Builder, whoOffset: flatbuffers.Offset, team: number, flagTeam: number, scoresOffset: flatbuffers.Offset): flatbuffers.Offset;
}
