import {ConcreteComponentA, ConcreteComponentB} from "./component/concrete-component";

export interface Visitor {
    visitConcreteComponentA(element: ConcreteComponentA): void;
    visitConcreteComponentB(element: ConcreteComponentB): void;
}