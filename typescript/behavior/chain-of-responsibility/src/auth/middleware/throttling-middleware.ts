import {AuthMiddleware} from "../auth-middleware";

export class ThrottlingMiddleware extends AuthMiddleware {
    private request: number = 0;
    private currentTime: number = Date.now();

    constructor(
        private requestPerMinutes: number,
    ) {
        super();
    }


    check(email: string, password: string): boolean {
        if (Date.now() > this.currentTime + 60000) {
            this.request = 0;
            this.currentTime = Date.now();
        }

        this.request++;

        if (this.request > this.requestPerMinutes) {
            console.log("Request limit exceeded!");
            return false;
        }

        // execute next chain
        return this.checkNext(email, password);
    }
}