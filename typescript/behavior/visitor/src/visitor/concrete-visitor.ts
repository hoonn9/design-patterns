import {Visitor} from "../visitor.interface";
import {ConcreteComponentA, ConcreteComponentB} from "../component/concrete-component";

export class ConcreteVisitorA implements Visitor {
    visitConcreteComponentA(element: ConcreteComponentA): void {
        console.log(`${element.exclusiveMethodOfConcreteComponentA()} + ConcreteVisitorA`);
    }

    visitConcreteComponentB(element: ConcreteComponentB): void {
        console.log(`${element.specialMethodOfConcreteComponentB()} + ConcreteVisitorA`);
    }
}

export class ConcreteVisitorB implements Visitor {
    visitConcreteComponentA(element: ConcreteComponentA): void {
        console.log(`${element.exclusiveMethodOfConcreteComponentA()} + ConcreteVisitorB`);
    }

    visitConcreteComponentB(element: ConcreteComponentB): void {
        console.log(`${element.specialMethodOfConcreteComponentB()} + ConcreteVisitorB`);
    }
}
