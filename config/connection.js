const mysql = require('mysql2');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'Teke1005!',
      database: 'business_db'
    },
    console.log(`Connected to the business_db database.`)
    );

    app.use((req, res) => {
        res.status(404).end();
      });
    
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
    
    module.exports = db;