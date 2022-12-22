import {FileDataSource} from "./data-source/file-data-source";
import crypto from "crypto"
import {EncryptionDecorator} from "./data-source/decorator/encryption.decorator";
import {CompressionDecorator} from "./data-source/decorator/compression.decorator";
import {CompoundManager} from "./data-source/compound.decorator";

class App {

    static execute(options: {
        isEncrypt: boolean;
        isCompress: boolean;
    }) {
        let dataSource = new FileDataSource("video.mp4");
        const newData = crypto.randomBytes(16).toString("base64");

        if (options.isEncrypt && options.isCompress) {
          const deco = new CompressionDecorator(
              new EncryptionDecorator(dataSource)
          );
          console.log(deco.readData());
          console.log(deco.writeData(newData));
        } else if (options.isEncrypt) {
            console.log(new EncryptionDecorator(dataSource).readData());
            console.log(new EncryptionDecorator(dataSource).writeData(newData));
        } else if (options.isCompress) {
            console.log(new CompressionDecorator(dataSource).readData());
            console.log(new CompressionDecorator(dataSource).writeData(newData));
        } else {
            console.log(dataSource.readData());
            console.log(dataSource.writeData(newData));
        }
    }

    static compound() {
        let dataSource = new FileDataSource("video.mp4");
        const newData = crypto.randomBytes(16).toString("base64");

        // Decorator Compounding
        const manager = new CompoundManager(dataSource);
        manager.load();
        manager.save(newData);
    }
}

App.execute({
    isEncrypt: true,
    isCompress: true,
});

App.compound();