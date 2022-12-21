import {Editor} from "./editor";
import {Circle} from "./graphic/circle";

export class App {

    static execute() {
        const editor = new Editor();
        editor.load();
        editor.getGraphics().draw();

        const newGroup = editor.selectGroup([new Circle(1, 3, 5), new Circle(2, 6, 5)]);
        newGroup.move();
        newGroup.draw();
    }
}

App.execute();