import {Database} from "./database/database";

class App {

    static execute() {
        // ❌
        // const db = new Database();

        const connection = Database.getInstance();

        connection.query("SELECT * FROM user");

        const connection2 = Database.getInstance();

        if (connection === connection2) {
            console.log("connection is equal to connection 2")
        }
    }
}

App.execute();