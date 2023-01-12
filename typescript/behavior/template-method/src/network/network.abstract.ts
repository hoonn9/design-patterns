export abstract class Network {
    protected constructor(public username: string, public password: string) {
    }


    // Template Method
    post(message: string): boolean {
        if (this.logIn(this.username, this.password)) {
            const result = this.sendData(message);
            this.logOut();
            return result;
        }
        return false;
    }

    abstract logIn(username: string, password: string): boolean;
    abstract logOut(): void;
    abstract sendData(data: string): boolean;
}