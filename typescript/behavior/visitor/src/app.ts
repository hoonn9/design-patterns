import {ConcreteComponentA, ConcreteComponentB} from "./component/concrete-component";
import {ConcreteVisitorA, ConcreteVisitorB} from "./visitor/concrete-visitor";

class App {

    static execute() {
        let concreteComponentA = new ConcreteComponentA();
        let concreteComponentB = new ConcreteComponentB();

        let concreteVisitorA = new ConcreteVisitorA();
        let concreteVisitorB = new ConcreteVisitorB();

        concreteComponentA.accept(concreteVisitorA);
        concreteComponentA.accept(concreteVisitorB);
        concreteComponentB.accept(concreteVisitorA);
        concreteComponentB.accept(concreteVisitorB);
    }
}

App.execute();