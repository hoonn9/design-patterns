import {Product} from "../product.interface";

export class Food implements Product {

    operation() {
        return Food.name + " do stuff!";
    }
}