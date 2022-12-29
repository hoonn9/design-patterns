import {Command} from "./command/command";
import {CommandHistory} from "./command/command-history";
import {TextField} from "./text-field";
import {Button} from "./button";
import {CopyCommand} from "./command/copy-command";
import {CutCommand} from "./command/cut-command";
import {PasteCommand} from "./command/paste-command";

export class Editor {
    public textField: TextField = new TextField("");
    public clipboard: string = "";
    private history: CommandHistory = new CommandHistory();

    init(): void {
        const ctrlC = new Button(() => {
            this.executeCommand(new CopyCommand(this));
        });

        const ctrlX = new Button(() => {
            this.executeCommand(new CutCommand(this));
        });

        const ctrlV = new Button(() => {
            this.executeCommand(new PasteCommand(this));
        });

        const ctrlZ = new Button(() => {
            this.undo();
        });

        this.textField.text = "I love programming.";

        this.textField.setSelectText(2, 5);

        ctrlC.click();
        console.log(this.clipboard);

        ctrlV.click();
        console.log(this.textField);

        ctrlZ.click();

        console.log(this.textField);

        this.textField.setSelectText(2, 6);
        ctrlX.click();
        console.log(this.clipboard);
        console.log(this.textField);
        ctrlV.click();
        console.log(this.textField);
        ctrlZ.click();
        console.log(this.textField);

    }

    private executeCommand(command: Command): void {
        if (command.execute()) {
            this.history.push(command);
        }
    }

    private undo(): void {
        if (this.history.isEmpty()) {
            return;
        }

        const command = this.history.pop();
        if (command) {
            command.undo();
        }
    }
}