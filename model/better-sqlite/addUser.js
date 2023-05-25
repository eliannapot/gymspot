'use strict';

import db from 'better-sqlite3'
const sql = db('../database/gymspot.sqlite');
// Τι χρειαζομαι το const sql = new db....

export let addUser = (user) => {
    const stmt = sql.prepare('INSERT INTO User VALUES (?, ?, ?, 0)');
    let info;

    try {
        info = stmt.run(user.username, user.email, user.password);
        return true;
    }
    catch (err) {
        throw err;
    }
}