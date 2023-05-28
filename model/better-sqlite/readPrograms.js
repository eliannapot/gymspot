'use strict';

import db from 'better-sqlite3'
const sql = db('../database/gymspot.sqlite');
// Τι χρειαζομαι το const sql = new db....

export let readPrograms = (Programs) => {
    const stmt = sql.prepare('SELECT * FROM Programs WHERE name = ?');
    let info;
    try {
        info = stmt.all(Programs.name);
        return true;
    }
    catch (err) {
        throw err;
    }
}