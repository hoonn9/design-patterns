import {Listener} from "../listener/listener.interface";

export class EventManager {
    private listeners: Map<string, Listener[]> = new Map();

    subscribe(eventType: string, listener: Listener): void {
        const subscribers = this.listeners.get(eventType) || [];
        subscribers.push(listener);

        this.listeners.set(eventType, subscribers);
    }

    unsubscribe(eventType: string, listener: Listener): void {
        const subscribers = this.listeners.get(eventType);

        if (!subscribers) {
            return;
        }

        const foundIndex = subscribers.findIndex((subscriber) => subscriber === listener);

        if (foundIndex > -1) {
            subscribers.splice(foundIndex, 1);
        }
    }

    notify(eventType: string, state: string): void {
        const subscribers = this.listeners.get(eventType) || [];
        subscribers.forEach((subscriber) => subscriber.update(eventType, state));
    }
}