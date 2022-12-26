import {Texture} from "./texture";
import {Canvas} from "./canvas";
import {Tree} from "./tree";
import {TreeTypeFactory} from "./tree-type.factory";

export class Forest {
    private trees: Tree[] = [];

    plantTree(x: number, y: number, name: string, color: string, texture: Texture) {
        // ❌
        // const tree = new Tree(x, y, name, color, texture);

        const treeType = TreeTypeFactory.getTreeType(name, color, texture);
        const tree = new Tree(x, y, treeType);

        this.trees.push(tree);
    }

    draw(canvas: Canvas) {
        this.trees.forEach((tree) => {
            tree.draw(canvas);
        })
    }
}