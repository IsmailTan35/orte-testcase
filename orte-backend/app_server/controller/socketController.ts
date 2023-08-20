import * as mysql from "mysql2/promise";
import queries from "../models/queries";
import dbConfig from "../models/dbConfig";

export default (io: any) => {
  io.on("connection", (socket: any) => {
    console.info("connected");
    socket.on("getProducts", async (data: number) => {
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
        console.error(error.code);
      }
    });

    socket.on("getSizes", async () => {
      try {
        console.info("sizes socket");
        const connection = await mysql.createConnection(dbConfig);
        try {
          await connection.beginTransaction();
          const sizes = await connection.query(queries.selectAllSizes);
          socket.emit("sizes", sizes[0]);
        } catch (error) {
          connection.end();
        }
      } catch (error: any) {
        console.error(error.code);
      }
    });
  });
};
