import {Codec} from "./codec.interface";

export class OggCodec implements Codec {
    compress(): void {
        console.log("ogg compressing...")
    }
}