import { PlayerKilled } from 'buffers-out/ctf/player-killed';
import { PlayerCancelFire } from 'buffers-out/ctf/player-cancel-fire';
import { PlayerChargeFire } from 'buffers-out/ctf/player-charge-fire';
import { PlayerFire } from 'buffers-out/ctf/player-fire';
import { PlayerRespawn } from 'buffers-out/ctf/player-respawn';
import { PlayerMove } from 'buffers-out/ctf/player-move';
import { MatchEnd } from 'buffers-out/ctf/match-end';
import { FlagDropped } from 'buffers-out/ctf/flag-dropped';
import { FlagReturned } from 'buffers-out/ctf/flag-returned';
import { FlagTaken } from 'buffers-out/ctf/flag-taken';
import { TeamScored } from 'buffers-out/ctf/team-scored';
import { ClientMove } from 'buffers-out/ctf/client/client-move';
import { ClientChargeFire } from 'buffers-out/ctf/client/client-charge-fire';
import { ClientCancelFire } from 'buffers-out/ctf/client/client-cancel-fire';
import { ClientFire } from 'buffers-out/ctf/client/client-fire';

export type CtfEvent = PlayerEvent | GameEvent;

export type ClientEvent = ClientMove | ClientChargeFire | ClientCancelFire | ClientFire;

export type PlayerEvent = PlayerKilled | PlayerCancelFire | PlayerChargeFire | PlayerFire | PlayerRespawn | PlayerMove;

export type GameEvent = MatchEnd | FlagDropped | FlagReturned | FlagTaken | TeamScored;