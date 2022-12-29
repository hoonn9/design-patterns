import {Command} from "./command";

export class CutCommand extends Command {
    execute(): boolean {
        if (!this.editor.textField) {
            return false;
        }

        this.backup();
        this.editor.clipboard = this.editor.textField.getSelectText();
        this.editor.textField.text = this.cutString(this.editor.textField.getSelectText());


        return true;
    }

    cutString(source: string): string {
        const index = this.editor.textField.text.indexOf(source);
        console.log(source, index)
        if (index < 0) {
            return this.editor.textField.text;
        }

        return this.editor.textField.text.slice(0, index) + this.editor.textField.text.slice(index + source.length);
    }
}