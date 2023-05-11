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
  debtor_id INT NOT NULL AUTO_INCREMENT,
  debtor_name VARCHAR(255) NOT NULL,
  debtor_address VARCHAR(255) NOT NULL,
  debtor_phone VARCHAR(255) NOT NULL,
  debtor_email VARCHAR(255) NOT NULL,
  balance_due DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (debtor_id)
);

CREATE TABLE debtor_transactions (
  transaction_id INT NOT NULL AUTO_INCREMENT,
  debtor_id INT NOT NULL,
  transaction_date DATE NOT NULL,
  transaction_description VARCHAR(255) NOT NULL,
  transaction_amount DECIMAL(10,2) NOT NULL,
  payment_due_date DATE NOT NULL,
  payment_status VARCHAR(255) NOT NULL,
  PRIMARY KEY (transaction_id),
  FOREIGN KEY (debtor_id) REFERENCES ${__filename.split('.')[0]} (debtor_id)
);`);

// Close the connection
connection.end();