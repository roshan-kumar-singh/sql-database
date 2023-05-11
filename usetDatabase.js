const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'my_database'
});

// Create the tables
connection.query(`CREATE TABLE users (
  user_id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  date_created DATE NOT NULL,
  PRIMARY KEY (user_id)
);`);

connection.query(`CREATE TABLE user_profiles (
  profile_id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  bio VARCHAR(255) NOT NULL,
  profile_picture_url VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  website_url VARCHAR(255) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  PRIMARY KEY (profile_id)
);`);

connection.query(`CREATE TABLE user_settings (
  setting_id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  notification_enabled BOOLEAN NOT NULL,
  theme VARCHAR(255) NOT NULL,
  language VARCHAR(255) NOT NULL,
  timezone VARCHAR(255) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  PRIMARY KEY (setting_id)
);`);

// Close the connection
connection.end();
