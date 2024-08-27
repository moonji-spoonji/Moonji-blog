import Database from 'better-sqlite3';
import { Post } from './db/models/post'
import { User } from './db/models/users';
const db = new Database('posts.db', {verbose: console.log});
db.pragma('journal_mode = WAL');

export const models = {
    Post: new Post(db), 
    User: new User(db), 
}