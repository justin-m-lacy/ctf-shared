import { Point } from '../model/model-types';
import * as flatbuffers from 'flatbuffers';
import { Encoder } from './encode';
import { LocalMove } from '../flatbuffers/ctf/client/local-move';
import { LocalFire } from '../flatbuffers/ctf/client/local-fire';
import { LocalChargeFire } from '../flatbuffers/ctf/client/local-charge-fire';
import { LocalCancelFire } from '../flatbuffers/ctf/client/local-cancel-fire';

export const ClientEncoder = {

    makeChargeFire(builder?: flatbuffers.Builder) {

        builder = builder ?? new flatbuffers.Builder(32);

        LocalChargeFire.startLocalChargeFire(builder);

        builder.finish(LocalChargeFire.endLocalChargeFire(builder));

        return builder.asUint8Array();

    },

    makeFire(at?: Point, orientation?: Point, builder?: flatbuffers.Builder) {

        builder = builder ?? new flatbuffers.Builder(128);

        LocalFire.startLocalFire(builder);
        if (at != null) {
            LocalFire.addAt(builder, Encoder.makeVec2(at, builder));
        }
        if (orientation) {
            LocalFire.addOrientation(builder, Encoder.makeVec2(orientation, builder));
        }

        const offset = LocalFire.endLocalFire(builder);
        builder.finish(offset);

        return builder.asUint8Array();

    },

    makeCancelFire(builder?: flatbuffers.Builder) {
        builder = builder ?? new flatbuffers.Builder(32);

        LocalCancelFire.startLocalCancelFire(builder);

        builder.finish(LocalCancelFire.endLocalCancelFire(builder));

        return builder.asUint8Array();
    },

    makeMove(to: Point, builder?: flatbuffers.Builder) {

        builder = builder ?? new flatbuffers.Builder(128);

        LocalMove.startLocalMove(builder);
        LocalMove.addTo(builder, Encoder.makeVec2(to, builder));
        LocalMove.addWhen(builder, Date.now());

        const offset = LocalMove.endLocalMove(builder);
        builder.finish(offset);

        return builder.asUint8Array();

    },

}