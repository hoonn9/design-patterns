import {BaseComponent} from "./base-component";

export class Button extends BaseComponent {
    click(): void  {
        console.log(`component: ${this.name}: clicked`)
        this.mediator.notify(this, "click");
    }
}