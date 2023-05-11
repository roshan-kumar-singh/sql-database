const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'my_database'
});

// Create the tables
connection.query(`CREATE TABLE sundry_creditors (
  creditor_id INT NOT NULL AUTO_INCREMENT,
  creditor_name VARCHAR(255) NOT NULL,
  creditor_address VARCHAR(255) NOT NULL,
  creditor_phone VARCHAR(20) NOT NULL,
  creditor_email VARCHAR(255) NOT NULL,
  balance_due DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (creditor_id)
);`);

connection.query(`CREATE TABLE creditor_transactions (
  transaction_id INT NOT NULL AUTO_INCREMENT,
  creditor_id INT NOT NULL,
  transaction_date DATE NOT NULL,
  transaction_description VARCHAR(255) NOT NULL,
  transaction_amount DECIMAL(10,2) NOT NULL,
  payment_due_date DATE NOT NULL,
  payment_status VARCHAR(255) NOT NULL,
  FOREIGN KEY (creditor_id) REFERENCES sundry_creditors(creditor_id),
  PRIMARY KEY (transaction_id)
);`);

// Close the connection
connection.end();
