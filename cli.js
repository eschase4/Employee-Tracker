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
            return selectDatabase(data)
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
}



module.exports = CLI