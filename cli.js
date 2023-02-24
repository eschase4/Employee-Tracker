const inquirer = require('inquirer')
const { selectDatabase, newEmployee } = require('./directory')
const mysql = require('mysql2');

class CLI {
  constructor() {
    this.selection = '',
    this.continue = '',
    this.employeeName = '',
    this.dataObj = []
  }
    run() {
      return inquirer
        .prompt([
            {
                type: 'list',
                choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles',  'Add Role', 'View All Departments', 'Add Department', 'Quit'],
                message: 'What Would You Like To Do?',
                name: 'selection'
            }  
        ])
        .then((data) => {
          console.log(data)
          if (data.selection === 'View All Employees' || 
              data.selection === 'View All Roles' || 
              data.selection ===  'View All Departments') { 
                return selectDatabase(data)
              } else if (data.selection === 'Add Employee') {
                return this.addEmployee(data)
              } else if (data.selection === 'Add Role') {
                return this.addRole(data)
          }
        })
        .then(() => {
          return this.next()
        })
        .catch((err) => {
        console.log(err);
        console.log("Somethings not right...")
        })
    } 
    addEmployee() {
      return inquirer
        .prompt([
          {
            type: 'input',
            message: "What Is The Employee's First Name?",
            name: 'employeeFirstName'
          }, {
            type: 'input',
            message: "What Is The Employee's Last Name?",
            name: 'employeeLastName'
          }, {
            type: 'list',
            choices: ['Salesman', 'Accountant', 'Secratary', 'Hole Digger', 'Hole Manager', 'CEO'],
            message: "What Is There Role?",
            name: 'role'
          }, {
            type: 'list',
            choices: ['John Doe'],
            message: "Who is their manager?",
            name: 'manager'
          }
        ]).then((data) => {
          console.log(data, "cli line 55")
          newEmployee(data)
        })
        // .then(() => {
        //   return this.next()
        // })
        .catch((err) => {
          console.log(err);
          console.log("Somethings not right...")
          })
    }
    next() {
      return inquirer
        .prompt([
          {
              type: 'list',
              choices: ['Yes', 'No'],
              message: 'Would You Like To Do Anything Else?',
              name: 'continue'
          }
      ])
      .then((data) => {
        // console.log(data)
        if (data.continue === "Yes") {
          return this.run()
        } else {
          console.log('Goodbye! Please press Ctrl + C to turn off the server.')
          return 
          }
        })
    }
}



module.exports = CLI

