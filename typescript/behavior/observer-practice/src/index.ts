abstract class Listener {
  abstract send(sender: User, message: string): void;
}

class User extends Listener {
  constructor(public name: string) {
    super();
  }

  public send(sender: User, message: string): void {
    console.log(`received by: ${sender.name}`);
    console.log(`message: ${message}`);
  }
}

class ChatRoom {
  private listeners: Listener[] = [];
  private chats: string[] = [];

  addListener(listener: Listener) {
    if (!this.listeners.some((prevListener) => prevListener === listener)) {
      this.listeners.push(listener);
    }
  }

  pushMessage(message: string, user: User) {
    console.log(`pushed message: ${message}`);
    this.chats.push(message);
    this.notifyListeners(user, message);
  }

  notifyListeners(user: User, message: string) {
    this.listeners.forEach((listener) => listener.send(user, message));
  }
}

class App {
  static run() {
    const chatRoom = new ChatRoom();

    const user1 = new User("kozel");
    const user2 = new User("blang");
    const user3 = new User("hoon");
    const user4 = new User("yeon");

    chatRoom.addListener(user1);
    chatRoom.addListener(user2);
    chatRoom.addListener(user3);
    chatRoom.addListener(user4);

    chatRoom.pushMessage("hello world!!", user2);
  }
}

App.run();
