// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class ClientChargeFire {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):ClientChargeFire {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsClientChargeFire(bb:flatbuffers.ByteBuffer, obj?:ClientChargeFire):ClientChargeFire {
  return (obj || new ClientChargeFire()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsClientChargeFire(bb:flatbuffers.ByteBuffer, obj?:ClientChargeFire):ClientChargeFire {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new ClientChargeFire()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static startClientChargeFire(builder:flatbuffers.Builder) {
  builder.startObject(0);
}

static endClientChargeFire(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createClientChargeFire(builder:flatbuffers.Builder):flatbuffers.Offset {
  ClientChargeFire.startClientChargeFire(builder);
  return ClientChargeFire.endClientChargeFire(builder);
}
}
