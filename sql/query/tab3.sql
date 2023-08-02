-- 0725 tuesday
select * from city;
select countrycode from city;
show tables;
select * from countrylanguage;
select * from countrylanguage as cl where cl.language = "Arabic" ;
select * from countrylanguage as cl where cl.countrycode LIKE "_U_";
SELECT COUNT(*) FROM city;
SELECT COUNT(*) FROM city WHERE countrycode = "NZL";
SELECT * FROM city WHERE countrycode = "NZL";
select MIN(population) from city;
select MAX(population) from city;
SELECT * FROM city WHERE population = (select max(population) from city);
select max(population) from city where countrycode = "AUS";
select * from city where population = (select max(population) from city where countrycode = "AUS");
select avg(population) from city;
select avg(population) from city where countrycode = "AUS";
SELECT SUM(POPULATION) from city;
select sum(population) from city where countrycode = "POL";
SELECT sum(population) as total_population, countrycode from city group by countrycode order by countrycode;
select countrycode, avg(population) as average_population from city group by countrycode order by countrycode;
-- Find the total population in Afghanistan.
select SUM(POPULATION) from city where countrycode = "AFG";
SELECT * FROM city where  countrycode = "AFG";
SELECT SUM(population) FROM cities WHERE countries_code = 'AFG';
-- Find the average population of cities in Saudi Arabia.
select avg(population) from city where countrycode = "SAU";
SELECT AVG(population) FROM cities WHERE countries_code = 'SAU';
-- Find the 10 smallest country populations.
SELECT * FROM country ORDER BY population ASC LIMIT 10;
-- kai
-- SELECT SUM(population) as total_population, c.countries_code, ct.name FROM cities AS c INNER JOIN countries AS ct ON c.countries_code = ct.code GROUP BY countries_code ORDER BY total_population LIMIT 10;

SELECT * FROM country where name like "%stan" ORDER BY population DESC LIMIT 10 ;
-- kenny
-- SELECT name, population from cities WHERE population = (SELECT MAX(population) FROM cities  INNER JOIN countries ON cities.countries_code = countries.code WHERE countries.name LIKE '%stan');
-- Find the most populated city in countries that end with stan;
SELECT * FROM country WHERE population = (select max(population) from city);
-- oscar
-- SELECT cities.countries_code, countries.name, AVG(cities.population)  FROM cities     INNER JOIN countries ON (cities.countries_code = countries.code)  WHERE countries.name LIKE "%t%"      GROUP BY cities.countries_code  ORDER BY AVG(population) DESC     ;
select max(population) from city;
-- Find the most populated and least populated cities for each country that ends with stan, should be ordered alphabetically.
SELECT name, population from cities WHERE population = (SELECT MAX(population) FROM cities  INNER JOIN countries ON cities.countries_code = countries.code
WHERE countries.name LIKE '%stan');
SELECT name, population from cities WHERE population = (SELECT MIN(population) FROM cities  INNER JOIN countries ON cities.countries_code = countries.code
WHERE countries.name LIKE '%stan');
-- jungah
SELECT MIN(c.population) AS min_population, MAX(c.population) AS max_population, ct.name
FROM cities AS c
INNER JOIN countries AS ct ON c.countries_code = ct.code
WHERE ct.name LIKE "%stan"
GROUP BY c.countries_code
ORDER BY ct.name;

select * from city as c inner join country as ct on c.countrycode=ct.code where ct.name LIKE "%stan";
select ct.name as countryname , 
(SELECT C.name from city as c where ct.code = c.countrycode order by c.population desc limit 1) as most_populated_city from country as ct where ct.name like "%stan" order by ct.name;







