const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'my_database'
});

// Create the tables
connection.query(`CREATE TABLE suppliers (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);`);

connection.query(`CREATE TABLE invoices (
  id INT NOT NULL AUTO_INCREMENT,
  supplier_id INT NOT NULL,
  invoice_date DATE NOT NULL,
  invoice_number VARCHAR(50) NOT NULL,
  invoice_amount DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (supplier_id) REFERENCES suppliers(id),
  PRIMARY KEY (id)
);`);

connection.query(`CREATE TABLE payments (
  id INT NOT NULL AUTO_INCREMENT,
  invoice_id INT NOT NULL,
  payment_date DATE NOT NULL,
  payment_amount DECIMAL(10,2) NOT NULL,
  payment_method VARCHAR(50) NOT NULL,
  payment_reference VARCHAR(50) NOT NULL,
  FOREIGN KEY (invoice_id) REFERENCES invoices(id),
  PRIMARY KEY (id)
);`);

// Close the connection
connection.end();