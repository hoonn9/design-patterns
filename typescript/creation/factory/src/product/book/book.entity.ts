import {Product} from "../product.interface";

export class Book implements Product {

    operation() {
        return Book.name + " do stuff!";
    }
}