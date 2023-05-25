const sqlite = require('better-sqlite3');
const db = new sqlite('../database/gymspot.sqlite');

const userData = {
    username: 'Nikolas',
    first_name: 'Nikolas',
    last_name: 'Filipatos',
    password: 'mypassword',
    admin: 0, // Assuming 0 represents a non-admin user
  };

const insertUserQuery = db.prepare(`
  INSERT INTO User (username, first_name, last_name, password, admin)
  VALUES (?, ?, ?, ?, ?)
`);

const result = insertUserQuery.run(
    userData.username,
    userData.first_name,
    userData.last_name,
    userData.password,
    userData.admin
  );

  db.close();
  
  console.log('User inserted with ID:', result.lastInsertRowid);