import * as flatbuffers from 'flatbuffers';
import { Point, PlayerData } from '../model/model-types';
import { PlayerMove } from '../flatbuffers/ctf/player-move';
import { PlayerKilled } from '../flatbuffers/ctf/player-killed';
import { PlayerFire } from '../flatbuffers/ctf/player-fire';
import { PlayerCancelFire } from '../flatbuffers/ctf/player-cancel-fire';
import { PlayerChargeFire } from '../flatbuffers/ctf/player-charge-fire';
import { PlayerRespawn } from '../flatbuffers/ctf/player-respawn';
import { MatchEnd } from '../flatbuffers/ctf/match-end';
import { TeamScored } from '../flatbuffers/ctf/team-scored';
import { FlagReturned } from '../flatbuffers/ctf/flag-returned';
import { FlagDropped } from '../flatbuffers/ctf/flag-dropped';
import { FlagTaken } from '../flatbuffers/ctf/flag-taken';
import { Vec2 } from '../flatbuffers/ctf/vec2';
import { maxIndex } from '../util/array';
import { PlayerJoin } from '../flatbuffers/ctf/player-join';
import { PlayerLeave } from '../flatbuffers/ctf/player-leave';
import { MatchState } from '../flatbuffers/ctf/match-state';
import { MatchStart } from './src/flatbuffers/ctf/match-start';
import { PlayerInfo } from './src/flatbuffers/ctf/player-info';

export const Encoder = {

    buildPlayerJoin(userid: string, username?: string, team?: number, builder?: flatbuffers.Builder) {
        builder = builder ?? new flatbuffers.Builder(128);
        const id = builder.createString(userid);
        const nameInd = builder.createString(username ?? 'unknown');

        const offset = PlayerJoin.createPlayerJoin(builder, id, nameInd, team);
        builder.finish(offset);

        return builder.asUint8Array();

    },
    buildPlayerLeave(userid: string, builder?: flatbuffers.Builder) {

        builder = builder ?? new flatbuffers.Builder(128);
        const id = builder.createString(userid);

        const offset = PlayerLeave.createPlayerLeave(builder, id);
        builder.finish(offset);

        return builder.asUint8Array();

    },

    buildMatchStart(players: PlayerData[], builder?: flatbuffers.Builder) {

        builder = builder ?? new flatbuffers.Builder(128);

        const state = this.makeMatchState(players, builder);
        const offset = MatchStart.createMatchStart(builder, state);

        builder.finish(offset);
        return builder.asUint8Array();

    },

    buildMatchState(players: PlayerData[], builder?: flatbuffers.Builder) {

        builder = builder ?? new flatbuffers.Builder(128);

        const state = this.makeMatchState(players, builder);

        builder.finish(state);
        return builder.asUint8Array();

    },

    buildPlayerInfo(player: PlayerData, builder?: flatbuffers.Builder) {

        builder = builder ?? new flatbuffers.Builder(128);

        const index = this.makePlayerInfo(player, builder);
        builder.finish(index);

        return builder.asUint8Array();

    },

    /***
     * Make matchState without building.
     * Returns index position in builder.
     */
    makeMatchState(players: PlayerData[], builder: flatbuffers.Builder) {

        const len = players.length;
        const playerIndices = new Array(len);
        for (let i = 0; i < len; i++) {
            playerIndices[i] = this.makePlayerInfo(players[i], builder);
        }

        const playersVector = MatchState.createPlayersVector(builder, playerIndices);
        return MatchState.createMatchState(builder, playersVector);

    },

    /**
     *  
     * @returns index position of playerInfo in builder.
     */
    makePlayerInfo(player: PlayerData, builder: flatbuffers.Builder) {

        const id = builder.createString(player.id);
        const name = builder.createString(player.name ?? 'unknown');
        const vec2 = this.buildVec2(player.pos, builder);

        PlayerInfo.startPlayerInfo(builder);
        PlayerInfo.addId(builder, id);
        PlayerInfo.addName(builder, name);
        PlayerInfo.addPos(builder, vec2);
        PlayerInfo.addRotation(builder, player.rotation);
        if (player.team !== undefined) {
            PlayerInfo.addTeam(builder, player.team);
        }

        return PlayerInfo.endPlayerInfo(builder);

    },

    buildFlagReturned(userid: string, at: Point, teamFlag: number, builder?: flatbuffers.Builder) {

        builder = builder ?? new flatbuffers.Builder(1024);

        const byIndex = builder.createString(userid);

        FlagReturned.startFlagReturned(builder);
        FlagReturned.addBy(builder, byIndex);
        FlagReturned.addAt(builder, this.buildVec2(at, builder));
        FlagReturned.addTeamFlag(builder, teamFlag)

        const offset = FlagReturned.endFlagReturned(builder);
        builder.finish(offset);

        return builder.asUint8Array();

    },


    buildFlagTaken(userid: string, at: Point, flagTeam: number, builder?: flatbuffers.Builder) {

        builder = builder ?? new flatbuffers.Builder(1024);

        const whoIndex = builder.createString(userid);

        FlagTaken.startFlagTaken(builder);
        FlagTaken.addWho(builder, whoIndex);
        FlagTaken.addAt(builder, this.buildVec2(at, builder));
        FlagTaken.addFlagTeam(builder, flagTeam);

        const offset = FlagTaken.endFlagTaken(builder);
        builder.finish(offset);

        return builder.asUint8Array();

    },

    buildFlagDropped(userid: string, at: Point, flagTeam: number, builder?: flatbuffers.Builder) {

        builder = builder ?? new flatbuffers.Builder(1024);

        const whoIndex = builder.createString(userid);

        FlagDropped.startFlagDropped(builder);
        FlagDropped.addBy(builder, whoIndex);
        FlagDropped.addAt(builder, this.buildVec2(at, builder));
        FlagDropped.addFlagTeam(builder, flagTeam);

        const offset = FlagDropped.endFlagDropped(builder);
        builder.finish(offset);

        return builder.asUint8Array();

    },

    /**
     * @param scores 
     * @param terminated - indicates match ended with no result. 
     * @param builder 
     * @returns 
     */
    buildMatchEnd(scores: number[], terminated: boolean = false, builder?: flatbuffers.Builder) {

        builder = builder ?? new flatbuffers.Builder(1024);

        const winner = maxIndex(scores);
        const scoresIndex = MatchEnd.createScoresVector(builder, scores);

        MatchEnd.startMatchEnd(builder);

        MatchEnd.addScores(builder, scoresIndex);
        if (terminated) {
            MatchEnd.addTerminated(builder, terminated);
        } else {
            MatchEnd.addWinner(builder, winner);
        }


        const offset = MatchEnd.endMatchEnd(builder);
        builder.finish(offset);

        return builder.asUint8Array();

    },

    buildTeamScored(userid: string, scoringTeam: number, flagTeam: number, scores: number[], builder?: flatbuffers.Builder) {

        builder = builder ?? new flatbuffers.Builder(1024);

        const whoIndex = builder.createString(userid);
        const scoresIndex = MatchEnd.createScoresVector(builder, scores);

        TeamScored.startTeamScored(builder);
        TeamScored.addWho(builder, whoIndex);
        TeamScored.addScores(builder, scoresIndex);
        TeamScored.addTeam(builder, scoringTeam)
        TeamScored.addFlagTeam(builder, flagTeam);

        const offset = TeamScored.endTeamScored(builder);
        builder.finish(offset);

        return builder.asUint8Array();

    },

    buildPlayerChargeFire(userid: string, at: Point, builder?: flatbuffers.Builder) {

        builder = builder ?? new flatbuffers.Builder(1024);

        const whoIndex = builder.createString(userid);

        PlayerChargeFire.startPlayerChargeFire(builder);
        PlayerChargeFire.addWho(builder, whoIndex);
        PlayerChargeFire.addAt(builder, this.buildVec2(at, builder));
        PlayerChargeFire.addWhen(builder, Date.now());

        const offset = PlayerChargeFire.endPlayerChargeFire(builder);
        builder.finish(offset);

        return builder.asUint8Array();

    },
    buildPlayerCancelFire(userid: string, builder?: flatbuffers.Builder) {

        builder = builder ?? new flatbuffers.Builder(1024);

        const whoIndex = builder.createString(userid);

        PlayerCancelFire.startPlayerCancelFire(builder);
        PlayerCancelFire.addWho(builder, whoIndex);

        const offset = PlayerCancelFire.endPlayerCancelFire(builder);
        builder.finish(offset);

        return builder.asUint8Array();

    },

    buildPlayerKilled(userid: string, by: string, at: Point, builder?: flatbuffers.Builder) {

        builder = builder ?? new flatbuffers.Builder(1024);

        const whoIndex = builder.createString(userid);
        const byIndex = builder.createString(by);

        PlayerKilled.startPlayerKilled(builder);
        PlayerKilled.addWho(builder, whoIndex);
        PlayerKilled.addBy(builder, byIndex);
        PlayerKilled.addAt(builder, this.buildVec2(at, builder));

        const offset = PlayerKilled.endPlayerKilled(builder);
        builder.finish(offset);

        return builder.asUint8Array();

    },

    buildPlayerFire(userid: string, at: Point, rotation: number, power: number, builder?: flatbuffers.Builder) {

        builder = builder ?? new flatbuffers.Builder(1024);

        const whoIndex = builder.createString(userid);

        PlayerFire.startPlayerFire(builder);
        PlayerFire.addWho(builder, whoIndex);
        PlayerFire.addAt(builder, this.buildVec2(at, builder));
        PlayerFire.addWhen(builder, Date.now());
        PlayerFire.addRotation(builder, rotation);
        PlayerFire.addPower(builder, power);

        const offset = PlayerFire.endPlayerFire(builder);
        builder.finish(offset);

        return builder.asUint8Array();

    },

    buildPlayerMove(userid: string, to: Point, builder?: flatbuffers.Builder) {

        builder = builder ?? new flatbuffers.Builder(1024);

        const whoIndex = builder.createString(userid);

        PlayerMove.startPlayerMove(builder);
        PlayerMove.addWho(builder, whoIndex);
        PlayerMove.addTo(builder, this.buildVec2(to, builder));
        PlayerMove.addWhen(builder, Date.now());

        const offset = PlayerMove.endPlayerMove(builder);
        builder.finish(offset);

        return builder.asUint8Array();

    },

    buildPlayerRespawn(userid: string, at: Point, rotation: number, builder?: flatbuffers.Builder) {

        builder = builder ?? new flatbuffers.Builder(1024);

        const whoIndex = builder.createString(userid);

        PlayerRespawn.startPlayerRespawn(builder);
        PlayerRespawn.addWho(builder, whoIndex);
        PlayerRespawn.addAt(builder, this.buildVec2(at, builder));
        PlayerRespawn.addRotation(builder, rotation);

        const offset = PlayerRespawn.endPlayerRespawn(builder);
        builder.finish(offset);

        return builder.asUint8Array();

    },

    buildVec2(to: Point, builder: flatbuffers.Builder) {

        return Vec2.createVec2(builder, to.x, to.y);

    }

}
