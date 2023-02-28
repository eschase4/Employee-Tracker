require('console.table')
const mysql = require('mysql2');
const db = require('../config/connection')

let departmentArr = []
    db.query(`SELECT department FROM departments;`, function (err, results) {
    if (err) {
      console.log(err)
    }
    for (i = 0; i < results.length; i++) {
      departmentArr.push(results[i].department)
    }
  })

function newDepartment(data) {
      const sql =  `INSERT INTO departments (department)
      VALUES ('${data.inputDepartment}');`
      return db.query(sql, function (err, results) {
        if (err) {
          console.log(err)
        }
      console.log("New Department Added")
      console.table(results)
      })
    }
    
module.exports = { newDepartment, departmentArr }