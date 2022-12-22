import {DataSourceDecorator} from "./data-source.decorator";

export class EncryptionDecorator extends DataSourceDecorator {

    readData(): string {
        console.log("read data was decrypted.");
        return "encrypt read data (" + super.readData() + ")";
    }

    writeData(data: string): string {
        console.log("data encrypting...");
        return "encrypt write data (" + super.writeData(data) + ")";
    }
}