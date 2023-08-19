import * as mysql from "mysql2/promise";
import queries from "../models/queries";
const dbConfig = {
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "root",
  database: process.env.MYSQL_DATABASE || "test_db",
};

export default (io: any, mySqlDb: any) => {
  io.db = mySqlDb;
  io.on("connection", (socket: any) => {
    console.info("connected");
    socket.on("getProducts", async (data: any) => {
      try {
        const connection = await mysql.createConnection(dbConfig);
        try {
          await connection.beginTransaction();
          const [products] = await connection.execute(
            queries.selectFilteredProducts,
            [data]
          );
          socket.emit("products", products);
        } catch (error) {
          connection.end();
        }
        connection.end();
      } catch (error: any) {
        console.log(error.code);
      }
    });

    socket.on("getSizes", async (data: any) => {
      try {
        const connection = await mysql.createConnection(dbConfig);
        try {
          await connection.beginTransaction();
          const sizes = await connection.query(queries.selectAllSizes);
          socket.emit("sizes", sizes[0]);
        } catch (error) {
          connection.end();
        }
      } catch (error: any) {
        console.log(error.code);
      }
    });
  });
};
