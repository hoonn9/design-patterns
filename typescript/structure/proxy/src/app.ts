import {HoonYoutubeLib} from "./hoon-youtube-lib";
import {CacheYoutubeLib} from "./cache-youtube-lib";

class App {

    static execute() {
        const hoonYoutube = new HoonYoutubeLib();
        hoonYoutube.listVideo();


        // 코드를 직접 추가할 수 없는 상황에
        // 캐시 기능을 추가하고 싶다면? Proxy Pattern
        const cacheProxyLib = new CacheYoutubeLib(hoonYoutube);

        cacheProxyLib.downloadVideo('1');
        const videos = cacheProxyLib.listVideo();
        cacheProxyLib.downloadVideo('1');
        cacheProxyLib.getVideoInfo('1');
        cacheProxyLib.getVideoInfo('2');


        console.log(videos);
    }
}

App.execute();