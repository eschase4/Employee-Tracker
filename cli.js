const inquirer = require('inquirer')
const { selectDatabase, newEmployee } = require('./directory')


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
          if (data.selection === 'Add Employee') {
            return this.addEmployee()
          }
          if (data.selection === 'View All Employees' || 
              data.selection === 'View All Roles' || 
              data.selection ===  'View All Departments') { 

            return selectDatabase(data)
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
    next() {
    return inquirer
      .prompt([
        {
            type: 'list',
            choices: ['Yes', 'No'],
            message: 'Would You Like To Do Anything Else?',
            name: 'continue'
        }
    ]).then((data) => {
      // console.log(data)
      if (data.continue === "Yes") {
        return this.run()
      } else {
        console.log('Goodbye! Please press Ctrl + C to turn off the server.')
        return 
        }
      })
    }
    addEmployee() {
      return inquirer
        .prompt([
          {
            type: 'input',
            message: "What Is The Employee's First Name?",
            name: 'employeeFirstName'
          },{
            type: 'input',
            message: "What Is The Employee's Last Name?",
            name: 'employeeLastName'
          }
        ]).then((data) => {
          console.log(data)
          return newEmployee(data)
        }).then(() => this.next())
        }
}



module.exports = CLI