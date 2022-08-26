// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { Vec2 } from '../ctf/vec2';


export class PlayerInfo {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):PlayerInfo {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsPlayerInfo(bb:flatbuffers.ByteBuffer, obj?:PlayerInfo):PlayerInfo {
  return (obj || new PlayerInfo()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsPlayerInfo(bb:flatbuffers.ByteBuffer, obj?:PlayerInfo):PlayerInfo {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new PlayerInfo()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
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

team():string|null
team(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
team(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

rotation():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

pos(obj?:Vec2):Vec2|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? (obj || new Vec2()).__init(this.bb_pos + offset, this.bb!) : null;
}

static startPlayerInfo(builder:flatbuffers.Builder) {
  builder.startObject(5);
}

static addId(builder:flatbuffers.Builder, idOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, idOffset, 0);
}

static addName(builder:flatbuffers.Builder, nameOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, nameOffset, 0);
}

static addTeam(builder:flatbuffers.Builder, teamOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, teamOffset, 0);
}

static addRotation(builder:flatbuffers.Builder, rotation:number) {
  builder.addFieldInt32(3, rotation, 0);
}

static addPos(builder:flatbuffers.Builder, posOffset:flatbuffers.Offset) {
  builder.addFieldStruct(4, posOffset, 0);
}

static endPlayerInfo(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

}