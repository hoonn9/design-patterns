import {DataSource} from "../data-source.interface";

export class DataSourceDecorator implements DataSource {
    constructor(protected source: DataSource) {}

    readData(): string {
        return this.source.readData();
    }

    writeData(data: string): string {
        return this.source.writeData(data);
    }
}