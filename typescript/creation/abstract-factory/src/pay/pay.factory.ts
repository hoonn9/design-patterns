import {CardPay, PayFactory, PointPay} from "./pay.interface";
import {CardCartOrder, CardSingleOrder, PointCartOrder, PointSingleOrder} from "../order/order.factory";

export class SinglePayFactory implements PayFactory {
    createCardPay(): CardPay {
        return new CardSingleOrder();
    }

    createPointPay(): PointPay {
        return new PointSingleOrder();
    }
}

export class CartPayFactory implements PayFactory {
    createCardPay(): CardPay {
        return new CardCartOrder();
    }

    createPointPay(): PointPay {
        return new PointCartOrder();
    }
}