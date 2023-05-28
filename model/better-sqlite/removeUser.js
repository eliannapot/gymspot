'use strict';

import db from 'better-sqlite3'
const sql = db('../database/gymspot.sqlite');
// Τι χρειαζομαι το const sql = new db....

export let readAllUsers = (user) => {
    const stmt = sql.prepare('DELETE FROM User WHERE username = ?');
    let info;
    try {
        info = stmt.all(user.username);
        return true;
    }
    catch (err) {
        throw err;
    }
}