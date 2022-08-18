import * as flatbuffers from 'flatbuffers';
import { Vec2 } from '../ctf/vec2';
export declare class PlayerMove {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PlayerMove;
    static getRootAsPlayerMove(bb: flatbuffers.ByteBuffer, obj?: PlayerMove): PlayerMove;
    static getSizePrefixedRootAsPlayerMove(bb: flatbuffers.ByteBuffer, obj?: PlayerMove): PlayerMove;
    who(): string | null;
    who(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    to(obj?: Vec2): Vec2 | null;
    static startPlayerMove(builder: flatbuffers.Builder): void;
    static addWho(builder: flatbuffers.Builder, whoOffset: flatbuffers.Offset): void;
    static addTo(builder: flatbuffers.Builder, toOffset: flatbuffers.Offset): void;
    static endPlayerMove(builder: flatbuffers.Builder): flatbuffers.Offset;
}
