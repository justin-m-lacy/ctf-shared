import * as flatbuffers from 'flatbuffers';
import { Vec2 } from '../ctf/vec2';
export declare class PlayerFire {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PlayerFire;
    static getRootAsPlayerFire(bb: flatbuffers.ByteBuffer, obj?: PlayerFire): PlayerFire;
    static getSizePrefixedRootAsPlayerFire(bb: flatbuffers.ByteBuffer, obj?: PlayerFire): PlayerFire;
    who(): string | null;
    who(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    at(obj?: Vec2): Vec2 | null;
    orientation(obj?: Vec2): Vec2 | null;
    strength(): number;
    static startPlayerFire(builder: flatbuffers.Builder): void;
    static addWho(builder: flatbuffers.Builder, whoOffset: flatbuffers.Offset): void;
    static addAt(builder: flatbuffers.Builder, atOffset: flatbuffers.Offset): void;
    static addOrientation(builder: flatbuffers.Builder, orientationOffset: flatbuffers.Offset): void;
    static addStrength(builder: flatbuffers.Builder, strength: number): void;
    static endPlayerFire(builder: flatbuffers.Builder): flatbuffers.Offset;
}
