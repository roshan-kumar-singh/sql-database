const fs = require('fs');

const schema = `
CREATE TABLE suppliers (
  supplier_id SERIAL PRIMARY KEY,
  supplier_name VARCHAR(255) NOT NULL,
  supplier_address VARCHAR(255) NOT NULL,
  supplier_contact VARCHAR(255) NOT NULL
);

CREATE TABLE invoices (
  invoice_id SERIAL PRIMARY KEY,
  supplier_id INTEGER REFERENCES suppliers(supplier_id) ON DELETE CASCADE,
  invoice_date DATE NOT NULL,
  invoice_number VARCHAR(255) NOT NULL,
  invoice_amount NUMERIC(10,2) NOT NULL,
  payment_due_date DATE NOT NULL,
  notes TEXT
);

CREATE TABLE payments (
  payment_id SERIAL PRIMARY KEY,
  invoice_id INTEGER REFERENCES invoices(invoice_id) ON DELETE CASCADE,
  payment_date DATE NOT NULL,
  payment_amount NUMERIC(10,2) NOT NULL,
  payment_method VARCHAR(255) NOT NULL,
  payment_reference_number VARCHAR(255),
  notes TEXT
);
`;

fs.writeFile('schema.sql', schema, (err) => {
  if (err) throw err;
  console.log('Schema file has been created.');
});
