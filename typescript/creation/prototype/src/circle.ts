import {Shape} from "./shape";

export class Circle extends Shape {
    public radius: number

    constructor() {
        super();
    }

    clone(): Circle {
        const clone = new Circle();
        clone.radius = this.radius;

        const shape = super.clone();

        clone.x = shape.x;
        clone.y = shape.y;
        clone.color = shape.color;
        clone.component = shape.component;

        return clone;
    }
}