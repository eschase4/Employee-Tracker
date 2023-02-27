const express = require('express');
require('console.table')
const mysql = require('mysql2');
const db = require('../config/connection')


  
  function chooseTable(data) {
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
}
  //Update Employee Role

  //Add Department
  

  module.exports = { chooseTable }