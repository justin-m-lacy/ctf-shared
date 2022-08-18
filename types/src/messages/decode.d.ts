import { CtfMessage } from '../flatbuffers/ctf/ctf-message';
import { CtfEvent } from './types';
export declare const parseMessage: (raw: Uint8Array) => CtfEvent | null;
export declare const parseContent: (msg: CtfMessage) => CtfEvent | null;
