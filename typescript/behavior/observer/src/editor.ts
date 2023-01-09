import {EventManager} from "./publisher/event-manager";

export class Editor {
    public events: EventManager = new EventManager();
    private filename?: string;

    openFile(filename: string): void {
        this.filename = filename;
        this.events.notify('open', this.filename);
    }

    saveFile(): void {
        if (!this.filename) {
            console.log("please open the file first.");
            return;
        }
        this.events.notify('save', this.filename);
    }
}