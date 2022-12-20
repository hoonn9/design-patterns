import {RouteBuilderStrategy} from "../route-builder-strategy";

export class Car implements RouteBuilderStrategy {
    buildRoute(from: number, to: number): number[] {
        return [from, to];
    }
}