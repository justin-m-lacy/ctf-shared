// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { Vec2 } from '../../ctf/vec2';


export class ClientMove {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):ClientMove {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsClientMove(bb:flatbuffers.ByteBuffer, obj?:ClientMove):ClientMove {
  return (obj || new ClientMove()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsClientMove(bb:flatbuffers.ByteBuffer, obj?:ClientMove):ClientMove {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new ClientMove()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

when():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

to(obj?:Vec2):Vec2|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new Vec2()).__init(this.bb_pos + offset, this.bb!) : null;
}

static startClientMove(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addWhen(builder:flatbuffers.Builder, when:number) {
  builder.addFieldInt32(0, when, 0);
}

static addTo(builder:flatbuffers.Builder, toOffset:flatbuffers.Offset) {
  builder.addFieldStruct(1, toOffset, 0);
}

static endClientMove(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

}