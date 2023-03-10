const inquirer = require('inquirer')
const { chooseTable } = require('./directory/chooseTable')
const mysql = require('mysql2');
const { newEmployee, employeeArr, newEmployeeRole }  = require('./directory/employeeManager')
const { newRole, roleArr } = require('./directory/roleManager')
const { newDepartment, departmentArr } = require('./directory/departmentManager')

const optionsArr = ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles',  'Add Role', 'View All Departments', 'Add Department', 'Quit']

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
                choices: optionsArr,
                message: 'What Would You Like To Do?',
                name: 'selection'
            }  
        ])
        .then((data) => {
          console.log(data)
          if (data.selection === 'View All Employees' || 
              data.selection === 'View All Roles' || 
              data.selection ===  'View All Departments') { 
                return chooseTable(data)
          } else if (data.selection === "Add Employee") {
                return this.addEmployee()
          } else if (data.selection === "Add Role") {
                return this.addRole()
          } else if (data.selection === "Add Department") {
                return this.addDepartment()
          } else if (data.selection === "Update Employee Role") {
                return this.updateEmployeeRole()
          }
        })
        .then(() => {
          this.next()
          console.log('')
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
            choices: roleArr,
            message: "What Is Their Role?",
            name: 'role'
          }, {
            type: 'list',
            choices: employeeArr,
            message: "Who is their manager?",
            name: 'manager'
          }
        ]).then((data) => {
          console.log(data, "cli line 75")
          newEmployee(data)
        }).catch((err) => {
          console.log(err);
          console.log("js79 Somethings not right...")
          })
    }
    addRole() {
      return inquirer
        .prompt([
        { type: 'input',
          message: "What new role would you like to create?",
          name: 'inputRole'
        }, {
          type: 'input',
          message: 'What is this roles salary?',
          name: 'inputSalary'
        }, {
          type: 'list',
          choices: departmentArr,
          message: 'What department is this role in?',
          name: 'roleDepartment'
        }
        ]).then((data) => {
          console.log(data, "cli line 99")
          newRole(data)
        }).catch((err) => {
          console.log(err);
          console.log("js103 Somethings not right...")
          })
    }
    addDepartment() {
      return inquirer
        .prompt ([
          { type: 'input',
            message: "What is the name of the department you'd like to add?",
            name: 'inputDepartment'
          }
        ]).then((data) => {
          console.log(data, "cli line 114")
          newDepartment(data)
        }).catch((err) => {
          console.log(err);
          console.log("js118 Somethings not right...")
          })
    }
    updateEmployeeRole() {
      return inquirer
        .prompt([
          { type: 'list',
            choices: employeeArr,
            message: "Which employees role would you like to update?",
            name: 'chooseEmployee'
          }, {
            type: 'list',
            choices: roleArr,
            message: 'Which role would you like to reassign them to?',
            name: 'chooseNewRole'
          }, {
            type: 'list',
            choices: employeeArr,
            message: 'Who is their new manager?',
            name: 'newManager'
          }
        ]).then((data) => {
          console.log(data, "cli line 135")
          newEmployeeRole(data)
        }).catch((err) => {
          console.log(err);
          console.log("js139 Somethings not right...")
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

