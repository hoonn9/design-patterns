import {CardPay, PointPay} from "../pay/pay.interface";


export class CardSingleOrder implements CardPay {
    canPay(cardNumber: number): boolean {
        return true;
    }
}

export class PointSingleOrder implements PointPay {
    getPoint(): number {
        return 0;
    }
}

export class CardCartOrder implements CardPay {
    canPay(cardNumber: number): boolean {
        return true;
    }
}

export class PointCartOrder implements PointPay {
    getPoint(): number {
        return 0;
    }
}