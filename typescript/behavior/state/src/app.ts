import {AudioPlayer} from "./audio-player";

class App {
    static execute() {
        const audioPlayer = new AudioPlayer();

        audioPlayer.addAudio("LOVE YA!");
        audioPlayer.addAudio("Rain Drop");
        audioPlayer.addAudio("Ma Boy");
        audioPlayer.addAudio("1,2,3,4");

        audioPlayer.getState().clickPlay();
        audioPlayer.getState().clickLock();
        audioPlayer.getState().clickPlay();
        audioPlayer.getState().clickPlay();

        audioPlayer.getState().clickNext();
        audioPlayer.getState().clickNext();
    }
}

App.execute();