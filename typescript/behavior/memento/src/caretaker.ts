import {Memento} from "./memento.interface";
import {Originator} from "./originator";

export class Caretaker {
    private mementos: Memento[] = [];

    constructor(private readonly originator: Originator) {
    }

    backup(): void {
        console.log("Caretaker: Saving originator's state...");
        this.mementos.push(this.originator.save());
    }

    undo(): void {
        if (!this.mementos.length) {
            return;
        }

        const memento = this.mementos.pop()!;
        console.log(`Caretaker: Restoring state to: ${memento.getName()}`);

        this.originator.restore(memento);
    }

    showHistory(): void {
        console.log("Caretaker: Here's the list of memento:");

        for (const memento of this.mementos) {
            console.log(memento.getName());
        }
    }
}