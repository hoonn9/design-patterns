import {State} from "./state.abstract";
import {ReadyState} from "./ready-state";

export class LockedState extends State {

    clickLock(): void {
        if (this.player.isPlaying) {
            this.player.changeState(new ReadyState(this.player));
            console.log("Stop Playing...");
        } else {
            console.log("Locked...");
        }
    }

    clickNext(): void {
        console.log("Locked...");
    }

    clickPlay(): void {
        this.player.changeState(new ReadyState(this.player));
        console.log("Ready...");
    }

    clickPrevious(): void {
        console.log("Locked...");
    }
}