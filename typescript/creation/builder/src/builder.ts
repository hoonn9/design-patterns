import {Product} from "./product.entity";


export interface Builder {

    addPartA(): void;
    addPartB(): void;
    addPartC(): void;
}


export class CarBuilder implements Builder {
    private product: Product = new Product();

    addPartA(): void {
        this.product.addPart('Car A Part');
    }

    addPartB(): void {
        this.product.addPart('Car B Part');
    }

    addPartC(): void {
        this.product.addPart('Car C Part');
    }

    reset(): void {
        this.product = new Product();
    }

    getProduct(): Product {
        const result = this.product;
        this.reset();
        return result;
    }
}


export class HouseBuilder implements Builder {
    private product: Product = new Product();

    addPartA(): void {
        this.product.addPart('House A Part');
    }

    addPartB(): void {
        this.product.addPart('House B Part');
    }

    addPartC(): void {
        this.product.addPart('House C Part');
    }

    reset(): void {
        this.product = new Product();
    }

    getProduct(): Product {
        const result = this.product;
        this.reset();
        return result;
    }
}