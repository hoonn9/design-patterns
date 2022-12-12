import {Product} from "./product.interface";

export abstract class ProductCreator {
    abstract factoryMethod(): Product;

    someOperation(): string {
        const product = this.factoryMethod();

        return product.operation();
    }
}

