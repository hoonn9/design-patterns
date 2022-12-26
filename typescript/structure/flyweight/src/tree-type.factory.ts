import {TreeType} from "./tree-type";
import {Texture} from "./texture";

export class TreeTypeFactory {
    private static treeTypes: TreeType[] = [];

    static getTreeType(name: string, color: string, texture: Texture) {
        const treeType = this.treeTypes.find((treeType) => {
            return treeType.name === name && treeType.color === color && treeType.texture.id === texture.id
        })

        if (!treeType) {
            const newTreeType = new TreeType(this.treeTypes.length, name, color, new Texture(texture.id));
            this.treeTypes.push(newTreeType);
            return newTreeType;
        }

        return treeType;
    }
}