import {Dot} from "./dot";

export class Circle extends Dot {

    constructor(x: number, y: number, private radius: number) {
        super(x, y);
    }

    draw() {
        console.log("drawing circle");
    }
}