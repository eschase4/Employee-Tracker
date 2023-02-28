require('console.table')
const mysql = require('mysql2');
const db = require('../config/connection')
const { departmentArr } = require('./departmentManager')

let roleArr = []
    db.query(`SELECT title FROM roles;`, function (err, results) {
    if (err) {
      console.log(err)
    }
    for (i = 0; i < results.length; i++) {
      roleArr.push(results[i].title)
    }
  })

function newRole(data) {
  let newArr = []
  let departmentNum = 1
  for (i = 0; i <= departmentArr.length; i++) {
    if (departmentArr[i] != data.roleDepartment) {
     newArr.push(roleArr[i])
    } else if (roleArr[i] == data.roleDepartment) {
      departmentNum = newArr.length + 1
     //  console.log(roleNum)
    }
 }
      const sql =  `INSERT INTO roles (title, salary, department_id)
      VALUES ('${data.inputRole}', '${data.inputSalary}', '${departmentNum}');`
      return db.query(sql, function (err, results) {
        if (err) {
          console.log(err)
        }
      console.log("New Role Added")
      console.table(results)
      })
    }
    
module.exports = { newRole, roleArr }