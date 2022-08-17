import * as flatbuffers from 'flatbuffers';
import { Point } from '../types';
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
import { CtfMessage } from '../flatbuffers/ctf/ctf-message';
import { MessageContent } from '../flatbuffers/ctf/message-content';
import { maxIndex } from '../util/array';


export const makeFlagReturned = (userid: string, at: Point, teamFlag: number, builder?: flatbuffers.Builder) => {

    builder = builder ?? new flatbuffers.Builder(1024);

    const byIndex = builder.createString(userid);

    FlagReturned.startFlagReturned(builder);
    FlagReturned.addBy(builder, byIndex);
    FlagReturned.addAt(builder, makeVec2(at, builder));
    FlagReturned.addTeamFlag(builder, teamFlag)

    return makeMessage(FlagReturned.endFlagReturned(builder), MessageContent.FlagReturned, builder);

}


export const makeFlagTaken = (userid: string, at: Point, flagTeam: number, builder?: flatbuffers.Builder) => {

    builder = builder ?? new flatbuffers.Builder(1024);

    const whoIndex = builder.createString(userid);

    FlagTaken.startFlagTaken(builder);
    FlagTaken.addWho(builder, whoIndex);
    FlagTaken.addAt(builder, makeVec2(at, builder));
    FlagTaken.addFlagTeam(builder, flagTeam);

    return makeMessage(FlagTaken.endFlagTaken(builder), MessageContent.FlagTaken, builder);

}

export const makeFlagDropped = (userid: string, at: Point, flagTeam: number, builder?: flatbuffers.Builder) => {

    builder = builder ?? new flatbuffers.Builder(1024);

    const whoIndex = builder.createString(userid);

    FlagDropped.startFlagDropped(builder);
    FlagDropped.addBy(builder, whoIndex);
    FlagDropped.addAt(builder, makeVec2(at, builder));
    FlagDropped.addFlagTeam(builder, flagTeam);

    return makeMessage(FlagDropped.endFlagDropped(builder), MessageContent.FlagDropped, builder);

}

export const makeTeamWon = (scores: number[], builder?: flatbuffers.Builder) => {

    builder = builder ?? new flatbuffers.Builder(1024);

    const winner = maxIndex(scores);
    const scoresIndex = TeamWon.createScoresVector(builder, scores);

    TeamWon.startTeamWon(builder);
    TeamWon.addWinner(builder, winner);
    TeamWon.addScores(builder, scoresIndex);

    return makeMessage(TeamWon.endTeamWon(builder), MessageContent.TeamWon, builder);

}

export const makeTeamScored = (userid: string, scoringTeam: number, flagTeam: number, scores: number[], builder?: flatbuffers.Builder) => {

    builder = builder ?? new flatbuffers.Builder(1024);

    const whoIndex = builder.createString(userid);
    const scoresIndex = TeamWon.createScoresVector(builder, scores);

    TeamScored.startTeamScored(builder);
    TeamScored.addWho(builder, whoIndex);
    TeamScored.addScores(builder, scoresIndex);
    TeamScored.addTeam(builder, scoringTeam)
    TeamScored.addFlagTeam(builder, flagTeam);

    return makeMessage(TeamScored.endTeamScored(builder), MessageContent.TeamScored, builder);

}

export const makePlayerChargeFire = (userid: string, at: Point, builder?: flatbuffers.Builder) => {

    builder = builder ?? new flatbuffers.Builder(1024);

    const whoIndex = builder.createString(userid);

    PlayerChargeFire.startPlayerChargeFire(builder);
    PlayerChargeFire.addWho(builder, whoIndex);
    PlayerChargeFire.addAt(builder, makeVec2(at, builder));

    return makeMessage(PlayerChargeFire.endPlayerChargeFire(builder), MessageContent.PlayerChargeFire, builder);

}
export const makePlayerCancelFire = (userid: string, builder?: flatbuffers.Builder) => {

    builder = builder ?? new flatbuffers.Builder(1024);

    const whoIndex = builder.createString(userid);

    PlayerCancelFire.startPlayerCancelFire(builder);
    PlayerCancelFire.addWho(builder, whoIndex);

    return makeMessage(PlayerCancelFire.endPlayerCancelFire(builder), MessageContent.PlayerCancelFire, builder);

}

export const makePlayerKilled = (userid: string, by: string, at: Point, builder?: flatbuffers.Builder) => {

    builder = builder ?? new flatbuffers.Builder(1024);

    const whoIndex = builder.createString(userid);
    const byIndex = builder.createString(by);

    PlayerKilled.startPlayerKilled(builder);
    PlayerKilled.addWho(builder, whoIndex);
    PlayerKilled.addBy(builder, byIndex);
    PlayerKilled.addAt(builder, makeVec2(at, builder));

    return makeMessage(PlayerKilled.endPlayerKilled(builder), MessageContent.PlayerKilled, builder);

}

export const makePlayerFire = (userid: string, at: Point, orientation: Point, strength: number, builder?: flatbuffers.Builder) => {

    builder = builder ?? new flatbuffers.Builder(1024);

    const whoIndex = builder.createString(userid);

    PlayerFire.startPlayerFire(builder);
    PlayerFire.addWho(builder, whoIndex);
    PlayerFire.addAt(builder, makeVec2(at, builder));
    PlayerFire.addOrientation(builder, makeVec2(orientation, builder));
    PlayerFire.addStrength(builder, strength);

    return makeMessage(PlayerFire.endPlayerFire(builder), MessageContent.PlayerFire, builder);

}

export const makePlayerMove = (userid: string, to: Point, builder?: flatbuffers.Builder) => {

    builder = builder ?? new flatbuffers.Builder(1024);

    const whoIndex = builder.createString(userid);

    PlayerMove.startPlayerMove(builder);
    PlayerMove.addWho(builder, whoIndex);
    PlayerMove.addTo(builder, makeVec2(to, builder));

    return makeMessage(PlayerMove.endPlayerMove(builder), MessageContent.PlayerMove, builder);

}

export const makePlayerRespawn = (userid: string, at: Point, builder?: flatbuffers.Builder) => {

    builder = builder ?? new flatbuffers.Builder(1024);

    const whoIndex = builder.createString(userid);

    PlayerRespawn.startPlayerRespawn(builder);
    PlayerRespawn.addWho(builder, whoIndex);
    PlayerRespawn.addAt(builder, makeVec2(at, builder));

    return makeMessage(PlayerRespawn.endPlayerRespawn(builder), MessageContent.PlayerRespawn, builder);

}

export const makeMessage = (contentInd: number, contentType: number, builder: flatbuffers.Builder) => {

    const offset = CtfMessage.createCtfMessage(builder, contentType, contentInd, Date.now());
    builder.finish(offset);

    return builder.asUint8Array();

}

export const makeVec2 = (to: Point, builder: flatbuffers.Builder) => {

    return Vec2.createVec2(builder, to.x, to.y);

}