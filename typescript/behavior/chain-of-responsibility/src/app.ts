import {Server} from "./auth/server";
import {ThrottlingMiddleware} from "./auth/middleware/throttling-middleware";
import {UserExistsMiddleware} from "./auth/middleware/user-exists-middleware";
import {RoleCheckMiddleware} from "./auth/middleware/role-check-middleware";
import {AuthMiddleware} from "./auth/auth-middleware";

class App {
    static REQUEST_PER_MINUTES: number = 5;

    static execute() {
        const server = this.init();
        server.register("user@email.com", "password");

        console.log(server.login("user@email.com", "password"));
        console.log(server.login("admin@email.com", "admin"));

        console.log(server.login("user2@email.com", "password2"));
        console.log(server.login("user@email.com", "password2"));
        console.log(server.login("user@email.com", "password2"));
        console.log(server.login("user@email.com", "password2"));
        console.log(server.login("user@email.com", "password2"));

    }

    private static init(): Server {
        const server = new Server();

        server.register("admin@email.com", "admin");

        const authMiddleware = this.makeAuthChain(server);
        server.setAuthMiddleware(authMiddleware);

        return server;
    }

    private static makeAuthChain(server: Server): AuthMiddleware {
        const throttlingMiddleware = new ThrottlingMiddleware(this.REQUEST_PER_MINUTES);
        const userExistsMiddleware = new UserExistsMiddleware(server);
        const roleCheckMiddleware = new RoleCheckMiddleware();

        return AuthMiddleware.link(throttlingMiddleware, userExistsMiddleware, roleCheckMiddleware);
    }
}

App.execute();