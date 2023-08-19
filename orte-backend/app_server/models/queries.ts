const queries = {
  createSizesProducts:
    "CREATE TABLE sizesProducts (id INT AUTO_INCREMENT PRIMARY KEY, product_id VARCHAR(255), size_id VARCHAR(255))",
  createSize:
    "CREATE TABLE sizes (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))",
  createProducts:
    "CREATE TABLE products (id INT AUTO_INCREMENT PRIMARY KEY ,name VARCHAR(255), price VARCHAR(255), stock VARCHAR(255), img VARCHAR(255), description LONGTEXT)",
  insertSize:
    "INSERT INTO sizes (id, name) VALUES (NULL,'XS'),(NULL,'S'),(NULL,'M'),(NULL,'L'),(NULL,'X'),(NULL,'XL'),(NULL,'XXL')",
  insertProduct:
    "INSERT INTO products (id, name, price, stock, img, description) VALUES (?,?, ?, ?, ?, ?)",
  insertProductSize:
    "INSERT INTO sizesProducts (id, size_id, product_id) VALUES ?",
  selectAllSizes: "SELECT * FROM sizes",
  selectFilteredProducts: `SELECT * FROM products WHERE id IN (SELECT product_id FROM sizesProducts WHERE size_id IN (?))`,
};

export default queries;
