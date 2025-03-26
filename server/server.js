const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "studentCRUD",
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database not connected!");
  } else {
    console.log("✅ Connected successfully to MySQL!");
  }
});

//add student
app.post("/add", (req, res) => {
  const { firstname, lastname, course, email } = req.body;

  const sql =
    "INSERT INTO student (firstname, lastname, course, email) VALUES (?, ?, ?,?)";
  const values = [firstname, lastname, course, email];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Adding error");
      return res.status(500).json({ message: "Failed to add student" });
    } else {
      res.status(200).json({ message: "added successfully!" });
    }
  });
});

//fetching
app.get("/student", (req, res) => {
  const sql = "SELECT * FROM student";
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error fetching students:", err);
      res.status(500).json({ message: "Error fetching students" });
    } else {
      res.status(200).json(result);
    }
  });
});

// Routes
app.get("/", (req, res) => {
  res.send("Welcome madafackert 😎");
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
