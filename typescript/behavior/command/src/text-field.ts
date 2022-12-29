export class TextField {
    private selectedText: string = "";
    constructor(public text: string) {}

    getSelectText(): string {
        return this.selectedText;
    }

    setSelectText(startIndex: number, endIndex: number): void {
        if (startIndex < 0 || startIndex > endIndex) {
            return;
        }

        if (this.text.length <= endIndex) {
            return;
        }

        this.selectedText = this.text.slice(startIndex, endIndex);
    }
}