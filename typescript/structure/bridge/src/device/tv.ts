import {Device} from "./device.interface";

export class Tv implements Device {

    constructor(
        private channel: number = 0,
        private volume: number = 15,
        public isEnable: boolean = false) {
    }

    disable(): void {
        this.isEnable = false;
    }

    enable(): void {
        this.isEnable = true;
    }

    getChannel(): number {
        return this.channel;
    }

    setChannel(channel: number): void {
        this.channel = channel;
    }

    getVolume(): number {
        return this.volume;
    }

    setVolume(volume: number): void {
        this.volume = volume;
    }
}