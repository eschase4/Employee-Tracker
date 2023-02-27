require('console.table')
const mysql = require('mysql2');
const db = require('../config/connection')

let roleArr = []
    db.query(`SELECT title FROM roles;`, function (err, results) {
    if (err) {
      console.log(err)
    }
    for (i = 0; i < results.length; i++) {
      roleArr.push(results[i].title)
    }
    console.log(roleArr)
  })


function newRole(data) {
    let department;
      switch (data.roleDepartment) {
        case 'Accounting':
          department = 1;
          break;
        case 'Sales':
          department = 2;
          break;
        case 'HR':
          department = 3;
          break;
        case 'Management':
          department = 4;
          break;
        case 'Customer Service':
          department = 5;
          break;
        case 'Factory Workers':
          department = 6;
          break;
      }
      const sql =  `INSERT INTO roles (title, salary, department_id)
      VALUES ('${data.inputRole}', '${data.inputSalary}', '${department}');`
      return db.query(sql, function (err, results) {
        if (err) {
          console.log(err)
        }
      console.log("New Role Added")
      console.table(results)
      })
    }
    
module.exports = { newRole, roleArr }