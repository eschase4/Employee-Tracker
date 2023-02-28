SELECT roles.title, roles.id, roles.salary, departments.department
FROM departments
JOIN roles ON roles.department_id = departments.id;

-- SELECT departments.department FROM departments;
SELECT employees.id, employees.first_name, employees.last_name, roles.title, departments.department, roles.salary, employees.manager_id
FROM employees
JOIN roles ON employees.role_id = roles.id
JOIN departments ON roles.department_id = departments.id
INNER JOIN employees AS managers ON employees.manager_id = managers.id;



-- SELECT employees.first_name + employees.last_name AS manager employees.id, employees.manager_id, employees.id
-- FROM employees
-- JOIN employees AS managers ON employees.manager_id = managers.id;


