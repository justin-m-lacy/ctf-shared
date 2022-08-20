// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { Vec2 } from '../../ctf/vec2';


export class ClientFire {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):ClientFire {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsClientFire(bb:flatbuffers.ByteBuffer, obj?:ClientFire):ClientFire {
  return (obj || new ClientFire()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsClientFire(bb:flatbuffers.ByteBuffer, obj?:ClientFire):ClientFire {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new ClientFire()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

at(obj?:Vec2):Vec2|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new Vec2()).__init(this.bb_pos + offset, this.bb!) : null;
}

orientation(obj?:Vec2):Vec2|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new Vec2()).__init(this.bb_pos + offset, this.bb!) : null;
}

static startClientFire(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addAt(builder:flatbuffers.Builder, atOffset:flatbuffers.Offset) {
  builder.addFieldStruct(0, atOffset, 0);
}

static addOrientation(builder:flatbuffers.Builder, orientationOffset:flatbuffers.Offset) {
  builder.addFieldStruct(1, orientationOffset, 0);
}

static endClientFire(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

}