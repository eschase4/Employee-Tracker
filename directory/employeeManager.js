require('console.table')
const mysql = require('mysql2');
const db = require('../config/connection')
const { roleArr } = require('./roleManager')

console.log(roleArr)

let employeeArr = []
    db.query(`SELECT first_name, last_name FROM employees;`, function (err, results) {
    if (err) {
      console.log(err)
    }
    for (i = 0; i < results.length; i++) {
      employeeArr.push(results[i].first_name.concat(" ", results[i].last_name))
    }
  })


  //Add Employee
function newEmployee(data) {
      let counterArr = []
      for (i = 0; i <= roleArr.length; i++) {
        if (roleArr[i] != data.role) {
         counterArr.push(roleArr[i])
        } else if (roleArr[i] == data.role) {
          roleNum = counterArr.length + 1
         //  console.log(roleNum)
        }
     }
     let otherCounterArr = []
  for (i = 0; i <= employeeArr.length; i++) {
        if (employeeArr[i] != data.manager) {
         otherCounterArr.push(employeeArr[i])
        } else if (employeeArr[i] == data.manager) {
          managerNum = otherCounterArr.length + 1
         //  console.log(roleNum)
        }
     }
      const sql =  `INSERT INTO employees (first_name, last_name, role_id, manager_id)
      VALUES ('${data.employeeFirstName}', '${data.employeeLastName}', ${this.roleNum}, ${this.managerNum} );`
    
      return db.query(sql, function (err, results) {
        if (err) {
          console.log(err)
        }
      console.log("New Employee Added")
      console.table(results)
      })
    }

function newEmployeeRole(data) {
  let anotherArr = []
  for (i = 0; i <= roleArr.length; i++) {
    if (roleArr[i] != data.chooseNewRole) {
      anotherArr.push(roleArr[i])
    } else if (roleArr[i] == data.chooseNewRole) {
      roleNum = anotherArr.length + 1
      //  console.log(roleNum)
    }
  }
  let evenMoreArr = []
  for (i = 0; i <= roleArr.length; i++) {
        if (employeeArr[i] != data.newManager) {
         evenMoreArr.push(employeeArr[i])
        } else if (employeeArr[i] == data.newManager) {
          managerNum = evenMoreArr.length + 1
         //  console.log(roleNum)
        }
     }
     
  const nameArr = data.chooseEmployee.split(" ")
  console.log(nameArr[0])
  console.log(nameArr[1])
  const sql = `UPDATE employees
  SET role_id = ${roleNum}, manager_id = ${managerNum}
  WHERE first_name = "${nameArr[0]}" AND last_name = "${nameArr[1]}";`

  return db.query(sql, function (err, results) {
    if (err) {
      console.log(err)
    }
  console.log("Employee Role Updated!")
  console.table(results)
  })
}
    
    module.exports = { newEmployee, employeeArr, newEmployeeRole }