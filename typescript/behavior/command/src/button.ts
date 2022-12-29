export type Callback<T> = (...args: any[]) => T;

export class Button<T> {
    constructor(private callback: Callback<T>) {}

    onClick(callback: Callback<T>): void {
        this.callback = callback;
    }

    click(): T {
        return this.callback();
    }
}