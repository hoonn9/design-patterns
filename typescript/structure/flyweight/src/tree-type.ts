import {Texture} from "./texture";
import {Canvas} from "./canvas";

export class TreeType {
    constructor(
        public id: number,
        public name: string,
        public color: string,
        public texture: Texture,
    ) {}

    draw(canvas: Canvas, x: number, y: number) {
        console.log(`drawing...x:${x}, y:${y} canvas: ${canvas.toString()}`);
        console.log(`treeType id: ${this.id} name: ${this.name} color: ${this.color} texture: ${this.texture.id}`);
    }
}