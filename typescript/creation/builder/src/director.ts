import {Builder} from "./builder";


export class Director {

    constructor(
        private builder: Builder
    ) {}

    setBuilder(builder: Builder) {
        this.builder = builder;
    }

    buildPrototype(): void {
        this.builder.addPartA();
    }

    buildFullFeature(): void {
        this.builder.addPartA();
        this.builder.addPartB();
        this.builder.addPartC();
    }
}