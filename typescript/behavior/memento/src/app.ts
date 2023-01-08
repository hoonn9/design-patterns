import {Originator} from "./originator";
import {Caretaker} from "./caretaker";

class App {

    static execute() {
        const originator = new Originator("blang is so cute");
        const caretaker = new Caretaker(originator);

        caretaker.backup();
        originator.doSomething();

        caretaker.undo();

        caretaker.backup();
        originator.doSomething();

        caretaker.backup();
        originator.doSomething();

        caretaker.backup();
        originator.doSomething();

        caretaker.showHistory();
        caretaker.undo();

        caretaker.undo();
    }
}

App.execute();