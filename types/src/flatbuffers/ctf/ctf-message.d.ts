import * as flatbuffers from 'flatbuffers';
import { MessageContent } from '../ctf/message-content';
export declare class CtfMessage {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CtfMessage;
    static getRootAsCtfMessage(bb: flatbuffers.ByteBuffer, obj?: CtfMessage): CtfMessage;
    static getSizePrefixedRootAsCtfMessage(bb: flatbuffers.ByteBuffer, obj?: CtfMessage): CtfMessage;
    contentType(): MessageContent;
    content<T extends flatbuffers.Table>(obj: any): any | null;
    when(): number;
    static startCtfMessage(builder: flatbuffers.Builder): void;
    static addContentType(builder: flatbuffers.Builder, contentType: MessageContent): void;
    static addContent(builder: flatbuffers.Builder, contentOffset: flatbuffers.Offset): void;
    static addWhen(builder: flatbuffers.Builder, when: number): void;
    static endCtfMessage(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishCtfMessageBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedCtfMessageBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createCtfMessage(builder: flatbuffers.Builder, contentType: MessageContent, contentOffset: flatbuffers.Offset, when: number): flatbuffers.Offset;
}
