import * as flatbuffers from 'flatbuffers';
import { RoomChat } from '../../buffers-out/ctf/chat/room-chat';
import { TeamChat } from 'buffers-out/ctf/chat/team-chat';

export const ChatEncoder = {

    makeRoomChat(from: string, message: string, builder?: flatbuffers.Builder) {

        builder = builder ?? new flatbuffers.Builder(64);

        const fromId = builder.createString(from);
        const messageId = builder.createString(message);

        const room = RoomChat.createRoomChat(builder, fromId, messageId);

        builder.finish(room);

        return builder.asUint8Array();

    },

    makeTeamChat(team: string, from: string, message: string, builder?: flatbuffers.Builder) {

        builder = builder ?? new flatbuffers.Builder(64);

        const fromId = builder.createString(from);
        const messageId = builder.createString(message);
        const teamId = builder.createString(team);

        const room = TeamChat.createTeamChat(builder, teamId, fromId, messageId);

        builder.finish(room);

        return builder.asUint8Array();

    },

}