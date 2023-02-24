const express = require('express');
require('console.table')
const mysql = require('mysql2');



const PORT = process.env.PORT || 3001;
const app = express();

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
//View All Departments
if (data.selection === 'View All Departments') {
db.query('SELECT * FROM departments', (err, results) => {
    console.table(results);
  });
 }
//View All Employees
 if (data.selection === 'View All Employees') {
  db.query('SELECT * FROM employees', (err, results) => {
    console.table(results);
  })
 }
 //View All Roles
 if (data.selection === 'View All Roles') {
  db.query('SELECT * FROM roles', (err, results) => {
    console.table(results);
    // console.log(data.continue)
  })
 }
//  if (data.selection === 'Add Employee') {
//   return newEmployee()
//  }
}
//Update Employee Role
//Add Role
//Add Department

//Add Employee
function newEmployee(data) {
  return db.execute(
    `INSERT INTO employees (first_name, last_name, role_id, manager_id)
    VALUES ('${data.employeeFirstName}', '${data.employeeLastName}', '1', '1'); 
    SELECT * FROM employees;`, function (err, results, feilds) {
      console.log("New Employee Added")
      console.table(results)
    })
  // console.log('hit newEmployee function')
  // console.log(data.employeeLastName)
}

app.use((req, res) => {
    res.status(404).end();
  });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

  // console.log(db)
  module.exports = { selectDatabase, db, newEmployee }