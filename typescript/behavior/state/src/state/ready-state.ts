import {State} from "./state.abstract";
import {LockedState} from "./locked-state";
import {PlayingState} from "./playing-state";

export class ReadyState extends State {
    clickLock(): void {
        // 전략 패턴과 달리 다른 State와 작용함
        this.player.changeState(new LockedState(this.player));
        console.log("Locked...");
    }

    clickNext(): void {
        console.log("Locked...");
    }

    clickPlay(): void {
        this.player.startPlayback();
        this.player.changeState(new PlayingState(this.player));
    }

    clickPrevious(): void {
        console.log("Locked...");
    }
}