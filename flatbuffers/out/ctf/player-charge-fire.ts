// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { Vec2 } from '../ctf/vec2';


export class PlayerChargeFire {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):PlayerChargeFire {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsPlayerChargeFire(bb:flatbuffers.ByteBuffer, obj?:PlayerChargeFire):PlayerChargeFire {
  return (obj || new PlayerChargeFire()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsPlayerChargeFire(bb:flatbuffers.ByteBuffer, obj?:PlayerChargeFire):PlayerChargeFire {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new PlayerChargeFire()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

who():string|null
who(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
who(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

at(obj?:Vec2):Vec2|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new Vec2()).__init(this.bb_pos + offset, this.bb!) : null;
}

static startPlayerChargeFire(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addWho(builder:flatbuffers.Builder, whoOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, whoOffset, 0);
}

static addAt(builder:flatbuffers.Builder, atOffset:flatbuffers.Offset) {
  builder.addFieldStruct(1, atOffset, 0);
}

static endPlayerChargeFire(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

}
