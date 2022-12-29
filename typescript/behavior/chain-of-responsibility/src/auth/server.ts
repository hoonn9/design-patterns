import {AuthMiddleware} from "./auth-middleware";

export class Server {
    private users: Map<string, string> = new Map();
    private authMiddleware: AuthMiddleware;

    setAuthMiddleware(authMiddleware: AuthMiddleware): void {
        this.authMiddleware = authMiddleware;
    }

    register(email: string, password: string): void {
        this.users.set(email, password);
    }

    hasEmail(email: string): boolean {
        return this.users.has(email);
    }

    login(email: string, password: string): boolean {
        return this.authMiddleware.check(email, password);
    }

    isValidPassword(email: string, password: string): boolean {
        return this.users.get(email) === password;
    }
}