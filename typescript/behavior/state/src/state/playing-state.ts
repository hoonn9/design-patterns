import {State} from "./state.abstract";
import {LockedState} from "./locked-state";
import {ReadyState} from "./ready-state";

export class PlayingState extends State {

    clickLock(): void {
        this.player.changeState(new LockedState(this.player));
        this.player.setCurrentTrackAfterStop();
        console.log("Stop Playing...");
    }

    clickNext(): void {
        this.player.nextTrack();
    }

    clickPlay(): void {
        this.player.changeState(new ReadyState(this.player));
        console.log("Paused...");
    }

    clickPrevious(): void {
        this.player.previousTrack();
    }
}