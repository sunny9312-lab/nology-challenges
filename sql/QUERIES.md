```sql
-- will give you a list of all the databases you have on your computer
SHOW DATABASES;

-- to interact with a database
USE world_x;

-- to view all the tables in a selected database
SHOW TABLES;

-- to view eveything from a table
SELECT * FROM cities;
SELECT * FROM countries;
SELECT * FROM country_languages;

-- to view chosen columns
SELECT language, is_official FROM country_languages;

-- filtering data
-- select all cities from Canada
SELECT * FROM cities WHERE countries_code = 'CAN';

-- select all cities with population under 10 000
SELECT * FROM cities WHERE population < 10000;
SELECT population, name FROM cities WHERE population >= 1000000;

-- all countries that start with A
SELECT * FROM countries WHERE name LIKE 'a%';

-- all countries that end with a
SELECT * FROM countries WHERE name LIKE '%a';

-- all contires that have o as the second letter
SELECT * FROM countries WHERE name LIKE '_o%';

-- Multiple conditions
-- all cities that start with W and have population over 1000000
SELECT * FROM cities WHERE name LIKE 'w%' AND population > 1000000;

-- all cities that start with p or have less than 1000 people
SELECT * FROM cities WHERE name LIKE 'p%' OR population < 1000;

-- select all cities from australia, canada, brasil
SELECT * FROM cities WHERE countries_code = 'AUS' OR countries_code = 'CAN' OR countries_code = 'BRA';
-- IN, I have multi[le options for the country code
SELECT * FROM cities WHERE countries_code IN ('AUS', 'CAN', 'BRA');

-- population between 1000 and 10000
SELECT * FROM cities WHERE population BETWEEN 1000 AND 10000;


-- CHALLENGE

-- Write queries for to get the following from the cities table: (String queries should not be case sensitive)

-- Country codes for cities with a population greater than 126304
SELECT countries_code, population, name FROM cities WHERE population > 126304;

-- Population of cities with a name that contains two 'o|O' characters
SELECT population, name FROM cities WHERE name LIKE '%o%o%';

-- City records for cities in Afghanistan or Congo
SELECT * FROM cities WHERE countries_code IN ('AFG', 'COG');

-- Country codes for cities with an id divisible by 23
SELECT countries_code, name FROM cities WHERE id % 23 = 0;

-- City names and populations for cities with a name that begins with a|A or with a country code that begins with a|A
SELECT name, population FROM cities WHERE name LIKE 'A%' OR countries_code LIKE 'A%';

-- Id and population for cities that have a population greater than 104234 or a name thats start with san
SELECT id, population, name FROM cities WHERE
 population > 104234 OR
    name LIKE 'san%';

-- LIMITING DATA
SELECT * FROM cities LIMIT 10;

SELECT * FROM cities LIMIT 10 OFFSET 1;
-- short version of the offset query (offset, limit)
SELECT * FROM cities LIMIT 1, 10;

SELECT * FROM cities WHERE name LIKE '%b%' LIMIT 2, 5;

-- ORDERING DATA
-- by default it will sort from lowest to highest number, ASC optional, it sort it like that by default
SELECT * FROM cities ORDER BY population ASC;

-- the reverse order - add DESC
SELECT * FROM cities ORDER BY population DESC;

SELECT * FROM cities ORDER BY name;
SELECT * FROM cities ORDER BY name DESC;

-- secondaty ordering
SELECT * FROM cities ORDER BY name, population DESC;

SELECT * FROM cities WHERE name LIKE '%san' ORDER BY population LIMIT 10;

-- Write queries for to get the following from the cities table: (String queries should not be case sensitive)
-- Get the name and country code for 20 cities that have a population greater than 123123, order your results by country_code from A-Z
SELECT name, countries_code, population FROM cities WHERE population > 123123 ORDER BY countries_code LIMIT 20;

-- Get the name and country code for 13 cities that have a population less than 1231231, order your results by country_code from Z-A
SELECT name, countries_code, population FROM cities WHERE population < 1231231 ORDER BY countries_code DESC LIMIT 13;

-- Get all fields for 10 cities in USA ordered by name A-Z and also descending population
SELECT * FROM cities WHERE countries_code = 'USA' ORDER BY name, population DESC LIMIT 10;

-- Get all fields for the 3 most populated cities in Saudi Arabia
SELECT * FROM cities WHERE countries_code = 'SAU' ORDER BY population DESC LIMIT 3;

-- Get all fields for the 6 least populated cities in Saudi Arabia
SELECT * FROM cities WHERE countries_code = 'SAU' ORDER BY population ASC LIMIT 6;

-- Get the names of the 5 most populated cities in Saudi Arabia, Brunei and Russia
SELECT name FROM cities WHERE countries_code IN ('BRN', 'RUS', 'SAU') ORDER BY population DESC LIMIT 5;

SELECT * FROM (SELECT *, ROW_NUMBER() OVER (PARTITION BY countries_code ORDER BY population desc) AS country_rank
FROM cities WHERE countries_code IN ('SAU', 'BRN', 'RUS')) ranks where country_rank <= 5;

SELECT * FROM cities WHERE countries_code = 'BRN';

-- Get the names of the 3 least populated cities in Russia excluding the least populated city
SELECT name FROM cities WHERE countries_code LIKE 'RUS' ORDER BY population LIMIT 1, 3;

SHOW TABLES;

SELECT * FROM countries ORDER BY name;
SELECT * FROM cities WHERE countries_code = 'ATA';

-- primary key
-- foreign key

-- giving my tabkle an alias
SELECT * FROM cities AS c INNER JOIN countries AS ct ON c.countries_code = ct.code ORDER BY ct.name;

SELECT c.name, ct.name FROM cities AS c INNER JOIN countries AS ct ON c.countries_code = ct.code;

SELECT c.name AS city_name, ct.name AS country_name FROM cities AS c INNER JOIN countries AS ct ON c.countries_code = ct.code;


INSERT INTO cities(name, countries_code, district, population) VALUES ('AAAAAAA Some city', 'AAA', 'district', 1);

-- LEFT JOIN
SELECT * FROM cities AS c LEFT JOIN countries AS ct ON c.countries_code = ct.code ORDER by ct.name;

-- RIGHT JOIN
SELECT * FROM cities AS c RIGHT JOIN countries AS ct ON c.countries_code = ct.code ORDER BY c.name;

-- FULL JOIN
-- full join - I can't use FULL JOIN keyword, not valid synatx
-- SELECT * FROM cities AS c FULL JOIN countries AS ct ON c.countries_code = ct.code;

SELECT * FROM cities AS c LEFT JOIN countries AS ct ON c.countries_code = ct.code
UNION SELECT * FROM cities AS c RIGHT JOIN countries AS ct ON c.countries_code = ct.code;
```
