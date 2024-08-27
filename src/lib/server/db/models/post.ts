import type { Database } from "better-sqlite3";

type PostType = {
    title: string,
    subtitle: string, 
    // image: string, 
    category: string, 
    content: string
}

export class Post {
    private db: Database;
    private statements = new Map<string, any>();
    
    constructor(db: Database) {
        this.db = db;
        this.init();
    }

    private init() {
        const stmt = `
            CREATE TABLE IF NOT EXISTS posts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT, 
                subtitle TEXT, 
                category TEXT, 
                content TEXT
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

    create(data: PostType) {
        const stmt = `
            INSERT INTO posts (title, subtitle, category, content)
            VALUES (@title, @subtitle, @category, @content)
        `;
        this.prepare("create", stmt).run(data);
    }

    findAll() {
        const stmt = `
            SELECT id, title, subtitle, category, content
            FROM posts
        `;
        return this.prepare("findAll", stmt).all();
    }

    findByPk(id: number) {
        const stmt = ` 
            SELECT id, title, subtitle, category, content 
            FROM posts
            WHERE id = @id
        `;
        return this.prepare("findByPk", stmt).get({ id });
    }

    updatePost(id: number, content: string) {
        const stmt = `
            UPDATE posts 
            SET content = @content 
            WHERE id = @id
        `;

        this.prepare("updatePost", stmt).run({ id, content });
    }

    
}