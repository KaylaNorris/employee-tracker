INSERT INTO departments (department_name)
VALUES ("Marketing"),
       ("Finance"),
       ("Operations Management"),
       ("Human Resources"),
       ("IT");

INSERT INTO roles (title, salary, department_id)
VALUES ("Chief Marketing Officer", 250000, 1),
       ("Marketing Manager", 100000, 1),
       ("Marketing Specialist", 85000, 1),
       ("Accountant", 70000, 2),
       ("Operations Manager", 70000, 3),
       ("HR Representative", 65000, 4),
       ("Staffing Coordinator", 70000, 4),
       ("IT Coordinator", 80000, 5),
       ("Service Desk Analyst", 65000, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Joe", "Dirt", 1, 1),
       ("Mike", "Jones", 2, 1),
       ("Danny", "Glover", 3, 1),
       ("Regina", "George", 4, 2),
       ("Alexandra", "Deem", 5, 3),
       ("John", "Doe", 6, 4),
       ("Lauryn", "Hill", 7, 4),
       ("Jackson", "Norris", 8, 5),
       ("Nikita", "Anderson", 9, 5);