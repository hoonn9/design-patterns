import {State} from "./state/state.abstract";
import {ReadyState} from "./state/ready-state";

export class AudioPlayer {
    private state: State;
    public isPlaying: boolean = false;
    private playlist: string[] = [];
    private currentTrack = 0;

    constructor() {
        this.state = new ReadyState(this);
    }

    addAudio(audio: string) {
        this.playlist.push(audio);
    }

    changeState(state: State): void {
        this.state = state;
    }

    getState(): State {
        return this.state;
    }

    startPlayback(): void {
        this.printCurrentTrack();
    }

    nextTrack(): void {
        this.currentTrack++;

        if (this.currentTrack >= this.playlist.length) {
            this.currentTrack = 0;
        }

        this.printCurrentTrack();
    }

    previousTrack(): void {
        this.currentTrack--;

        if (this.currentTrack < 0) {
            this.currentTrack = this.playlist.length - 1;
        }

        this.printCurrentTrack();
    }

    setCurrentTrackAfterStop(): void {
        this.currentTrack = 0;
    }

    printCurrentTrack(): void {
        console.log(`Playing ${this.playlist[this.currentTrack]}`);
    }
}