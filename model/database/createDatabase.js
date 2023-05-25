const sqlite = require('better-sqlite3');

const createDatabase = () => {
  const databaseName = 'gymspot.sqlite';
  const sqlFile = 'database.sql';

  const db = new sqlite(databaseName);

  const sqlStatements = require('fs').readFileSync(sqlFile, 'utf8');

  db.exec(sqlStatements);

  console.log('Database created successfully.');

  db.close();
};

createDatabase();

