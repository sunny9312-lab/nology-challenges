select * from country where name = "Saudi arabia";
CREATE DATABASE nology_students;
SHOW DATABASES;

USE nology_students;
SHOW TABLES;
CREATE TABLE cohorts(
id INT UNSIGNED NOT NULL AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
PRIMARY KEY(id)
);

SELECT * FROM cohorts;

INSERT INTO cohorts (name) VALUES ('Uruguay'), ('Tanzania'), ('Samoa'), ('Vanuatu');

CREATE TABLE students(
id INT UNSIGNED NOT NULL AUTO_INCREMENT, 
first_name VARCHAR(255) NOT NULL,
cohort_id INT UNSIGNED NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY(cohort_id) REFERENCES cohorts(id)
);

SELECT * FROM students;

INSERT INTO students(first_name, cohort_id) values ("Kai", 2), ("Inga", 2), ("Sunny", 4);

SELECT * FROM cohorts INNER JOIN students on students.cohort_id = cohorts.id;

CREATE TABLE addresses(
id INT UNSIGNED NOT NULL AUTO_INCREMENT,
street_address VARCHAR(255) NOT NULL,
suburb VARCHAR(255) NOT NULL,
student_id INT UNSIGNED NOT NULL, 
PRIMARY KEY(id),
FOREIGN KEY(student_id) REFERENCES students(id)
);

DROP TABLE addresses;

SELECT * FROM addresses;

INSERT INTO addresses(street_address, suburb, student_id) VALUES ('1 sydney RODA', 'Melbourne', 1), ('1 Melbourne Road','sydney', 2), ("1 Brisbane Road", 'adelaide' , 3);

SELECT * FROM addresses INNER JOIN students ON addresses.student_id = students.id;

-- manytomanuy

CREATE TABLE projects(
id INT UNSIGNED NOT NULL AUTO_INCREMENT,
title VARCHAR(255),
PRIMARY KEY(id)
);

SELECT * FROM projects;

INSERT INTO projects(title) values ("Google books"), ("Morse code"), ("Ecommerce");

CREATE TABLE student_projects(
id INT UNSIGNED NOT NULL AUTO_INCREMENT,
student_id INT UNSIGNED NOT NULL,
project_id INT UNSIGNED NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY(student_id) REFERENCES students(id), 
FOREIGN KEY(project_id) REFERENCES projects(id)
);

ALTER TABLE student_projects
RENAME TO student_projects;

SELECT * FROM student_projects;

INSERT INTO student_projects(student_id, project_id) VALUES (2,3), (1,2), (1,2), (1,1);

SELECT * FROM projects INNER JOIN student_projects AS sp ON projects.id =  sp.project_id INNER JOIN students ON students.id = sp.student_id;

CREATE TABLE customers(
customer_name VARCHAR(255) NOT NULL,
customer_address VARCHAR(255) NOT NULL,
product_names VARCHAR(255) NOT NULL,
product_prices INT UNSIGNED NOT NULL
);

CREATE TABLE customers(
id INT UNSIGNED NOT NULL AUTO_INCREMENT,
address_id INT UNSIGNED NOT NULL,
title_id INT UNSIGNED NOT NULL, 
primary key(id),
foreign key(title_id) 
);

CREATE TABLE addresses(
id INT UNSIGNED NOT NULL AND AUTO_INCREMENT,
street_address VARCHAR(255) NOT NULL, 
postcode VARCHAR(4) NOT NULL
);

CREATE TABLE products(
id INT UNSIGNED NOT NULL AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
price INT UNSIGNED NOT NULL,
customer_id INT UNSIGNED NOT NULL, 
PRIMARY KEY(id),
FOREIGN KEY(customer_id) REFERENCES customers(id)
);

CREATE TABLE customers;

SHOW TABLES;
