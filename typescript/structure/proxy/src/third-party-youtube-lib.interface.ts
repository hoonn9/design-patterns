import {Video} from "./video";

export interface ThirdPartyYoutubeLib {
    listVideo(): Video[];
    getVideoInfo(id: string): Video;
    downloadVideo(id: string): Video;
}