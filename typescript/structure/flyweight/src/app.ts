import {Texture} from "./texture";
import {Forest} from "./forest";
import {Canvas} from "./canvas";

class App {

    static execute() {
        const forest = new Forest();
        const texture = new Texture("id");


        forest.plantTree(0, 5, "tree", "brown", texture);
        forest.plantTree(2, 6, "tree", "brown", texture);
        forest.plantTree(5, 10, "tree", "brown", texture);
        forest.plantTree(6, 12, "tree", "brown", texture);

        // generated tree type2
        forest.plantTree(6, 12, "tree2", "brown", texture);

        forest.draw(new Canvas());
    }
}

App.execute();