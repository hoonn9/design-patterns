import {RoundPeg} from "./peg/round-peg";

export class RoundHole {
    private readonly wrappedRadius: number;

    constructor(radius: number) {
        this.wrappedRadius = radius;
    }

    get radius() {
        return this.wrappedRadius;
    }

    fits(peg: RoundPeg) {
        return this.radius >= peg.radius;
    }
}
