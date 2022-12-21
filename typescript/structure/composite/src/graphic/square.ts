import {Dot} from "./dot";

export class Square extends Dot {

    constructor(x: number, y:number, private width: number) {
        super(x, y);
        console.log(this.x);
    }

    draw() {
        console.log("drawing square!");
    }
}