export interface Listener {
    update(eventType: string, state: string): void;
}