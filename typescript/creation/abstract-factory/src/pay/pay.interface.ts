export interface CardPay {
    canPay(cardNumber: number): boolean;
}

export interface PointPay {
    getPoint(): number;
}

export interface PayFactory {
    createCardPay(): CardPay;
    createPointPay(): PointPay;
}
