import {ThirdPartyYoutubeLib} from "./third-party-youtube-lib.interface";
import {Video} from "./video";

export class CacheYoutubeLib implements ThirdPartyYoutubeLib {
    private cache: Video[] = [];
    constructor(private readonly lib: ThirdPartyYoutubeLib) {}

    private findCacheById(id: string) {
        return this.cache.find((video) => video.id === id);
    }

    downloadVideo(id: string): Video {
        const videoCache = this.findCacheById(id);

        if (videoCache) {
            return videoCache;
        }

        const video = this.lib.downloadVideo(id);
        this.cache.push(video);

        return video;
    }

    getVideoInfo(id: string): Video {
        const videoCache = this.findCacheById(id);
        if (videoCache) {
            return videoCache;
        }
        return this.lib.getVideoInfo(id);
    }

    listVideo(): Video[] {
        if (this.cache.length) {
            return this.cache;
        }

        return this.lib.listVideo();
    }

}