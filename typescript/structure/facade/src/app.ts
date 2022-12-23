import {VideoConverter} from "./video/video-converter";

class App {

    static execute() {

        const converter = new VideoConverter();
        const mp4Video = converter.convert("video.ogg", "mp4");
        console.log(mp4Video);
    }
}

App.execute();