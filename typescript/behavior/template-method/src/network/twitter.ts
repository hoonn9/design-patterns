import {Network} from "./network.abstract";

export class Twitter extends Network {

    constructor(username: string, password: string) {
        super(username, password);
    }

    logIn(username: string, password: string): boolean {
        this.simulateLatency();

        console.log("LogIn success on Twitter");

        return true;
    }

    logOut(): void {
        console.log(`user: ${this.username} was logged out from Twitter`);
    }

    sendData(data: string): boolean {
        console.log(`Message: ${data} was posted on Twitter`);
        return true;
    }

    private simulateLatency(): void {
        console.log("Network Latency...");
    }
}