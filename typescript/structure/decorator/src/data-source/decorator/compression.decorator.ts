import {DataSourceDecorator} from "./data-source.decorator";

export class CompressionDecorator extends DataSourceDecorator {

    readData(): string {
        console.log("read data was uncompressed");
        return "compress reading data (" + super.readData() + ")" ;
    }

    writeData(data: string): string {
        console.log("data was compressed");
        return "compress write data (" + super.writeData(data) + ")";
    }
}