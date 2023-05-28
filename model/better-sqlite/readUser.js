'use strict';

import db from 'better-sqlite3'
const sql = new db('model/database/gymspot.sqlite', { fileMustExist: true });
// Τι χρειαζομαι το const sql = new db....

export let readUser = (user) => {
    const stmt = sql.prepare('SELECT * FROM User task WHERE username = ?');
    let info;
    try {
        info = stmt.all(user.username);
        return true;
    }
    catch (err) {
        throw err;
    }
}