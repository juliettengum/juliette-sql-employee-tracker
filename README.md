# juliette-sql-employee-tracker

# Employee Tracker

## Description

Employee Tracker is a command-line application built with Node.js, Inquirer, and PostgreSQL to manage a company's employee database. This application allows business owners to view and manage departments, roles, and employees, enabling efficient organization and planning.


## User Story
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information i

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
   https://github.com/juliettengum/juliette-sql-employee-tracker

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

If you have any questions about the repo, open an issue or contact me directly at juliettengum19@gmail.com. You can find more of my work at https://github.com/juliettengum.

## Video Walkthrough
[LINK](https://github.com/juliettengum/juliette-sql-employee-tracker/assets/160192167/edea1a99-9c08-490a-8d50-5598b567ff95)

DEPLOYED LINK
https://github.com/juliettengum/juliette-sql-employee-tracker


