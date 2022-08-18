import * as flatbuffers from 'flatbuffers';
import { Vec2 } from '../ctf/vec2';
export declare class PlayerRespawn {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PlayerRespawn;
    static getRootAsPlayerRespawn(bb: flatbuffers.ByteBuffer, obj?: PlayerRespawn): PlayerRespawn;
    static getSizePrefixedRootAsPlayerRespawn(bb: flatbuffers.ByteBuffer, obj?: PlayerRespawn): PlayerRespawn;
    who(): string | null;
    who(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    at(obj?: Vec2): Vec2 | null;
    static startPlayerRespawn(builder: flatbuffers.Builder): void;
    static addWho(builder: flatbuffers.Builder, whoOffset: flatbuffers.Offset): void;
    static addAt(builder: flatbuffers.Builder, atOffset: flatbuffers.Offset): void;
    static endPlayerRespawn(builder: flatbuffers.Builder): flatbuffers.Offset;
}
