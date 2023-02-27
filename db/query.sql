SELECT * 
FROM roles
JOIN departments ON roles.department_id = departments.id;

SELECT * 
FROM employees
JOIN roles ON employees.role_id = roles.id;

SELECT employees.id, employees.manager_id, employees.id
FROM employees
JOIN employees AS managers ON employees.manager_id = managers.id;


