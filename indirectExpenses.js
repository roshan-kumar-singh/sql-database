const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'my_database'
});

// Create the table
connection.query(`CREATE TABLE expenses (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(50) NOT NULL,
  direct_expense BOOLEAN NOT NULL,
  PRIMARY KEY (id)
);`);

// Insert some data
connection.query(`INSERT INTO expenses (name, description, category, direct_expense) VALUES
('Rent', 'The cost of renting a space to operate the Sari business, such as a storefront or a workshop.', 'Fixed', true),
('Utilities', 'Expenses for utilities such as electricity, gas, water, internet, and telephone.', 'Fixed', true),
('Insurance', 'Premiums paid for insurance policies such as property insurance, liability insurance, and worker's compensation insurance.', 'Fixed', true),
('Advertising and marketing', 'Expenses for promoting the Sari business, such as printing flyers, social media ads, and attending trade shows.', 'Variable', true),
('Repairs and maintenance', 'Costs associated with maintaining and repairing the Sari business's equipment and facilities, such as sewing machines and display racks.', 'Variable', true),
('Professional fees', 'Fees paid to lawyers, accountants, and other professionals for their services to the Sari business.', 'Variable', true),
('Taxes', 'Payments made to the government for taxes such as sales tax, income tax, and property tax.', 'Fixed', true),
('Depreciation', 'The decrease in the value of assets over time, such as sewing machines, computers, and furniture.', 'Fixed', true),
('Office supplies', 'Costs for purchasing office supplies such as paper, printer ink, and pens.', 'Variable', true),
('Travel expenses', 'Costs associated with business travel, such as transportation, lodging, and meals.', 'Variable', true);
`);

// Close the connection
connection.end();