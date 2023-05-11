const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'my_database'
});

// Create the tables
connection.query(`CREATE TABLE assets (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(50) NOT NULL,
  current_asset BOOLEAN NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE liabilities (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  current_liability BOOLEAN NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE equity (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  contributed_capital BOOLEAN NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE revenue (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  PRIMARY KEY (id)
);

CREATE TABLE expenses (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  direct_expense BOOLEAN NOT NULL,
  PRIMARY KEY (id)
);`);

// Close the connection
connection.end();