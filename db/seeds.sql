/*INSERT INTO department (name) VALUES ('Engineering'), ('Sales'), ('Finance');
INSERT INTO role (title, salary, department_id) VALUES
    ('Software Engineer', 90000, 1),
    ('Sales Representative', 60000, 2),
    ('Accountant', 70000, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
    ('John', 'Doe', 1, NULL),
    ('Jane', 'Smith', 2, NULL),
    ('Emily', 'Jones', 3, NULL);
*/




-- Insert departments
INSERT INTO department (name) VALUES 
('Customer Service'), 
('Engineering'), 
('Finance'), 
('Human Resources'), 
('Legal'), 
('Sales');

-- Insert roles
INSERT INTO role (title, salary, department_id) VALUES 
('Customer Service Lead', 72000, 1), 
('Customer Service Associate', 60000, 1), 
('Lead Engineer', 185000, 2), 
('Associate Engineer', 133000, 2), 
('Finance Manager', 139000, 3), 
('Accountant', 106000, 3), 
('Human Resources Manager', 85000, 4), 
('Recruiter', 60000, 4), 
('Legal Team Lead', 170000, 5), 
('Lawyer', 82000, 5), 
('Sales Lead', 175000, 6), 
('Sales Representative', 132000, 6);

-- Insert employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
('John', 'Doe', 1, NULL), 
('Jane', 'Smith', 2, 1), 
('Alice', 'Johnson', 3, NULL), 
('Bob', 'Williams', 4, 3), 
('Charlie', 'Brown', 4, 3), 
('David', 'Wilson', 4, 3), 
('Eva', 'Martinez', 5, NULL), 
('Frank', 'Taylor', 6, 7), 
('Grace', 'Anderson', 6, 7), 
('Hannah', 'Thomas', 7, NULL), 
('Ian', 'Jackson', 8, 9), 
('Jackie', 'White', 9, NULL), 
('Karen', 'Harris', 10, 11), 
('Liam', 'Clark', 11, NULL), 
('Mia', 'Lewis', 12, 13), 
('Noah', 'Robinson', 12, 13), 
('Olivia', 'Walker', 4, 8), 
('Paul', 'Young', 2, 1);
