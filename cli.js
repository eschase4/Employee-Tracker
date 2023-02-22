const inquirer = require('inquirer')
const { selectDatabase } = require('./directory')


class CLI {
  constructor() {
    this.selection = ''
    this.continue = ''
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
            console.log("past the .then")
            return selectDatabase(data)
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
    ])
    .then((data) => {
    console.log
    })
    }
}



module.exports = CLI