export class Database {
    private static instance: Database | null = null;

    private constructor() {}

    static getInstance(): Database {
        if (Database.instance === null) {
            Database.instance = new Database();
        }

        return Database.instance;
    }

    query(sql: string) {
        console.log("executed sql: ", sql);
    }
}