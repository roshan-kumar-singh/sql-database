const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'my_database'
});

// Create the tables
connection.query(`CREATE TABLE ${__filename.split('.')[0]} (
  account_id INT NOT NULL AUTO_INCREMENT,
  owner_name VARCHAR(255) NOT NULL,
  account_balance DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (account_id)
);

CREATE TABLE capital_transactions (
  transaction_id INT NOT NULL AUTO_INCREMENT,
  account_id INT NOT NULL,
  transaction_type VARCHAR(10) NOT NULL,
  transaction_date DATE NOT NULL,
  transaction_amount DECIMAL(10,2) NOT NULL,
  transaction_description VARCHAR(255) NOT NULL,
  PRIMARY KEY (transaction_id),
  FOREIGN KEY (account_id) REFERENCES ${__filename.split('.')[0]} (account_id)
);`);

// Close the connection
connection.end();