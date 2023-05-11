const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'my_database'
});

// Create the tables
connection.query(`CREATE TABLE unsecured_loans (
  loan_id INT NOT NULL AUTO_INCREMENT,
  borrower_name VARCHAR(255) NOT NULL,
  loan_amount DECIMAL(10,2) NOT NULL,
  loan_date DATE NOT NULL,
  loan_term INT NOT NULL,
  interest_rate DECIMAL(10,2) NOT NULL,
  payment_frequency VARCHAR(255) NOT NULL,
  outstanding_balance DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (loan_id)
);`);

connection.query(`CREATE TABLE loan_payments (
  payment_id INT NOT NULL AUTO_INCREMENT,
  loan_id INT NOT NULL,
  payment_date DATE NOT NULL,
  payment_amount DECIMAL(10,2) NOT NULL,
  principal_amount DECIMAL(10,2) NOT NULL,
  interest_amount DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (loan_id) REFERENCES unsecured_loans(loan_id),
  PRIMARY KEY (payment_id)
);`);

// Close the connection
connection.end();
