import {Codec} from "./codec.interface";

export class Mp4Codec implements Codec {
    compress(): void {
        console.log("mp4 compressing...")
    }
}