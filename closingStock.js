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
  id INT PRIMARY KEY,
  name VARCHAR(255),
  code VARCHAR(50),
  description TEXT,
  category VARCHAR(50)
);

CREATE TABLE opening_stock (
  id INT PRIMARY KEY,
  product_id INT,
  quantity INT,
  cost_per_unit DECIMAL(10,2),
  total_cost DECIMAL(10,2),
  FOREIGN KEY (product_id) REFERENCES ${__filename.split('.')[0]} (id)
);`);

// Close the connection
connection.end();