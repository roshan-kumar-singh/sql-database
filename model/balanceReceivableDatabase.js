const fs = require('fs');

const schema = `
CREATE TABLE products (
  product_id SERIAL PRIMARY KEY,
  product_name VARCHAR(255) NOT NULL,
  product_code VARCHAR(255) UNIQUE NOT NULL,
  product_description TEXT,
  product_category VARCHAR(255) NOT NULL
);

CREATE TABLE inventory (
  inventory_id SERIAL PRIMARY KEY,
  product_id INTEGER REFERENCES products(product_id) ON DELETE CASCADE,
  quantity_on_hand INTEGER NOT NULL,
  cost_per_unit NUMERIC(10,2) NOT NULL,
  total_cost NUMERIC(10,2) NOT NULL
);
`;

fs.writeFile('stock_in_hand_schema.sql', schema, (err) => {
  if (err) throw err;
  console.log('Stock in hand schema file has been created.');
});
