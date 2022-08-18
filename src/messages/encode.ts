import * as flatbuffers from 'flatbuffers';
import { Point } from '../model/model-types';
import { PlayerMove } from '../flatbuffers/ctf/player-move';
import { PlayerKilled } from '../flatbuffers/ctf/player-killed';
import { PlayerFire } from '../flatbuffers/ctf/player-fire';
import { PlayerCancelFire } from '../flatbuffers/ctf/player-cancel-fire';
import { PlayerChargeFire } from '../flatbuffers/ctf/player-charge-fire';
import { PlayerRespawn } from '../flatbuffers/ctf/player-respawn';
import { TeamWon } from '../flatbuffers/ctf/team-won';
import { TeamScored } from '../flatbuffers/ctf/team-scored';
import { FlagReturned } from '../flatbuffers/ctf/flag-returned';
import { FlagDropped } from '../flatbuffers/ctf/flag-dropped';
import { FlagTaken } from '../flatbuffers/ctf/flag-taken';
import { Vec2 } from '../flatbuffers/ctf/vec2';
import { maxIndex } from '../util/array';

export const Encoder = {
    makeFlagReturned(userid: string, at: Point, teamFlag: number, builder?: flatbuffers.Builder) {

        builder = builder ?? new flatbuffers.Builder(1024);

        const byIndex = builder.createString(userid);

        FlagReturned.startFlagReturned(builder);
        FlagReturned.addBy(builder, byIndex);
        FlagReturned.addAt(builder, this.makeVec2(at, builder));
        FlagReturned.addTeamFlag(builder, teamFlag)

        const offset = FlagReturned.endFlagReturned(builder);
        builder.finish(offset);

        return builder.asUint8Array();

    },


    makeFlagTaken(userid: string, at: Point, flagTeam: number, builder?: flatbuffers.Builder) {

        builder = builder ?? new flatbuffers.Builder(1024);

        const whoIndex = builder.createString(userid);

        FlagTaken.startFlagTaken(builder);
        FlagTaken.addWho(builder, whoIndex);
        FlagTaken.addAt(builder, this.makeVec2(at, builder));
        FlagTaken.addFlagTeam(builder, flagTeam);

        const offset = FlagTaken.endFlagTaken(builder);
        builder.finish(offset);

        return builder.asUint8Array();

    },

    makeFlagDropped(userid: string, at: Point, flagTeam: number, builder?: flatbuffers.Builder) {

        builder = builder ?? new flatbuffers.Builder(1024);

        const whoIndex = builder.createString(userid);

        FlagDropped.startFlagDropped(builder);
        FlagDropped.addBy(builder, whoIndex);
        FlagDropped.addAt(builder, this.makeVec2(at, builder));
        FlagDropped.addFlagTeam(builder, flagTeam);

        const offset = FlagDropped.endFlagDropped(builder);
        builder.finish(offset);

        return builder.asUint8Array();

    },

    makeTeamWon(scores: number[], builder?: flatbuffers.Builder) {

        builder = builder ?? new flatbuffers.Builder(1024);

        const winner = maxIndex(scores);
        const scoresIndex = TeamWon.createScoresVector(builder, scores);

        TeamWon.startTeamWon(builder);
        TeamWon.addWinner(builder, winner);
        TeamWon.addScores(builder, scoresIndex);

        const offset = TeamWon.endTeamWon(builder);
        builder.finish(offset);

        return builder.asUint8Array();

    },

    makeTeamScored(userid: string, scoringTeam: number, flagTeam: number, scores: number[], builder?: flatbuffers.Builder) {

        builder = builder ?? new flatbuffers.Builder(1024);

        const whoIndex = builder.createString(userid);
        const scoresIndex = TeamWon.createScoresVector(builder, scores);

        TeamScored.startTeamScored(builder);
        TeamScored.addWho(builder, whoIndex);
        TeamScored.addScores(builder, scoresIndex);
        TeamScored.addTeam(builder, scoringTeam)
        TeamScored.addFlagTeam(builder, flagTeam);

        const offset = TeamScored.endTeamScored(builder);
        builder.finish(offset);

        return builder.asUint8Array();

    },

    makePlayerChargeFire(userid: string, at: Point, builder?: flatbuffers.Builder) {

        builder = builder ?? new flatbuffers.Builder(1024);

        const whoIndex = builder.createString(userid);

        PlayerChargeFire.startPlayerChargeFire(builder);
        PlayerChargeFire.addWho(builder, whoIndex);
        PlayerChargeFire.addAt(builder, this.makeVec2(at, builder));
        PlayerChargeFire.addWhen(builder, Date.now());

        const offset = PlayerChargeFire.endPlayerChargeFire(builder);
        builder.finish(offset);

        return builder.asUint8Array();

    },
    makePlayerCancelFire(userid: string, builder?: flatbuffers.Builder) {

        builder = builder ?? new flatbuffers.Builder(1024);

        const whoIndex = builder.createString(userid);

        PlayerCancelFire.startPlayerCancelFire(builder);
        PlayerCancelFire.addWho(builder, whoIndex);

        const offset = PlayerCancelFire.endPlayerCancelFire(builder);
        builder.finish(offset);

        return builder.asUint8Array();

    },

    makePlayerKilled(userid: string, by: string, at: Point, builder?: flatbuffers.Builder) {

        builder = builder ?? new flatbuffers.Builder(1024);

        const whoIndex = builder.createString(userid);
        const byIndex = builder.createString(by);

        PlayerKilled.startPlayerKilled(builder);
        PlayerKilled.addWho(builder, whoIndex);
        PlayerKilled.addBy(builder, byIndex);
        PlayerKilled.addAt(builder, this.makeVec2(at, builder));

        const offset = PlayerKilled.endPlayerKilled(builder);
        builder.finish(offset);

        return builder.asUint8Array();

    },

    makePlayerFire(userid: string, at: Point, orientation: Point, power: number, builder?: flatbuffers.Builder) {

        builder = builder ?? new flatbuffers.Builder(1024);

        const whoIndex = builder.createString(userid);

        PlayerFire.startPlayerFire(builder);
        PlayerFire.addWho(builder, whoIndex);
        PlayerFire.addAt(builder, this.makeVec2(at, builder));
        PlayerFire.addWhen(builder, Date.now());
        PlayerFire.addOrientation(builder, this.makeVec2(orientation, builder));
        PlayerFire.addPower(builder, power);

        const offset = PlayerFire.endPlayerFire(builder);
        builder.finish(offset);

        return builder.asUint8Array();

    },

    makePlayerMove(userid: string, to: Point, builder?: flatbuffers.Builder) {

        builder = builder ?? new flatbuffers.Builder(1024);

        const whoIndex = builder.createString(userid);

        PlayerMove.startPlayerMove(builder);
        PlayerMove.addWho(builder, whoIndex);
        PlayerMove.addTo(builder, this.makeVec2(to, builder));
        PlayerMove.addWhen(builder, Date.now());

        const offset = PlayerMove.endPlayerMove(builder);
        builder.finish(offset);

        return builder.asUint8Array();

    },

    makePlayerRespawn(userid: string, at: Point, builder?: flatbuffers.Builder) {

        builder = builder ?? new flatbuffers.Builder(1024);

        const whoIndex = builder.createString(userid);

        PlayerRespawn.startPlayerRespawn(builder);
        PlayerRespawn.addWho(builder, whoIndex);
        PlayerRespawn.addAt(builder, this.makeVec2(at, builder));

        const offset = PlayerRespawn.endPlayerRespawn(builder);
        builder.finish(offset);

        return builder.asUint8Array();

    },

    makeVec2(to: Point, builder: flatbuffers.Builder) {

        return Vec2.createVec2(builder, to.x, to.y);

    }

}
