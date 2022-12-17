import {RoundPeg} from "./round-peg";
import {SquarePeg} from "./square-peg";

export class SquarePegAdapter extends RoundPeg {
    constructor(private readonly squarePeg: SquarePeg) {
        super(SquarePegAdapter.toRadius(squarePeg));
    }

    private static toRadius(squarePeg: SquarePeg) {
        return squarePeg.width * Math.sqrt(2) / 2;
    }

    get radius() {
        return super.radius;
    }
}