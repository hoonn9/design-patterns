import {Codec} from "./codec/codec.interface";
import {File} from "../file";

export class BitrateReader {

    read(file: File, codec: Codec): Buffer {
        return Buffer.from(`${file.filename}Bitrate`);
    }

    convert(buffer: Buffer, codec: Codec): string {
        return buffer.toString();
    }
}