'use strict';

// Το better-slite3 είναι εντελώς σύγχρονο
// const Database = require('better-sqlite3');
// const sql = new Database('model/database/gymspot.sqlite', { fileMustExist: true });
// const sql = new db('./model/better-sqlite/tasks.sqlite', { fileMustExist: true });

const db = require('better-sqlite3');
const sql = new db('model/database/gymspot.sqlite', { fileMustExist: true });

exports.getAllPrograms = () => {
    //Φέρε όλες τις εργασίας από τη βάση
    const stmt = sql.prepare("SELECT * FROM Programs");
    let programs;
    // console.log("getAllPrograms");
    try {
        programs = stmt.all();
        return programs;
    } catch (err) {
        throw err;
    }
}

// exports.addUserToProgram = (userId,programName) => {
//     const stmt = sql.prepare('INSERT INTO Signs_up VALUES (?, ?, null, CURRENT_TIMESTAMP)');
//     let info;

//     try {
//         info = stmt.run(userId, programName);
//         return true;
//     }
//     catch (err) {
//         throw err;
//     }
// }

/* export let getTask = (taskId, userId, callback) => {
    //Φέρε μόνο μια εγγραφή (LIMIT) που να έχει id ίσο με taskId
    const stmt = sql.prepare("SELECT * FROM task WHERE id = ? AND user_id = ? LIMIT 0, 1");
    let task;
    try {
        task = stmt.all(taskId, userId);
    } catch (err) {
        callback(err, null);
    }
    callback(null, task);
} */




