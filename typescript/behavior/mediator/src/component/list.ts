import {BaseComponent} from "./base-component";

export class List extends BaseComponent {
    public elements: string[] = [];

    getList(): void {
        this.mediator.notify(this, "getList");
    }
}