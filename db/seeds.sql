INSERT INTO departments (department)
VALUES ('Accounting'), 
       ('Sales'), 
       ('HR'), 
       ('Management'), 
       ('Customer Service'), 
       ('Factory Workers'); 

INSERT INTO roles (title, salary, department_id)
VALUES ('Salesman', 123995, 2),
       ('Accountant', 231223, 1),
       ('Secratary', 50000, 5),
       ('Hole Digger', 31532, 6),
       ('Hole Manager', 314, 4),
       ('CEO', 314, 4),
       ('Complaint Listener', 123, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Doe', 6, 1),
       ('Ron', 'Moe', 5, 1),
       ('Bon', 'Joe', 1, 1),
       ('Hon', 'Soe', 2, 1),
       ('Lon', 'Cho', 3, 1);
  