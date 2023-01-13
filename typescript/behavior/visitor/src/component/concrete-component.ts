import {Component} from "./component.interface";
import {Visitor} from "../visitor.interface";

export class ConcreteComponentA implements Component {

    accept(visitor: Visitor): void {
        visitor.visitConcreteComponentA(this);
    }

    exclusiveMethodOfConcreteComponentA(): string {
        return 'A';
    }
}

export class ConcreteComponentB implements Component {

    accept(visitor: Visitor): void {
        visitor.visitConcreteComponentB(this);
    }

    specialMethodOfConcreteComponentB(): string {
        return 'B';
    }
}