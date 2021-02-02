const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database.sqlite');


db.run(
    `CREATE TABLE IF NOT EXISTS 'Artist' (
        id INTEGER NOT NULL PRIMARY KEY,
        name TEXT NOT NULL,
        date_of_birth TEXT NOT NULL,
        biography TEXT NOT NULL,
        is_currently_employed INTEGER NOT NULL DEFAULT 1
    );`);

    db.run(`INSERT INTO Artist (id, name, date_of_birth, biography, is_currently_employed)
    VALUES (1, 'Cem', '12-30-1996', 'One to Nut', 1)`);
