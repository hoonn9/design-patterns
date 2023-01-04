import {BaseComponent} from "./component/base-component";

export interface Mediator {
    notify(sender: object, event: string): void;
    registerComponent(component: BaseComponent): void;
}