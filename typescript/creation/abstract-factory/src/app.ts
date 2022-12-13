import {PayFactory} from "./pay/pay.interface";
import {CartPayFactory, SinglePayFactory} from "./pay/pay.factory";

class App {

    static execute(factory: PayFactory) {
        const cardPay = factory.createCardPay();
        const pointPay = factory.createPointPay();
    }
}


App.execute(new SinglePayFactory());
App.execute(new CartPayFactory());