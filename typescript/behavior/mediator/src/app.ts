import {FriendMediator} from "./friend-mediator";
import {Button} from "./component/button";
import {List} from "./component/list";

class App {

    static execute() {
        const friendMediator = new FriendMediator();

        // 컴포넌트의 필드로 넘겨 중재자를 실행하거나
        let addButton = new Button('AddButton', friendMediator);
        friendMediator.registerComponent(addButton);
        let deleteButton = new Button('DeleteButton', friendMediator);
        friendMediator.registerComponent(deleteButton);
        let friendList = new List('FriendList', friendMediator);
        friendMediator.registerComponent(friendList);

        addButton.click();
        deleteButton.click();

        // mediator 에 등록한 컴포넌트들을 직접 mediator 에서 제어한다.
        friendList.getList();
    }
}

App.execute();