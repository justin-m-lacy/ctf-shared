// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class MatchEnd {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):MatchEnd {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsMatchEnd(bb:flatbuffers.ByteBuffer, obj?:MatchEnd):MatchEnd {
  return (obj || new MatchEnd()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsMatchEnd(bb:flatbuffers.ByteBuffer, obj?:MatchEnd):MatchEnd {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new MatchEnd()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

winner():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : -1;
}

terminated():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

scores(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readUint32(this.bb!.__vector(this.bb_pos + offset) + index * 4) : 0;
}

scoresLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

scoresArray():Uint32Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? new Uint32Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

static startMatchEnd(builder:flatbuffers.Builder) {
  builder.startObject(3);
}

static addWinner(builder:flatbuffers.Builder, winner:number) {
  builder.addFieldInt8(0, winner, -1);
}

static addTerminated(builder:flatbuffers.Builder, terminated:boolean) {
  builder.addFieldInt8(1, +terminated, +false);
}

static addScores(builder:flatbuffers.Builder, scoresOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, scoresOffset, 0);
}

static createScoresVector(builder:flatbuffers.Builder, data:number[]|Uint32Array):flatbuffers.Offset;
/**
 * @deprecated This Uint8Array overload will be removed in the future.
 */
static createScoresVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset;
static createScoresVector(builder:flatbuffers.Builder, data:number[]|Uint32Array|Uint8Array):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt32(data[i]!);
  }
  return builder.endVector();
}

static startScoresVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endMatchEnd(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createMatchEnd(builder:flatbuffers.Builder, winner:number, terminated:boolean, scoresOffset:flatbuffers.Offset):flatbuffers.Offset {
  MatchEnd.startMatchEnd(builder);
  MatchEnd.addWinner(builder, winner);
  MatchEnd.addTerminated(builder, terminated);
  MatchEnd.addScores(builder, scoresOffset);
  return MatchEnd.endMatchEnd(builder);
}
}
