// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class PlayerLeave {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):PlayerLeave {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsPlayerLeave(bb:flatbuffers.ByteBuffer, obj?:PlayerLeave):PlayerLeave {
  return (obj || new PlayerLeave()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsPlayerLeave(bb:flatbuffers.ByteBuffer, obj?:PlayerLeave):PlayerLeave {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new PlayerLeave()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

id():string|null
id(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
id(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

static startPlayerLeave(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addId(builder:flatbuffers.Builder, idOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, idOffset, 0);
}

static endPlayerLeave(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createPlayerLeave(builder:flatbuffers.Builder, idOffset:flatbuffers.Offset):flatbuffers.Offset {
  PlayerLeave.startPlayerLeave(builder);
  PlayerLeave.addId(builder, idOffset);
  return PlayerLeave.endPlayerLeave(builder);
}
}
