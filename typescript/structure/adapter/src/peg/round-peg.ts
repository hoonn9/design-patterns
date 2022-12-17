export class RoundPeg {
    private wrappedRadius: number

    constructor(radius: number) {
        this.wrappedRadius = radius;
    }

    get radius() {
        return this.wrappedRadius;
    }

    set radius(wrapped: number) {
        this.wrappedRadius = wrapped;
    }
}