SHOW TABLES;
SHOW DATABASES;
USE WORLD;
SHOW TABLES;
SELECT * FROM city;
SELECT * FROM country;
SELECT * FROM countrylanguage;
SELECT name, country, population FROM city ORDER BY population DESC LIMIT 100;
SELECT c.name, ct.name FROM city AS c INNER JOIN country AS ct ON c.countrycode = ct.code ORDER BY c.population DESC LIMIT 100;
SELECT c.name, population FROM cities AS c INNER JOIN  countries AS ct ON c.countries_code = ct.code ORDER BY population DESC LIMIT 100;
-- Get only the official languages spoken in each country.
SELECT name, language FROM countries LEFT JOIN country_languages ON country_languages.countries_code = countries.code WHERE is_official ='T' ORDER BY name;
-- Get the names of the countries with Arabic as the official language.
-- kai
SELECT c.name AS city_name, ct.name AS country_name, c.countries_code, district, language, percentage FROM cities AS c INNER JOIN countries AS ct ON c.countries_code = ct.code
INNER JOIN country_languages AS cl ON c.countries_code = cl.countries_code WHERE c.countries_code LIKE '_%U%_';
-- inga
-- SELECT ct.name, cl.language FROM country AS ct LEFT JOIN countrylanguage AS cl ON cl.CountryCode = ct.Code WHERE Language = 'arabic' AND IsOfficial = true ;
-- inga 
-- SELECT ct.population AS country_population, c.name AS city_name, ct.name AS country_name, cl.language, cl.Percentage FROM country AS ct LEFT JOIN city AS c ON ct.Code = c.CountryCode INNER JOIN countrylanguage AS cl ON c.CountryCode = cl.CountryCode WHERE cl.Language = 'chinese' AND cl.Percentage <10;




