import {Client} from "./client/client.entity";
import {BookCreator} from "./product/book/book.creator";
import {FoodCreator} from "./product/food/food.creator";

class App {

    static execute() {
        const client = new Client();
        client.consume(new BookCreator());
        client.consume(new FoodCreator());
    }
}


App.execute();
