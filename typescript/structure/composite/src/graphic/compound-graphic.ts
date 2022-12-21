import {Graphic} from "./graphic.interface";

// Composite Component
export class CompoundGraphic implements Graphic {

    constructor(
        private children: Graphic[] = [],
    ) {}

    add(graphic: Graphic): void {
        this.children.push(graphic);
    }

    removeLastChild(): Graphic | null {
        if (!this.children.length) {
            return null;
        }

        return this.children.pop() as Graphic;
    }

    size() {
        return this.children.length;
    }

    draw(): void {
        this.children.forEach((child) => {
            child.draw();
        })
    }

    move(): void {
        this.children.forEach((child) => {
            child.move();
        })
    }
}