import { PlayerKilled } from '../flatbuffers/ctf/player-killed';
import { PlayerCancelFire } from '../flatbuffers/ctf/player-cancel-fire';
import { PlayerChargeFire } from '../flatbuffers/ctf/player-charge-fire';
import { PlayerFire } from '../flatbuffers/ctf/player-fire';
import { PlayerRespawn } from '../flatbuffers/ctf/player-respawn';
import { PlayerMove } from '../flatbuffers/ctf/player-move';
import { TeamWon } from '../flatbuffers/ctf/team-won';
import { FlagDropped } from '../flatbuffers/ctf/flag-dropped';
import { FlagReturned } from '../flatbuffers/ctf/flag-returned';
import { FlagTaken } from '../flatbuffers/ctf/flag-taken';
import { TeamScored } from '../flatbuffers/ctf/team-scored';

export type CtfEvent = PlayerEvent | GameEvent;

export type PlayerEvent = PlayerKilled | PlayerCancelFire | PlayerChargeFire | PlayerFire | PlayerRespawn | PlayerMove;

export type GameEvent = TeamWon | FlagDropped | FlagReturned | FlagTaken | TeamScored;