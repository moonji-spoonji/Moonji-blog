import type { Database } from "better-sqlite3";

type UserType = {
    firstName: string,
    lastName: string, 
    username: string, 
    password: string
    pfp: string, 
}

export class User {
    private db: Database;
    private statements = new Map<string, any>();
    
    constructor(db: Database) {
        this.db = db;
        this.init();
    }

    private init() {
        const stmt = `
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                firstName TEXT, 
                lastName TEXT, 
                username TEXT, 
                password TEXT,
                pfp TEXT
            )
        `
        this.db.exec(stmt);
    }

    private prepare(name: string, stmt: string) {
        if(this.statements.has(name)) return this.statements.get(name);
        
        const preparedStatement = this.db.prepare(stmt);
        this.statements.set(name, preparedStatement);
        return preparedStatement;
    } 

    create(data: UserType) {
        const stmt = `
            INSERT INTO users (firstName, lastName, userame, password, pfp)
            VALUES (@firstName, @lastName, @userame, @password, @pfp)
        `;
        this.prepare("create", stmt).run(data);
    }

    findAll() {
            const stmt = `
                SELECT id, firstName, lastName, userame, password, pfp
                FROM users
            `;
            return this.prepare("findAll", stmt).all();
    }

    findByPk(id: number) {
        const stmt = ` 
            SELECT id, firstName, lastName, userame, password, pfp
            FROM users
            WHERE id = @id
        `;
        return this.prepare("findByPk", stmt).get({ id });
    }

    updateUser(id: number, username: string, password: string) {
        const stmt = `
            UPDATE users 
            SET username = @username, password = @password 
            WHERE id = @id
        `;

        this.prepare("updateUser", stmt).run({ id, username, password });
    }

    
}