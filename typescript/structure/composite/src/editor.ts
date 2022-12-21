import {CompoundGraphic} from "./graphic/compound-graphic";
import {Circle} from "./graphic/circle";
import {Dot} from "./graphic/dot";
import {Square} from "./graphic/square";
import {Graphic} from "./graphic/graphic.interface";

export class Editor {
    constructor(private graphics: CompoundGraphic = new CompoundGraphic()) {}

    load(): void {
        this.graphics.add(new Dot(0, 0));
        this.graphics.add(new Circle(0, 0, 5));
        this.graphics.add(new Square(0, 0, 150));
    }

    getGraphics(): CompoundGraphic {
        return this.graphics;
    }

    selectGroup(graphics: Graphic[]): CompoundGraphic {
        const newGraphics = new CompoundGraphic();

        for (const graphic of graphics) {
            newGraphics.add(graphic);
        }

        for (let i = 0; i < this.graphics.size(); i++) {
            this.graphics.removeLastChild();
        }

        this.graphics.add(new CompoundGraphic());

        return newGraphics;
    }
}