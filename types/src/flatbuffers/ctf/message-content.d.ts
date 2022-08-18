import { FlagDropped } from '../ctf/flag-dropped';
import { FlagReturned } from '../ctf/flag-returned';
import { FlagTaken } from '../ctf/flag-taken';
import { PlayerCancelFire } from '../ctf/player-cancel-fire';
import { PlayerChargeFire } from '../ctf/player-charge-fire';
import { PlayerFire } from '../ctf/player-fire';
import { PlayerKilled } from '../ctf/player-killed';
import { PlayerMove } from '../ctf/player-move';
import { PlayerRespawn } from '../ctf/player-respawn';
import { TeamScored } from '../ctf/team-scored';
import { TeamWon } from '../ctf/team-won';
export declare enum MessageContent {
    NONE = 0,
    PlayerMove = 1,
    PlayerChargeFire = 2,
    PlayerFire = 3,
    PlayerCancelFire = 4,
    PlayerKilled = 5,
    PlayerRespawn = 6,
    TeamWon = 7,
    TeamScored = 8,
    FlagTaken = 9,
    FlagDropped = 10,
    FlagReturned = 11
}
export declare function unionToMessageContent(type: MessageContent, accessor: (obj: FlagDropped | FlagReturned | FlagTaken | PlayerCancelFire | PlayerChargeFire | PlayerFire | PlayerKilled | PlayerMove | PlayerRespawn | TeamScored | TeamWon) => FlagDropped | FlagReturned | FlagTaken | PlayerCancelFire | PlayerChargeFire | PlayerFire | PlayerKilled | PlayerMove | PlayerRespawn | TeamScored | TeamWon | null): FlagDropped | FlagReturned | FlagTaken | PlayerCancelFire | PlayerChargeFire | PlayerFire | PlayerKilled | PlayerMove | PlayerRespawn | TeamScored | TeamWon | null;
export declare function unionListToMessageContent(type: MessageContent, accessor: (index: number, obj: FlagDropped | FlagReturned | FlagTaken | PlayerCancelFire | PlayerChargeFire | PlayerFire | PlayerKilled | PlayerMove | PlayerRespawn | TeamScored | TeamWon) => FlagDropped | FlagReturned | FlagTaken | PlayerCancelFire | PlayerChargeFire | PlayerFire | PlayerKilled | PlayerMove | PlayerRespawn | TeamScored | TeamWon | null, index: number): FlagDropped | FlagReturned | FlagTaken | PlayerCancelFire | PlayerChargeFire | PlayerFire | PlayerKilled | PlayerMove | PlayerRespawn | TeamScored | TeamWon | null;
