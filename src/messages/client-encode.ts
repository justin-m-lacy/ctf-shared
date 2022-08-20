import { Point } from '../model/model-types';
import * as flatbuffers from 'flatbuffers';
import { Encoder } from './encode';
import { ClientMove } from '../flatbuffers/ctf/client/client-move';
import { ClientFire } from '../flatbuffers/ctf/client/client-fire';
import { ClientChargeFire } from '../flatbuffers/ctf/client/client-charge-fire';
import { ClientCancelFire } from '../flatbuffers/ctf/client/client-cancel-fire';

export const ClientEncoder = {

    makeChargeFire(builder?: flatbuffers.Builder) {

        builder = builder ?? new flatbuffers.Builder(32);

        ClientChargeFire.startClientChargeFire(builder);

        builder.finish(ClientChargeFire.endClientChargeFire(builder));

        return builder.asUint8Array();

    },

    makeFire(at?: Point, rotation?: number, builder?: flatbuffers.Builder) {

        builder = builder ?? new flatbuffers.Builder(128);

        ClientFire.startClientFire(builder);
        if (at != null) {
            ClientFire.addAt(builder, Encoder.buildVec2(at, builder));
        }
        if (rotation) {
            ClientFire.addRotation(builder, rotation);
        }

        const offset = ClientFire.endClientFire(builder);
        builder.finish(offset);

        return builder.asUint8Array();

    },

    makeCancelFire(builder?: flatbuffers.Builder) {
        builder = builder ?? new flatbuffers.Builder(32);

        ClientCancelFire.startClientCancelFire(builder);

        builder.finish(ClientCancelFire.endClientCancelFire(builder));

        return builder.asUint8Array();
    },

    makeMove(to: Point, builder?: flatbuffers.Builder) {

        builder = builder ?? new flatbuffers.Builder(128);

        ClientMove.startClientMove(builder);
        ClientMove.addTo(builder, Encoder.buildVec2(to, builder));
        ClientMove.addWhen(builder, Date.now());

        const offset = ClientMove.endClientMove(builder);
        builder.finish(offset);

        return builder.asUint8Array();

    },

}