import {ProductCreator} from "../product.creator";
import {Product} from "../product.interface";
import {Book} from "./book.entity";

export class BookCreator extends ProductCreator {

    factoryMethod(): Product {
        return new Book();
    }
}