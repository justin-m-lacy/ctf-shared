import { makePlayerMove, makeTeamWon, makeTeamScored } from '../src/messages/encode';
import { parseMessage } from '../src/messages/decode';
import { PlayerMove } from '../flatbuffers/out/ctf/player-move';
import { TeamWon } from '../flatbuffers/out/ctf/team-won';
import { TeamScored } from '../flatbuffers/out/ctf/team-scored';

testPlayerMove();
testTeamWon();
testTeamScored();

function testTeamWon() {

    const data = makeTeamWon([10, 20, 12]);
    const decoded = parseMessage(data) as TeamWon;

    const scores = decoded.scoresArray();

    console.log(`test scores: ${scores.join(',')}`);


}

function testTeamScored() {
    const data = makeTeamScored('scoreUser', 4, 1, [3, 2, 1]);

    const decoded = parseMessage(data) as TeamScored;

    const scores = decoded.scoresArray();
    console.log(`Team scored: ${scores.join(',')}`);
    console.log(`scoring user: ${decoded.who()}`);


}

function testPlayerMove() {


    const data = makePlayerMove('randomUser', { x: 10, y: 10 });
    const decoded = parseMessage(data) as PlayerMove;

    const pt = { x: decoded.to().x(), y: decoded.to().y() };

    console.log(`decoded move: ${decoded.who()} to ${pt.x},${pt.y}`);



}