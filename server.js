const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql2');

// express middleboys
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: 'Weatherford14!',
    database: 'election'
  },
  console.log('Connected to the election database.')
);

// GET a single candidate
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(row);
// });

// db.query("SELECT * FROM candidates", (err, rows) => {
//   console.log(rows);
// });

// Delete a candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

// Create a candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connections) 
//               VALUES (?,?,?,?)`;
// const params = [];

db.query(sql, params, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});

  // Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });

  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});