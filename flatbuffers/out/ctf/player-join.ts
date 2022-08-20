// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class PlayerJoin {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):PlayerJoin {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsPlayerJoin(bb:flatbuffers.ByteBuffer, obj?:PlayerJoin):PlayerJoin {
  return (obj || new PlayerJoin()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsPlayerJoin(bb:flatbuffers.ByteBuffer, obj?:PlayerJoin):PlayerJoin {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new PlayerJoin()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

id():string|null
id(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
id(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

name():string|null
name(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
name(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

team():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : 0;
}

static startPlayerJoin(builder:flatbuffers.Builder) {
  builder.startObject(3);
}

static addId(builder:flatbuffers.Builder, idOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, idOffset, 0);
}

static addName(builder:flatbuffers.Builder, nameOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, nameOffset, 0);
}

static addTeam(builder:flatbuffers.Builder, team:number) {
  builder.addFieldInt8(2, team, 0);
}

static endPlayerJoin(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createPlayerJoin(builder:flatbuffers.Builder, idOffset:flatbuffers.Offset, nameOffset:flatbuffers.Offset, team:number):flatbuffers.Offset {
  PlayerJoin.startPlayerJoin(builder);
  PlayerJoin.addId(builder, idOffset);
  PlayerJoin.addName(builder, nameOffset);
  PlayerJoin.addTeam(builder, team);
  return PlayerJoin.endPlayerJoin(builder);
}
}
