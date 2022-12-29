import {Editor} from "./editor";

class App {

    static execute() {
        const editor = new Editor();
        editor.init();
    }
}

App.execute();