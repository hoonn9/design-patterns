import {Texture} from "./texture";
import {Canvas} from "./canvas";
import {TreeType} from "./tree-type";

export class Tree {

    constructor(
        public x: number,
        public y: number,
        public treeType: TreeType,
    ) {}

    draw(canvas: Canvas) {
        this.treeType.draw(canvas, this.x, this.y);
    }
}