import {Listener} from "./listener.interface";

export class EmailNotificationListener implements Listener {

    constructor(private readonly email: string) {
    }

    update(eventType: string, state: string): void {
        console.log(`Email to ${this.email}: Someone has performed ${eventType}. state: ${state}`);
    }
}