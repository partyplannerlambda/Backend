# Backend for Party Planner

https://party-planner-backend.herokuapp.com/

 Authentication Endpoints | .
------ | ------
 https://party-planner-backend.herokuapp.com/register | .
 POST | username, password 
 https://party-planner-backend.herokuapp.com/login | .
 POST | username, password
 Response | username, userId, token 


 Party Endpoints | .
---------- | -----------
 https://party-planner-backend.herokuapp.com/parties | .
 POST | party_name, n_of_guests, date, theme, budget, user_id 
 GET | /parties 
 GET | /parties/:id 
 PUT | /parties/:id 
 DELETE | /parties/:id 


 Shopping List Endpoints | .
--------- | ----------
 https://party-planner-backend.herokuapp.com/parties/:id/shopping | .
 item, purchased(bool), price, party_id  | .
 POST | /parties/:id/shopping 
 GET | /parties/:id/shopping 
 GET | /parties/:id/shopping/:id 
 PUT | /parties/:id/shopping/:id 
 DELETE | parties/:id/shopping/:id 


 To do List Endpoints | .
-------------- | ----------------------
 https://party-planner-backend.herokuapp.com/parties/:id/todo | .
 item, completed(bool), party_id  | .
 POST | /parties/:id/todo 
 GET | /parties/:id/todo 
 GET | /parties/:id/todo/:id 
 PUT | /parties/:id/todo/:id 
 DELETE | parties/:id/todo/:id 


## Libraries used


####	express
https://expressjs.com/
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

####	sqlite3
https://sqlite.org/
SQLite is a C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine. SQLite is the most used database engine in the world. SQLite is built into all mobile phones and most computers and comes bundled inside countless other applications that people use every day.

####	knex
https://knexjs.org/
Knex.js is a "batteries included" SQL query builder for Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle, and Amazon Redshift designed to be flexible, portable, and fun to use.

####	knex-cleaner
Helper library to clean a PostgreSQL, MySQL or SQLite3 database tables using Knex. Great for integration tests.

####	helmet
https://github.com/helmetjs/helmet
Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!

####	jsonwebtoken
https://jwt.io/
JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.

####    bcryptjs
https://www.npmjs.com/package/bcryptjs
Using bcrypt is a secured way to store passwords in my database. Incorporates a salt to protect against rainbow table attacks, over time, the iteration count can be increased to make it slower, so it remains resistant to brute-force search attacks even with increasing computation power.

####	cors
https://enable-cors.org/
Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers to tell a browser to let a web application running at one origin (domain) have permission to access selected resources from a server at a different origin.

####	dotenv
https://www.npmjs.com/package/dotenv
Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.
