const express = require('express');
require('console.table')
const mysql = require('mysql2');
const db = require('../config/connection')


  //Add Employee
function newEmployee(data) {
    let role;
      switch (data.role) {
        case 'Salesman':
          role = 1;
          break;
        case 'Accountant':
          role = 2;
          break;
        case 'Secratary':
          role = 3;
          break;
        case 'Hole Digger':
          role = 4;
          break;
        case 'Hole Manager':
          role = 5;
          break;
        case 'CEO':
          role = 6;
          break;
        case 'Customer Service':
          role = 7;
          break;
      }
    
      const sql =  `INSERT INTO employees (first_name, last_name, role_id, manager_id)
      VALUES ('${data.employeeFirstName}', '${data.employeeLastName}', '${role}', '1');`
    
      return db.query(sql, function (err, results) {
        if (err) {
          console.log(err)
        }
      console.log("New Employee Added")
      console.table(results)
      })
    }
    
    module.exports = { newEmployee }