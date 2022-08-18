import * as flatbuffers from 'flatbuffers';
import { Vec2 } from '../ctf/vec2';
export declare class PlayerKilled {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PlayerKilled;
    static getRootAsPlayerKilled(bb: flatbuffers.ByteBuffer, obj?: PlayerKilled): PlayerKilled;
    static getSizePrefixedRootAsPlayerKilled(bb: flatbuffers.ByteBuffer, obj?: PlayerKilled): PlayerKilled;
    who(): string | null;
    who(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    at(obj?: Vec2): Vec2 | null;
    by(): string | null;
    by(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startPlayerKilled(builder: flatbuffers.Builder): void;
    static addWho(builder: flatbuffers.Builder, whoOffset: flatbuffers.Offset): void;
    static addAt(builder: flatbuffers.Builder, atOffset: flatbuffers.Offset): void;
    static addBy(builder: flatbuffers.Builder, byOffset: flatbuffers.Offset): void;
    static endPlayerKilled(builder: flatbuffers.Builder): flatbuffers.Offset;
}
