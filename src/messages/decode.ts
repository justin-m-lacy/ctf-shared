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
import { ClientMove } from '../flatbuffers/ctf/client/client-move';
import { ClientFire } from '../flatbuffers/ctf/client/client-fire';
import { ClientChargeFire } from '../flatbuffers/ctf/client/client-charge-fire';
import { ClientCancelFire } from '../flatbuffers/ctf/client/client-cancel-fire';

export const Decoder = {

    decodePlayerMove(raw: Uint8Array) {
        return PlayerMove.getRootAsPlayerMove(new flatbuffers.ByteBuffer(raw));
    },
    decodeChargeFire(raw: Uint8Array) {
        return PlayerChargeFire.getRootAsPlayerChargeFire(new flatbuffers.ByteBuffer(raw));
    },
    decodeCancelFire(raw: Uint8Array) {
        return PlayerCancelFire.getRootAsPlayerCancelFire(new flatbuffers.ByteBuffer(raw));
    },
    decodePlayerFire(raw: Uint8Array) {
        return PlayerFire.getRootAsPlayerFire(new flatbuffers.ByteBuffer(raw));
    },
    decodePlayerRespawn(raw: Uint8Array) {
        return PlayerRespawn.getRootAsPlayerRespawn(new flatbuffers.ByteBuffer(raw));
    },
    decodePlayerKilled(raw: Uint8Array) {
        return PlayerKilled.getRootAsPlayerKilled(new flatbuffers.ByteBuffer(raw));
    },
    decodeFlagTaken(raw: Uint8Array) {
        return FlagTaken.getRootAsFlagTaken(new flatbuffers.ByteBuffer(raw));
    },
    decodeFlagDropped(raw: Uint8Array) {
        return FlagDropped.getRootAsFlagDropped(new flatbuffers.ByteBuffer(raw));
    },
    decodeFlagReturned(raw: Uint8Array) {
        return FlagReturned.getRootAsFlagReturned(new flatbuffers.ByteBuffer(raw));
    },
    decodeTeamScored(raw: Uint8Array) {
        return TeamScored.getRootAsTeamScored(new flatbuffers.ByteBuffer(raw));
    },
    decodeTeamWon(raw: Uint8Array) {
        return TeamWon.getRootAsTeamWon(new flatbuffers.ByteBuffer(raw));
    },
    decodeClientMove(raw: Uint8Array) {
        return ClientMove.getRootAsClientMove(new flatbuffers.ByteBuffer(raw));

    },
    decodeClientFire(raw: Uint8Array) {
        return ClientFire.getRootAsClientFire(new flatbuffers.ByteBuffer(raw));

    },
    decodeClientCharge(raw: Uint8Array) {
        return ClientChargeFire.getRootAsClientChargeFire(new flatbuffers.ByteBuffer(raw));
    },
    decodeClientCancelFire(raw: Uint8Array) {
        return ClientCancelFire.getRootAsClientCancelFire(new flatbuffers.ByteBuffer(raw));
    },


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