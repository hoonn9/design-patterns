export interface RouteBuilderStrategy {
    buildRoute(from: number, to: number): number[];
}