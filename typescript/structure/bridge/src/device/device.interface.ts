export interface Device {
    getVolume(): number;
    setVolume(volume: number): void;
    getChannel(): number;
    setChannel(channel: number): void;
    enable(): void;
    disable(): void;
    isEnable: boolean;
}