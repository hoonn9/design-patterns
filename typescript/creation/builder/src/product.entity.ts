export class Product {

    constructor(
        public parts: string[] = []
    ) {}

    addPart(part: string): void {
        this.parts.push(part);
    }

    printParts(): void {
        const partText = this.parts.join(',');
        console.log(partText);
    }
}