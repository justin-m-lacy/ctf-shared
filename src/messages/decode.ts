import * as flatbuffers from 'flatbuffers';
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
import { MessageType } from 'src/flatbuffers/ctf/message-type';

export const Decoder = {

    decodeMessage(raw: Uint8Array, type: MessageType): CtfEvent | null {

        console.log(`content type: ${type}`);

        let bb = new flatbuffers.ByteBuffer(raw);

        switch (type) {
            case MessageType.PlayerMove:
                return PlayerMove.getRootAsPlayerMove(bb);
            case MessageType.PlayerChargeFire:
                return PlayerChargeFire.getRootAsPlayerChargeFire(bb);
            case MessageType.PlayerCancelFire:
                return PlayerCancelFire.getRootAsPlayerCancelFire(bb);
            case MessageType.PlayerFire:
                return PlayerFire.getRootAsPlayerFire(bb);
            case MessageType.PlayerKilled:
                return PlayerKilled.getRootAsPlayerKilled(bb);
            case MessageType.PlayerRespawn:
                return PlayerRespawn.getRootAsPlayerRespawn(bb);
            case MessageType.FlagTaken:
                return FlagTaken.getRootAsFlagTaken(bb);
            case MessageType.FlagDropped:
                return FlagDropped.getRootAsFlagDropped(bb)
            case MessageType.FlagReturned:
                return FlagReturned.getRootAsFlagReturned(bb)
            case MessageType.TeamScored:
                return TeamScored.getRootAsTeamScored(bb)
            case MessageType.TeamWon:
                return TeamWon.getRootAsTeamWon(bb)
            default:
                console.log(`no message type parsed.`);
                return null;

        }
    }

}