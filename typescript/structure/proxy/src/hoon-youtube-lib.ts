import {ThirdPartyYoutubeLib} from "./third-party-youtube-lib.interface";
import {Video} from "./video";

export class HoonYoutubeLib implements ThirdPartyYoutubeLib {
    downloadVideo(id: string): Video {
        console.log("downloading... id: ", id);
        return new Video(id);
    }

    getVideoInfo(id: string): Video {
        console.log("fetching... id: ", id);
        return new Video(id);
    }

    listVideo(): Video[] {
        console.log("list fetching...");
        return [new Video('1'), new Video('2')];
    }
}