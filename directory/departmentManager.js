require('console.table')
const db = require('../config/connection')

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
    
module.exports = { newDepartment }