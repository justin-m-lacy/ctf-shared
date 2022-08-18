import * as flatbuffers from 'flatbuffers';
import { Vec2 } from '../ctf/vec2';
export declare class FlagDropped {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FlagDropped;
    static getRootAsFlagDropped(bb: flatbuffers.ByteBuffer, obj?: FlagDropped): FlagDropped;
    static getSizePrefixedRootAsFlagDropped(bb: flatbuffers.ByteBuffer, obj?: FlagDropped): FlagDropped;
    by(): string | null;
    by(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    at(obj?: Vec2): Vec2 | null;
    flagTeam(): number;
    static startFlagDropped(builder: flatbuffers.Builder): void;
    static addBy(builder: flatbuffers.Builder, byOffset: flatbuffers.Offset): void;
    static addAt(builder: flatbuffers.Builder, atOffset: flatbuffers.Offset): void;
    static addFlagTeam(builder: flatbuffers.Builder, flagTeam: number): void;
    static endFlagDropped(builder: flatbuffers.Builder): flatbuffers.Offset;
}
