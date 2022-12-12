import {ProductCreator} from "../product.creator";
import {Food} from "./food.entity";
import {Product} from "../product.interface";

export class FoodCreator extends ProductCreator {

    factoryMethod(): Product {
        return new Food();
    }
}