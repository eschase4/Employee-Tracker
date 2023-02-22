const express = require('express');
require('console.table')
const mysql = require('mysql2');
// const CLI = require('./cli')


const PORT = process.env.PORT || 3001;
const app = express();
// const cli = new CLI()

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'Teke1005!',
    database: 'business_db'
  },
  console.log(`Connected to the business_db database.`)
);

function selectDatabase(data) {
  // console.log(data)
if (data.selection === 'View All Departments') {
db.query('SELECT * FROM departments', function (err, results) {
    console.table(results);
    // cli.next()
  });
 }

 if (data.selection === 'View All Employees') {
  db.query('SELECT * FROM employees', function (err, results) {
    console.table(results);
  })
 }
 if (data.selection === 'View All Roles') {
  db.query('SELECT * FROM roles', function (err, results) {
    console.table(results);
  })
 }
}

app.use((req, res) => {
    res.status(404).end();
  });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

  // console.log(db)
  module.exports = { selectDatabase, db }