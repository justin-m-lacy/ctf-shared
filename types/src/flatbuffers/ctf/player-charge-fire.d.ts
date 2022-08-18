import * as flatbuffers from 'flatbuffers';
import { Vec2 } from '../ctf/vec2';
export declare class PlayerChargeFire {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PlayerChargeFire;
    static getRootAsPlayerChargeFire(bb: flatbuffers.ByteBuffer, obj?: PlayerChargeFire): PlayerChargeFire;
    static getSizePrefixedRootAsPlayerChargeFire(bb: flatbuffers.ByteBuffer, obj?: PlayerChargeFire): PlayerChargeFire;
    who(): string | null;
    who(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    at(obj?: Vec2): Vec2 | null;
    static startPlayerChargeFire(builder: flatbuffers.Builder): void;
    static addWho(builder: flatbuffers.Builder, whoOffset: flatbuffers.Offset): void;
    static addAt(builder: flatbuffers.Builder, atOffset: flatbuffers.Offset): void;
    static endPlayerChargeFire(builder: flatbuffers.Builder): flatbuffers.Offset;
}
