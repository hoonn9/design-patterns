import {ConcreateMemento} from "./concreate-memento";
import {Memento} from "./memento.interface";

export class Originator {

    constructor(private state: string) {
        console.log(`Originator: My initial state is : ${this.state}`);
    }

    doSomething(): void {
        console.log(`Originator: I'm doing something.`);
        this.state = this.generateRandomString(20);
        console.log(`Originator: My state has changed to: ${this.state}`);
    }

    private generateRandomString(length = 10): string {
        const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

        return Array.from({length})
            .map(() => charSet.charAt(Math.floor(Math.random() * charSet.length)))
            .join('');
    }

    save(): Memento {
        return new ConcreateMemento(this.state);
    }

    restore(memento: Memento): void {
        this.state = memento.getState();
        console.log(`Originator: My state has changed to: ${this.state}`);
    }
}