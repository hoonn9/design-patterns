import {Memento} from "./memento.interface";

export class ConcreateMemento implements Memento {
    private readonly date: string;

    constructor(private readonly state: string) {
        this.date = new Date().toISOString().slice(0, 19).replace('T', '');
    }

    getState(): string {
        return this.state;
    }

    getDate(): string {
        return this.date;
    }

    getName(): string {
        return `${this.date} / (${this.state.substring(0, 9)}...)`;
    }
}