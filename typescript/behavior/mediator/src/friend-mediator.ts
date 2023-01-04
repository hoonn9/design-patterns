import {Mediator} from "./mediator.interface";
import {BaseComponent} from "./component/base-component";
import {Button} from "./component/button";
import {List} from "./component/list";

export class FriendMediator implements Mediator {
    private addButton?: Button;
    private deleteButton?: Button;
    private list?: List;

    notify(sender: BaseComponent, event: string) {
        console.log(`component: ${sender.name} call event(${event}) by ${FriendMediator.name}`);

        if (sender instanceof List && event === 'getList') {
            console.log(sender.elements);
        }
    }

    registerComponent(component: BaseComponent): void {
        switch (component.name) {
            case "AddButton":
                this.addButton = component as Button;
                break;
            case "DeleteButton":
                this.deleteButton = component as Button;
                break;
            case "FriendMediator":
                this.list = component as List;
                break;
        }
    }

    addFriend(friendName: string) {
        this.list?.elements.push(friendName);
    }

    deleteFriend() {
        this.list?.elements.pop();
    }

    clear() {
        if (this.list) {
            this.list.elements = [];
        }
    }

    createGUI() {
        if (this.addButton) {
            console.log(`creating ${this.addButton.name} UI`);
        }

        if (this.deleteButton) {
            console.log(`creating ${this.deleteButton.name} UI`);
        }

        if (this.list) {
            console.log(`creating ${this.list.name} UI`);
        }
    }
}