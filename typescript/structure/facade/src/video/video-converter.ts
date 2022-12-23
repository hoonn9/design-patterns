import {VideoFile} from "./video-file";
import {BitrateReader} from "./bitrate-reader";
import {Mp4Codec} from "./codec/mp4-codec";
import {OggCodec} from "./codec/ogg-codec";

export class VideoConverter {

    constructor() {}

    convert(filename: string, extension: 'mp4' | 'ogg'): string {
        const videoFile = new VideoFile(filename);
        const bitrateReader = new BitrateReader();
        let result: string;

        if (extension === 'mp4') {
            const buffer = bitrateReader.read(videoFile, new OggCodec());
            result = bitrateReader.convert(buffer, new Mp4Codec())
        } else {
            const buffer = bitrateReader.read(videoFile, new Mp4Codec());
            result = bitrateReader.convert(buffer, new OggCodec())
        }

        return result;
    }
}