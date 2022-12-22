import {DataSource} from "./data-source.interface";

export class FileDataSource implements DataSource {
    constructor(private filename: string) {}

    readData(): string {
        return "reading file datasource. filename: " + this.filename;
    }

    writeData(data: string): string {
        return "writing file datasource. data: " + data + " filename: " + this.filename;
    }
}