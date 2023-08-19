import * as mysql from "mysql2/promise";
import * as fs from "fs/promises";
import queries from "./queries";
const dbConfig = {
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "root",
  database: process.env.MYSQL_DATABASE || "test_db",
};

interface IProduct {
  id: number;
  price: string;
  stock: string;
  img: string;
  description: string;
  size: string[] | string;
}
const database = async () => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    await connection.beginTransaction();

    const data = await fs.readFile(__dirname + "/../../urunler.json", "utf8");
    const jsonData: { [key: string]: IProduct } = JSON.parse(data).products[0];
    console.info("Connected to MySQL server");

    await connection.query(queries.createSizesProducts);

    await connection.query(queries.createSize);

    await connection.query(queries.createProducts);

    await connection.query(queries.insertSize);

    Object.entries(jsonData).forEach(async ([key, product]) => {
      const name = key;
      const price = product.price;
      const stock = product.stock;
      const img = product.img;
      const description = product.description;
      const sizes = [...product.size];
      const selectSizeIDQuery = `SELECT id FROM sizes WHERE name IN (${sizes
        .map(size => `'${size}'`)
        .join(", ")})`;
      const [rows]: any = await connection.execute(selectSizeIDQuery);

      const insertProductValues = [null, name, price, stock, img, description];
      try {
        const productResult: any = await connection.query(
          queries.insertProduct,
          insertProductValues
        );
        console.info("Added product table.");
        const insertProductSizeValues = rows.map(size => {
          return [null, size.id, productResult[0].insertId];
        });
        await connection.query(queries.insertProductSize, [
          insertProductSizeValues,
        ]);
      } catch (err: any) {
        console.error("Error adding product:", err.code);
      } finally {
        connection.end();
      }
    });
    return connection;
  } catch (error: any) {
    console.error("Error:", error.code, error.errno, error.sqlMessage);
    setTimeout(database, 5000);
  }
};

export default database;
