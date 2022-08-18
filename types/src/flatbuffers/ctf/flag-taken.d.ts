import * as flatbuffers from 'flatbuffers';
import { Vec2 } from '../ctf/vec2';
export declare class FlagTaken {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FlagTaken;
    static getRootAsFlagTaken(bb: flatbuffers.ByteBuffer, obj?: FlagTaken): FlagTaken;
    static getSizePrefixedRootAsFlagTaken(bb: flatbuffers.ByteBuffer, obj?: FlagTaken): FlagTaken;
    who(): string | null;
    who(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    flagTeam(): number;
    at(obj?: Vec2): Vec2 | null;
    static startFlagTaken(builder: flatbuffers.Builder): void;
    static addWho(builder: flatbuffers.Builder, whoOffset: flatbuffers.Offset): void;
    static addFlagTeam(builder: flatbuffers.Builder, flagTeam: number): void;
    static addAt(builder: flatbuffers.Builder, atOffset: flatbuffers.Offset): void;
    static endFlagTaken(builder: flatbuffers.Builder): flatbuffers.Offset;
}
