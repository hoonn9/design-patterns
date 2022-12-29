import {Editor} from "../editor";

export abstract class Command {
    private _backup: string = "";
    constructor(public editor: Editor) {
    }

    abstract execute(): boolean;

    protected backup(): void {
        this._backup = this.editor.textField.text;
    }

    undo(): void {
        this.editor.textField.text = this._backup;
    }
}
