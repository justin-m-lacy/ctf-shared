
import * as flatbuffers from 'flatbuffers';
import { Encoder } from '../src/messages/encode';
import { Decoder } from '../src/messages/decode';
import { PlayerMove } from '../flatbuffers/out/ctf/player-move';
import { MatchEnd } from '../flatbuffers/out/ctf/match-end';
import { TeamScored } from '../flatbuffers/out/ctf/team-scored';

testPlayerMove();
testMatchEnd();
testTeamScored();

testReuseBuilder();

function testReuseBuilder() {

    const builder = new flatbuffers.Builder(128);

    const data = Encoder.makePlayerCancelFire('user1', builder);
    console.log(`data len: ${data.length}`);


    const data2 = Encoder.makeFlagDropped('user2', { x: 1, y: 1 }, 1, builder);

    console.log(`data1 len: ${data.length} data2 len: ${data2.length}`);
    Decoder.decodeFlagDropped(data2);
    const cancel = Decoder.decodeCancelFire(data);
    console.log(`user cancelled: ${cancel.who()}`);


}

function testMatchEnd() {

    const data = Encoder.makeMatchEnd([10, 20, 12]);
    const decoded = Decoder.decodeMatchEnd(data);

    const scores = decoded.scoresArray();

    console.log(`test scores: ${scores.join(',')}`);


}

function testTeamScored() {
    const data = Encoder.makeTeamScored('scoreUser', 4, 1, [3, 2, 1]);

    const decoded = Decoder.decodeTeamScored(data) as TeamScored;

    const scores = decoded.scoresArray();
    console.log(`Team scored: ${scores.join(',')}`);
    console.log(`scoring user: ${decoded.who()}`);


}

function testPlayerMove() {


    const data = Encoder.makePlayerMove('randomUser', { x: 10, y: 10 });
    const decoded = Decoder.decodePlayerMove(data) as PlayerMove;

    const pt = { x: decoded.to().x(), y: decoded.to().y() };

    console.log(`decoded move: ${decoded.who()} to ${pt.x},${pt.y}`);



}