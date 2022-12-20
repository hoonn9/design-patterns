import {RouteBuilderContext} from "./route-builder/route-builder.context";
import {PublicTransport} from "./route-builder/strategy/public-transport";
import {Car} from "./route-builder/strategy/car";

export class App {

    static execute() {
        const routeContext = new RouteBuilderContext(new PublicTransport());
        const publicTransportRoutes = routeContext.build(1, 10);
        console.log(publicTransportRoutes);

        routeContext.strategy = new Car();
        const carTransportRoutes = routeContext.build(1, 10);
        console.log(carTransportRoutes);
    }
}

App.execute();