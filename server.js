const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
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
                    viewAllDepartments();
                    break;
                case 'View all roles':
                    viewAllRoles();
                    break;
                case 'View all employees':
                    viewAllEmployees();
                    break;
                case 'Add a department':
                    addDepartment();
                    break;
                case 'Add a role':
                    addRole();
                    break;
                case 'Add an employee':
                    addEmployee();
                    break;
                case 'Update an employee role':
                    updateEmployee();
                    break;
                case 'Exit':
                    connection.end();
                    process.exit();
            }
        });
}

function viewAllDepartments() {
    db.query('SELECT * FROM departments', (err, results) => {
        if (err) throw err;
        console.table(results);
        startApp();
    });
}

function viewAllRoles() {
    db.query('SELECT * FROM roles', (err, results) => {
        if (err) throw err;
        console.table(results);
        startApp()
    });
}

function viewAllEmployees() {
    db.query('SELECT * FROM employees', (err, results) => {
        if (err) throw err;
        console.table(results);
        startApp()
    });
}

function addDepartment(name) {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'department_name',
                message: 'What is the name of the department?'
            }
        ])
        .then(answer => {
            db.query(
                'INSERT INTO departments SET ?',
                { department_name: name || answer.department_name },
                (err, results) => {
                    if (err) throw err;
                    console.log(`Department successfully added!`);
                })
        })
}

function addRole() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the name of the role?'
            },
            {
                type: 'input',
                name: 'salary',
                message: 'What is the salary of the role?'
            },
            {
                type: 'list',
                name: 'department_id',
                choices: [1,2,3,4,5]
            }
        ])
        .then(answers => {
            const { title, salary, department_id } = answers;

            db.query(
                'INSERT INTO roles SET ?',
                {
                    title: title,
                    salary: salary,
                    department_id: department_id
                },
                (err, results) => {
                    if (err) throw err;
                    console.log(`Role successfully added!`);
                    startApp();
                })
        })
}

function addEmployee() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'first_name',
                message: 'What is the first name of the employee?'
            },
            {
                type: 'input',
                name: 'last_name',
                message: 'What is the last name of the employee?'
            },
            {
                type: 'list',
                name: 'role_id',
                choices: [1,2,3,4,5,6,7,8,9]
            },
            {
                type: 'list',
                name: 'manager_id',
                choices: [1,2,3,4,5]
            }
        ])
        .then(answers => {
            const { first_name, last_name, role_id, manager_id } = answers;
            db.query(
                'INSERT INTO employees SET ?',
                {
                    first_name: first_name,
                    last_name: last_name,
                    role_id: role_id,
                    manager_id: manager_id
                },
                (err, results) => {
                    if (err) throw err;
                    console.log(`Employee successfully added!`);
                    startApp();
                })
        })
}

function updateEmployee() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'id',
                message: 'What is the employee ID to update?'
            },
            {
                type: 'list',
                name: 'new_role_id',
                message: 'What is the ID of the new role?',
                choices: [1,2,3,4,5,6,7,8,9]
            }
        ])
        .then(answers => {
            const { id, new_role_id } = answers;

            db.query(
                'UPDATE employees SET role_id = ? WHERE id = ?',
                [new_role_id, id],
                (err, results) => {
                    if (err) throw err;
                    console.log(`Employee successfully updated!`);
                    startApp();
                })
        })
}

startApp();
