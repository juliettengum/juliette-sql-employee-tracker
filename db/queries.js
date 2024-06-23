

// Import the inquirer package for command-line prompts
const inquirer = require('inquirer');
// Import the pool object from the connection module to interact with the PostgreSQL database
const pool = require('./connection');

// Function to view all departments in the database
const viewDepartments = async () => {
    // Execute a SQL query to select all records from the department table
    const res = await pool.query('SELECT * FROM department');
    // Display the results in a table format in the console
    console.table(res.rows);
};

// Function to view all roles in the database
const viewRoles = async () => {
    // Execute a SQL query to select role details and the associated department name
    const res = await pool.query('SELECT role.id, role.title, role.salary, department.name AS department FROM role LEFT JOIN department ON role.department_id = department.id');
    // Display the results in a table format in the console
    console.table(res.rows);
};

// Function to view all employees in the database
const viewEmployees = async () => {
    // Execute a complex SQL query to select employee details, their role, department, and manager
    const res = await pool.query(`
        SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, 
        (SELECT CONCAT(manager.first_name, ' ', manager.last_name) FROM employee AS manager WHERE manager.id = employee.manager_id) AS manager 
        FROM employee 
        LEFT JOIN role ON employee.role_id = role.id 
        LEFT JOIN department ON role.department_id = department.id
    `);
    // Display the results in a table format in the console
    console.table(res.rows);
};

// Function to add a new department to the database
const addDepartment = async () => {
    // Prompt the user for the name of the new department
    const { name } = await inquirer.prompt({
        type: 'input',
        name: 'name',
        message: 'Enter the name of the department:'
    });
    // Execute a SQL query to insert the new department into the database
    await pool.query('INSERT INTO department (name) VALUES ($1)', [name]);
    // Log a confirmation message
    console.log(`Added department ${name}`);
};

// Function to add a new role to the database
const addRole = async () => {
    // Prompt the user for details of the new role
    const { title, salary, department_id } = await inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of the role:'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Enter the salary for the role:'
        },
        {
            type: 'input',
            name: 'department_id',
            message: 'Enter the department ID for the role:'
        }
    ]);
    // Execute a SQL query to insert the new role into the database
    await pool.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [title, salary, department_id]);
    // Log a confirmation message
    console.log(`Added role ${title}`);
};

// Function to add a new employee to the database
const addEmployee = async () => {
    // Prompt the user for details of the new employee
    const { first_name, last_name, role_id, manager_id } = await inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'Enter the first name of the employee:'
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'Enter the last name of the employee:'
        },
        {
            type: 'input',
            name: 'role_id',
            message: 'Enter the role ID for the employee:'
        },
        {
            type: 'input',
            name: 'manager_id',
            message: 'Enter the manager ID for the employee (leave blank if none):',
            default: null
        }
    ]);
    // Execute a SQL query to insert the new employee into the database
    await pool.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [first_name, last_name, role_id, manager_id]);
    // Log a confirmation message
    console.log(`Added employee ${first_name} ${last_name}`);
};

// Function to update an existing employee's role in the database
const updateEmployeeRole = async () => {
    // Prompt the user for the ID of the employee and the new role ID
    const { id, role_id } = await inquirer.prompt([
        {
            type: 'input',
            name: 'id',
            message: 'Enter the ID of the employee you want to update:'
        },
        {
            type: 'input',
            name: 'role_id',
            message: 'Enter the new role ID for the employee:'
        }
    ]);
    // Execute a SQL query to update the employee's role in the database
    await pool.query('UPDATE employee SET role_id = $1 WHERE id = $2', [role_id, id]);
    // Log a confirmation message
    console.log(`Updated employee role`);
};

// Export the functions to be used in other modules
module.exports = {
    viewDepartments,
    viewRoles,
    viewEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole
};

