import {Shape} from "./shape";

export class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(source: Rectangle) {
        super(source);

        this.width = source.width;
        this.height = source.height;
    }

    clone(): Shape {
        return new Rectangle(this);
    }
}