import {Mediator} from "../mediator.interface";

export class BaseComponent {
    constructor(
        public readonly name: string,
        protected mediator: Mediator) {
    }
}