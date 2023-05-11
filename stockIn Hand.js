const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'my_database'
});

// Create the tables
connection.query(`CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  code VARCHAR(50) NOT NULL,
  description TEXT NOT NULL,
  category VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);`);

connection.query(`CREATE TABLE inventory (
  id INT NOT NULL AUTO_INCREMENT,
  product_id INT NOT NULL,
  quantity INT NOT NULL,
  cost_per_unit DECIMAL(10,2) NOT NULL,
  total_cost DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (product_id) REFERENCES products(id),
  PRIMARY KEY (id)
);`);

// Close the connection
connection.end();
