const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "studentCRUD",
});

db.connect((err) => {
  if (err) {
    console.error("Database not connected!");
  } else {
    console.log(" Connected successfully to MySQL!");
  }
});

module.exports = db;
