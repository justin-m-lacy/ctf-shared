import * as flatbuffers from 'flatbuffers';
export declare class PlayerCancelFire {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PlayerCancelFire;
    static getRootAsPlayerCancelFire(bb: flatbuffers.ByteBuffer, obj?: PlayerCancelFire): PlayerCancelFire;
    static getSizePrefixedRootAsPlayerCancelFire(bb: flatbuffers.ByteBuffer, obj?: PlayerCancelFire): PlayerCancelFire;
    who(): string | null;
    who(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startPlayerCancelFire(builder: flatbuffers.Builder): void;
    static addWho(builder: flatbuffers.Builder, whoOffset: flatbuffers.Offset): void;
    static endPlayerCancelFire(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPlayerCancelFire(builder: flatbuffers.Builder, whoOffset: flatbuffers.Offset): flatbuffers.Offset;
}
