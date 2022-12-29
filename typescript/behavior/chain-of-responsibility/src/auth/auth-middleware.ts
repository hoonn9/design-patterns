export abstract class AuthMiddleware {
    private next: AuthMiddleware;

    static link(first: AuthMiddleware, ...chain: AuthMiddleware[]) {
        let head = first;
        for (const nextChain of chain) {
            head.next = nextChain;
            head = nextChain;
        }
        return first;
    }

    abstract check(email: string, password: string): boolean;

    protected checkNext(email: string, password: string): boolean {
        if (!this.next) {
            return true;
        }
        return this.next.check(email, password);
    }
}