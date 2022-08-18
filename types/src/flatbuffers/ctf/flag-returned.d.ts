import * as flatbuffers from 'flatbuffers';
import { Vec2 } from '../ctf/vec2';
export declare class FlagReturned {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FlagReturned;
    static getRootAsFlagReturned(bb: flatbuffers.ByteBuffer, obj?: FlagReturned): FlagReturned;
    static getSizePrefixedRootAsFlagReturned(bb: flatbuffers.ByteBuffer, obj?: FlagReturned): FlagReturned;
    by(): string | null;
    by(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    at(obj?: Vec2): Vec2 | null;
    teamFlag(): number;
    static startFlagReturned(builder: flatbuffers.Builder): void;
    static addBy(builder: flatbuffers.Builder, byOffset: flatbuffers.Offset): void;
    static addAt(builder: flatbuffers.Builder, atOffset: flatbuffers.Offset): void;
    static addTeamFlag(builder: flatbuffers.Builder, teamFlag: number): void;
    static endFlagReturned(builder: flatbuffers.Builder): flatbuffers.Offset;
}
