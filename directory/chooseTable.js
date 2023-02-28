const express = require('express');
require('console.table')
const mysql = require('mysql2');
const db = require('../config/connection')
 
const selectRole = 'SELECT * FROM roles'
const joinRole = 'SELECT roles.id, roles.title, roles.salary, departments.department FROM departments JOIN roles ON roles.department_id = departments.id;';
const joinEmployees = 'SELECT employees.id, employees.first_name, employees.last_name, roles.title, departments.department, roles.salary, employees.manager_id FROM employees JOIN roles ON employees.role_id = roles.id JOIN departments ON roles.department_id = departments.id INNER JOIN employees AS managers ON employees.manager_id = managers.id;'
  function chooseTable(data) {
    //View All Departments
    if (data.selection === 'View All Departments') {
      db.query('SELECT * FROM departments', (err, results) => {
        console.table(results);
      });
    }
//View All Employees
 if (data.selection === 'View All Employees') {
   db.query(joinEmployees, (err, results) => {
     console.table(results);
    })
  }
  //View All Roles
  if (data.selection === 'View All Roles') {
    db.query(joinRole, (err, results) => {
      console.table(results);
      // console.log(data.continue)
    })
  }
}
  //Update Employee Role

  //Add Department
  

  module.exports = { chooseTable }