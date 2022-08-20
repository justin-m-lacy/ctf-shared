import { PlayerKilled } from '../flatbuffers/ctf/player-killed';
import { PlayerCancelFire } from '../flatbuffers/ctf/player-cancel-fire';
import { PlayerChargeFire } from '../flatbuffers/ctf/player-charge-fire';
import { PlayerFire } from '../flatbuffers/ctf/player-fire';
import { PlayerRespawn } from '../flatbuffers/ctf/player-respawn';
import { PlayerMove } from '../flatbuffers/ctf/player-move';
import { MatchEnd } from '../flatbuffers/ctf/match-end';
import { FlagDropped } from '../flatbuffers/ctf/flag-dropped';
import { FlagReturned } from '../flatbuffers/ctf/flag-returned';
import { FlagTaken } from '../flatbuffers/ctf/flag-taken';
import { TeamScored } from '../flatbuffers/ctf/team-scored';
import { ClientMove } from 'src/flatbuffers/ctf/client/client-move';
import { ClientChargeFire } from '../flatbuffers/ctf/client/client-charge-fire';
import { ClientCancelFire } from 'src/flatbuffers/ctf/client/client-cancel-fire';
import { ClientFire } from 'src/flatbuffers/ctf/client/client-fire';

export type CtfEvent = PlayerEvent | GameEvent;

export type ClientEvent = ClientMove | ClientChargeFire | ClientCancelFire | ClientFire;

export type PlayerEvent = PlayerKilled | PlayerCancelFire | PlayerChargeFire | PlayerFire | PlayerRespawn | PlayerMove;

export type GameEvent = MatchEnd | FlagDropped | FlagReturned | FlagTaken | TeamScored;