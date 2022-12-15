import {CarBuilder, HouseBuilder} from "./builder";
import {Director} from "./director";


class App {

    static execute(): void {
        const carBuilder = new CarBuilder();
        const director = new Director(carBuilder);

        director.buildPrototype();
        const carPrototype = carBuilder.getProduct();
        carPrototype.printParts();

        director.buildFullFeature();
        const carFullFeature = carBuilder.getProduct();
        carFullFeature.printParts();

        const houseBuilder = new HouseBuilder();
        director.setBuilder(houseBuilder);

        director.buildPrototype();
        const housePrototype = houseBuilder.getProduct();
        housePrototype.printParts();

        director.buildFullFeature();
        const houseFullFeature = houseBuilder.getProduct();
        houseFullFeature.printParts();
    }
}

App.execute();