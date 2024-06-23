# juliette-sql-employee-tracker

# Employee Tracker

## Description

Employee Tracker is a command-line application built with Node.js, Inquirer, and PostgreSQL to manage a company's employee database. This application allows business owners to view and manage departments, roles, and employees, enabling efficient organization and planning.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Database Schema](#database-schema)
- [Features](#features)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)
- [Video Walkthrough](#video-walkthrough)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/employee-tracker.git

## Usage

To start the application, run:
node index.js
Follow the prompts to view and manage the company's departments, roles, and employees.


## Database Schema

The database schema consists of three tables: department, role, and employee.

department

id: Primary Key
name: Name of the department
role

id: Primary Key
title: Title of the role
salary: Salary of the role
department_id: Foreign Key referencing department.id
employee

id: Primary Key
first_name: First name of the employee
last_name: Last name of the employee
role_id: Foreign Key referencing role.id
manager_id: Foreign Key referencing employee.id (Self-referential)


## Features

View all departments
View all roles
View all employees
Add a department
Add a role
Add an employee
Update an employee role


## License

This project is licensed under the MIT License

## Contribution

Contributions are welcome. Please fork the repository and submit a pull request with your updates.

## Question

If you have any questions about the repo, open an issue or contact me directly at your-email@example.com. You can find more of my work at your-github-username.

## Video Walkthrough
[LINK](https://github.com/juliettengum/juliette-sql-employee-tracker/assets/160192167/edea1a99-9c08-490a-8d50-5598b567ff95)




