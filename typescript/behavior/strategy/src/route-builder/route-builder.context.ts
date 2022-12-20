import {RouteBuilderStrategy} from "./route-builder-strategy";

export class RouteBuilderContext {

    constructor(
        private wrappedStrategy: RouteBuilderStrategy
    ) {}

    set strategy(strategy: RouteBuilderStrategy) {
        this.wrappedStrategy = strategy;
    }

    get strategy() {
        return this.wrappedStrategy;
    }

    build(from: number, to: number) {
        return this.wrappedStrategy.buildRoute(from, to);
    }
}