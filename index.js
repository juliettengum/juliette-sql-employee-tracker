
// Require necessary NPM packages
const inquirer = require('inquirer');
const figlet = require('figlet');
const pool = require('./db/connection');

// Import query functions from the queries file
const { 
    viewDepartments, 
    viewRoles, 
    viewEmployees, 
    addDepartment, 
    addRole, 
    addEmployee, 
    updateEmployeeRole 
} = require('./db/queries');

// Function to display the application header using ASCII art
const displayHeader = () => {
    return new Promise((resolve, reject) => {
        // Use figlet to create ASCII art from text
        figlet('Employee Manager', function(err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                reject(err);
                return;
            }
            console.log(data); // Display the ASCII art
            resolve();
        });
    });
};

// Function to display the main menu and handle user actions
const mainMenu = async () => {
    // Prompt the user to choose an action from the list
    const { action } = await inquirer.prompt({
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
    });

    // Handle the selected action using a switch statement
    switch (action) {
        case 'View all departments':
            await viewDepartments();
            break;
        case 'View all roles':
            await viewRoles();
            break;
        case 'View all employees':
            await viewEmployees();
            break;
        case 'Add a department':
            await addDepartment();
            break;
        case 'Add a role':
            await addRole();
            break;
        case 'Add an employee':
            await addEmployee();
            break;
        case 'Update an employee role':
            await updateEmployeeRole();
            break;
        case 'Exit':
            pool.end(); // Close the database connection
            process.exit(); // Exit the application
    }

    // Call the main menu again to allow for further actions
    mainMenu();
};

// Initial function to start the application
const init = async () => {
    await displayHeader(); // Display the application header
    mainMenu(); // Show the main menu
};

// Start the application
init();
