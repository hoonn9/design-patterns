import {ProductCreator} from "../product/product.creator";


export class Client {

    consume(creator: ProductCreator) {
        const product = creator.factoryMethod();
        const result = product.operation();
        console.log(result);
    }
}