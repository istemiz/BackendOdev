import mysql from "mysql";
import util from "util";

// create connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "testdb",
});

// promise wrapper to enable async await with MYSQL
db.query = util.promisify(db.query).bind(db);

db.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

export default db;
