import {RoundHole} from "./round-hole";
import {RoundPeg} from "./peg/round-peg";
import {SquarePeg} from "./peg/square-peg";
import {SquarePegAdapter} from "./peg/square-peg.adapter";

class App {

    static execute() {
        const roundHole = new RoundHole(15);
        const roundPeg = new RoundPeg(13);

        console.log(roundHole.fits(roundPeg));

        const squarePeg = new SquarePeg(5);

        // 😡
        // roundHole.fits(squarePeg);

        const squarePegAdapter = new SquarePegAdapter(squarePeg);
        console.log(roundHole.fits(squarePegAdapter));
    }
}

App.execute();