import {AuthMiddleware} from "../auth-middleware";

export class RoleCheckMiddleware extends AuthMiddleware {

    check(email: string, password: string): boolean {
        if (email === "admin@email.com" && password === "admin") {
            console.log("Hello. admin!");
            return true;
        }

        return this.checkNext(email, password);
    }
}