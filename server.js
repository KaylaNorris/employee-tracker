const mysql = require('mysql2');
// const inquirer = require('inquirer');
// const cTable = require('console.table');
require('dotenv').config()

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    console.log(`Connected to employee database.`)
);

function startApp() {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'action',
          message: 'What would you like to do?',
          choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Exit'
          ]
        }
      ])
      .then(answer => {
        switch (answer.action) {
          case 'View all departments':
            // Implement code to display all departments
            break;
          case 'View all roles':
            // Implement code to display all roles
            break;
          case 'View all employees':
            // Implement code to display all employees
            break;
          case 'Add a department':
            // Implement code to add a department
            break;
          case 'Add a role':
            // Implement code to add a role
            break;
          case 'Add an employee':
            // Implement code to add an employee
            break;
          case 'Update an employee role':
            // Implement code to update an employee role
            break;
          case 'Exit':
            connection.end();
            process.exit();
        }
      });
  }
  