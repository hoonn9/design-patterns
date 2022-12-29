import {Command} from "./command";

export class PasteCommand extends Command {
    execute(): boolean {
        if (!this.editor.clipboard) {
            return false;
        }

        this.backup();
        this.editor.textField.text += this.editor.clipboard;

        return true;
    }
}