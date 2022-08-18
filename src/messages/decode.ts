import * as flatbuffers from 'flatbuffers';
import { CtfMessage } from '../flatbuffers/ctf/ctf-message';
import { MessageContent } from '../flatbuffers/ctf/message-content';
import { PlayerCancelFire } from '../flatbuffers/ctf/player-cancel-fire';
import { PlayerChargeFire } from '../flatbuffers/ctf/player-charge-fire';
import { PlayerMove } from '../flatbuffers/ctf/player-move';
import { PlayerFire } from '../flatbuffers/ctf/player-fire';
import { PlayerKilled } from '../flatbuffers/ctf/player-killed';
import { PlayerRespawn } from '../flatbuffers/ctf/player-respawn';
import { FlagTaken } from '../flatbuffers/ctf/flag-taken';
import { FlagDropped } from '../flatbuffers/ctf/flag-dropped';
import { FlagReturned } from '../flatbuffers/ctf/flag-returned';
import { TeamScored } from '../flatbuffers/ctf/team-scored';
import { TeamWon } from '../flatbuffers/ctf/team-won';
import { CtfEvent, PlayerEvent, GameEvent } from './types';

export const Decoder = {


    decodeMessage(raw: Uint8Array): CtfEvent | null {

        let buf = new flatbuffers.ByteBuffer(raw);
        let msg = CtfMessage.getRootAsCtfMessage(buf);

        return this.decodeContent(msg);

    },

    decodeContent(msg: CtfMessage): CtfEvent | null {

        console.log(`content type: ${msg.contentType()}`);

        switch (msg.contentType()) {
            case MessageContent.PlayerMove:
                return msg.content(new PlayerMove()) as PlayerMove;
            case MessageContent.PlayerChargeFire:
                return msg.content(new PlayerCancelFire()) as PlayerChargeFire;
            case MessageContent.PlayerCancelFire:
                return msg.content(new PlayerCancelFire()) as PlayerCancelFire;
            case MessageContent.PlayerFire:
                return msg.content(new PlayerFire()) as PlayerFire;

            case MessageContent.PlayerKilled:
                return msg.content(new PlayerKilled()) as PlayerKilled;
            case MessageContent.PlayerRespawn:
                return msg.content(new PlayerRespawn()) as PlayerRespawn;
            case MessageContent.FlagTaken:
                return msg.content(new FlagTaken()) as FlagTaken;
            case MessageContent.FlagDropped:
                return msg.content(new FlagDropped()) as FlagDropped;
            case MessageContent.FlagReturned:
                return msg.content(new FlagReturned()) as FlagReturned;

            case MessageContent.TeamScored:
                return msg.content(new TeamScored()) as TeamScored;
            case MessageContent.TeamWon:
                return msg.content(new TeamWon()) as TeamWon;
            default:
                console.log(`no message type parsed.`);
                return null;

        }
    }

}