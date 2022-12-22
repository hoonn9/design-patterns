import {DataSourceDecorator} from "./decorator/data-source.decorator";
import {DataSource} from "./data-source.interface";
import {CompressionDecorator} from "./decorator/compression.decorator";
import {EncryptionDecorator} from "./decorator/encryption.decorator";

export class CompoundManager {
    defaultDecorator: DataSourceDecorator;
    constructor(private dataSource: DataSource) {
        this.defaultDecorator = new CompressionDecorator(new EncryptionDecorator(dataSource));
    }

    load(): string {
        return this.defaultDecorator.readData();
    }

    save(data: string): string {
        return this.defaultDecorator.writeData(data);
    }
}