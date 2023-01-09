import {Listener} from "./listener.interface";

export class LogOpenListener implements Listener {

    constructor(private readonly log: string) {
    }

    update(eventType: string, state: string): void {
        console.log(`Save to log ${this.log}: Someone has performed ${eventType}. File: ${state}`);
    }
}