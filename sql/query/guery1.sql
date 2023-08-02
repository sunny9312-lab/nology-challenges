SHOW databases;
DROP DATABASE world_X;
USE world_x;
SHOW TABLES;
SELECT * from cities;
SELECT * from countries;
SELECT * from country_languages;
SELECT language is_official from country_languages;
SELECT * from cities where population < 10000;
select population, name from cities where population >= 100000;
-- all countries that start with A
select * from countries where name like 'a%';
select * from countries where name like '%a';
select * from countries where name like '_o%';
-- all cities that start with w and have population over 1000000
select * from cities where name LIKE 'W%' and population > 1000000;
SELECT * FROM cities where COUNTRIES_CODE IN ('AUS', 'CAN', 'BRA');

-- POPULATION BETWEEN 1000 AND 10000
SELECT * FROM cities where population between 1000 and 10000;
--  Country codes for cities with a population greater than 126304
select * from cities where population > 126304;
-- Population of cities with a name that contains two 'o|O' characters
select * from cities where NAME LIKE  '%o%';
-- City records for cities in Afghanistan or Congo
select city records from countries where name = 'Afghanistan' or name ='Congo' ;
-- Country codes for cities with an id divisible by 23
select * from cities where Id % 23 = 0;
-- City names and populations for cities with a name that begins with a|A or with a country code that begins with a|A
-- Id and population for cities that have a population greater than 104234 or a name thats start with san
show databases;
select * from cities where Id % 23 = 0;
select * from countries where name = 'Afghanistan' or name ='Congo' ;
select * from city; 
SHOW databases;
DROP DATABASE world_X;
USE world;
SHOW TABLES;
select * from cities;
SHOW databases;
select * from cities;
SHOW TABLES;
select * from cities;
SHOW databases;
DROP DATABASE world_X;
USE world_x;
SHOW TABLES;
SELECT * from city;
SELECT * from country;
SELECT * from countrylanguage;
SHOW TABLES;
-- Get the name and country code for 20 cities that have a population greater than 123123, order your results by country_code from A-Z
select Name, Code, Population from country where Population > 123123 order by code limit 20;
-- Get the name and country code for 13 cities that have a population less than 1231231, order your results by country_code from Z-A
select Name, code, population from country where population < 1231231 order by code DESC limit 13;
-- Get all fields for 10 cities in USA ordered by name A-Z and also descending population
-- SUNPREET, KAI, ROCHE, KENNY, JACK, 
SELECT name, countries_code FROM cities WHERE population < 123123 ORDER BY countries_code DESC LIMIT 13;
SELECT * FROM cities WHERE countries_code = 'USA' ORDER BY name, population DESC LIMIT 10;
SELECT * FROM cities WHERE countries_code = 'SAU' ORDER BY population DESC LIMIT 3;
SELECT * FROM cities WHERE countries_code = 'SAU' ORDER BY population ASC LIMIT 6;
SELECT name FROM cities WHERE countries_code IN ('BRN', 'RUS', 'SAU') ORDER BY population DESC LIMIT 5;
SELECT * FROM (SELECT *, ROW_NUMBER() OVER (PARTITION BY countries_code ORDER BY population desc) AS country_rank 
FROM cities WHERE countries_code IN ('SAU', 'BRN', 'RUS')) ranks where country_rank <= 5;
SELECT name FROM cities WHERE counties_code LIKE 'RUS' ORDER BY population LIMIT 1, 3;
SELECT * FROM city AS c INNER JOIN country AS ct ON c.countrycode = ct.code;
SELECT c.name AS city_name, ct.name AS country_name FROM city AS c INNER JOIN country AS ct ON c.countrycode = ct.code;

SELECT c.name AS city_name, ct.name AS country_name FROM city AS c INNER JOIN country AS ct ON c.countrycode = ct.code;
INSERT INTO city( name, CountryCode, District, Population) values ('A Some city', 'AAA', 'district', 1);
SELECT * FROM city;
-- INSERT INTO cities(name, countries_code, district, population) VALUES ('A Some city', 'AAA', 'district', 1);
-- SELECT * from cities as c left join counties as ct on c,countires_code = ct.code order by ct_name;
-- SELECT * from cities as c RIGHT JOIN COUNTRIES AS CT ON C.COUNTRIES_CODE = CT.CODE 

