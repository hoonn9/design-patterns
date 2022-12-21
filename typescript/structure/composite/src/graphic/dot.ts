import {Graphic} from "./graphic.interface";

export class Dot implements Graphic {

    constructor(protected x: number, protected y: number) {}

    draw(): void {
        console.log("drawing dot!");
    }

    move(): void {
        console.log("moving dot!");
    }
}