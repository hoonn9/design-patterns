import {Command} from "./command";

export class CopyCommand extends Command {

    execute(): boolean {
        this.editor.clipboard = this.editor.textField.text;
        return true;
    }
}