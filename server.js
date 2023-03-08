// Import required modules
const mysql = require('mysql2');
const showTable = require('console.table');
const inquirer = require('inquirer');

// Create a MySQL database connection
const db = mysql.createConnection(
{
host: '127.0.0.1',
user: 'root',
password: '',
database: 'employee_db'
},
console.log('Connected to employee_db')
);

// Define menu options
const menu = [
{
type:'list',
name: 'menu',
message: 'What would you like to do?',
choices: [
"View All Employees",
"View All Roles",
"View All Departments"
],
}
];

// Prompt user for menu selection and display data based on selection
inquirer.prompt(menu).then(({menu}) => {
switch(menu){
case "View All Employees":
db.query('SELECT * FROM employee', (err, data) => {
if (err) throw err;
console.table(data);
});
break;
case "View All Roles":
db.query('SELECT * FROM role',(err, data) => {
if (err) throw err;
console.table(data);
});
break;
case "View All Departments":
db.query('SELECT * FROM department', (err, data) => {
if (err) throw err;
console.table(data);
});
break;
default:
console.log("Invalid selection. Please choose again.");
break;
}
});

// The code prompts the user to select from the menu and displays data based on the selection.
// If "View All Employees" is selected, it displays all employee records.
// If "View All Roles" is selected, it displays all role records.
// If "View All Departments" is selected, it displays all department records.
// If an invalid selection is made, it displays an error message.