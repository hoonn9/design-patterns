import {Editor} from "./editor";
import {EmailNotificationListener} from "./listener/email-notification-listener";
import {LogOpenListener} from "./listener/log-open-listener";

class App {

    static execute() {
        let editor = new Editor();
        editor.openFile("kozel.json");
        editor.saveFile();

        let emailNotificationListener = new EmailNotificationListener("blang@email.com");

        editor = new Editor();
        editor.events.subscribe('open', emailNotificationListener);
        editor.events.subscribe('save', emailNotificationListener);
        editor.openFile('kozel.json');
        editor.saveFile();

        let logOpenListener = new LogOpenListener("blang@email.com");

        editor.events.subscribe('open', logOpenListener);
        editor.events.subscribe('save', logOpenListener);
        editor.openFile('blang.json');
        editor.saveFile();
    }
}

App.execute();