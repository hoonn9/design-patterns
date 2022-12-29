import {AuthMiddleware} from "../auth-middleware";
import {Server} from "../server";

export class UserExistsMiddleware extends AuthMiddleware {

    constructor(private readonly server: Server) {
        super();
    }


    check(email: string, password: string): boolean {
        if (!this.server.hasEmail(email)) {
            console.log("This email is not registered!");
            return false;
        }

        if (!this.server.isValidPassword(email, password)) {
            console.log("Wrong password!");
            return false;
        }

        return this.checkNext(email, password);
    }
}