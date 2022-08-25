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
import { MatchEnd } from '../flatbuffers/ctf/match-end';
import { ClientMove } from '../flatbuffers/ctf/client/client-move';
import { ClientFire } from '../flatbuffers/ctf/client/client-fire';
import { ClientChargeFire } from '../flatbuffers/ctf/client/client-charge-fire';
import { ClientCancelFire } from '../flatbuffers/ctf/client/client-cancel-fire';
import { PlayerJoin } from '../flatbuffers/ctf/player-join';
import { PlayerLeave } from '../flatbuffers/ctf/player-leave';
import { MatchStart } from '../flatbuffers/ctf/match-start';
import { MatchState } from '../flatbuffers/ctf/match-state';

export const Decoder = {

    decodePlayerJoin(raw: Uint8Array) {
        return PlayerJoin.getRootAsPlayerJoin(new flatbuffers.ByteBuffer(raw));
    },
    decodePlayerLeave(raw: Uint8Array) {
        return PlayerLeave.getRootAsPlayerLeave(new flatbuffers.ByteBuffer(raw));
    },
    decodeMatchStart(raw: Uint8Array) {
        return MatchStart.getRootAsMatchStart(new flatbuffers.ByteBuffer(raw));
    },
    decodeMatchState(raw: Uint8Array) {
        return MatchState.getRootAsMatchState(new flatbuffers.ByteBuffer(raw));
    },
    decodeMatchEnd(raw: Uint8Array) {
        return MatchEnd.getRootAsMatchEnd(new flatbuffers.ByteBuffer(raw));
    },

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
    }

}