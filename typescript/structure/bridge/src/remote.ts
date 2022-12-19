import {Device} from "./device/device.interface";

export class Remote {
    constructor(
        protected readonly device: Device
    ) {}

    togglePower(): void {
        if (this.device.isEnable) {
            return this.device.disable();
        }
        return this.device.enable();
    }

    volumeUp(): void {
        this.device.setVolume(this.device.getVolume() + 1);
    }

    volumeDown(): void {
        this.device.setVolume(this.device.getVolume() - 1);
    }

    channelUp(): void {
        this.device.setChannel(this.device.getChannel() + 1);
    }

    channelDown(): void {
        this.device.setChannel(this.device.getChannel() - 1);
    }
}