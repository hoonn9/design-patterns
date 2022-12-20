import {RouteBuilderStrategy} from "../route-builder-strategy";

export class PublicTransport implements RouteBuilderStrategy {
    buildRoute(from: number, to: number): number[] {
        return [from, from + 1, to - 1, to];
    }
}