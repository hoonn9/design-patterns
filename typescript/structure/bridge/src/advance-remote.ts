import {Remote} from "./remote";

export class AdvanceRemote extends Remote {
    private channelHistory: number[] = [];

    channelUp() {
        this.channelHistory.push(this.device.getChannel());
        super.channelUp();
    }

    channelDown() {
        this.channelHistory.push(this.device.getChannel());
        super.channelDown();
    }

    channelToPrev() {
        const prevChannel = this.channelHistory.pop();
        if (prevChannel) {
            return this.device.setChannel(prevChannel);
        }
        this.device.setChannel(0);
    }
}