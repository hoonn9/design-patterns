export class SquarePeg {
    private wrappedWidth: number;

    constructor(width: number) {
        this.wrappedWidth = width;
    }

    get width() {
        return this.wrappedWidth;
    }

    set width(wrapped: number) {
        this.wrappedWidth = wrapped;
    }
}