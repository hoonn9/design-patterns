export class Shape {
    public x: number;
    public y: number;
    public color: string;
    public component: object;

    constructor() {}

    clone(): Shape {
        const clone = new Shape();

        clone.x = this.x;
        clone.y = this.y;
        clone.color = this.color;
        clone.component = Object.create(this.component);

        return clone;
    }
}