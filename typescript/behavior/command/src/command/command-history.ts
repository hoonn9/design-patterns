import {Command} from "./command";

export class CommandHistory {
    private history: Command[] = [];

    push(command: Command): void {
        this.history.push(command);
    }

    pop(): Command | undefined {
        return this.history.pop();
    }

    isEmpty(): boolean {
        return !this.history.length;
    }
}