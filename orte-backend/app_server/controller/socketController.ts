import * as mysql from "mysql2/promise";
const dbConfig = {
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "root",
  database: process.env.MYSQL_DATABASE || "test_db",
};

export default (io: any, mySqlDb: any) => {
  io.db = mySqlDb;
  io.on("connection", (socket: any) => {
    console.log("connected");
    socket.on("getProducts", async (data: any) => {
      try {
        const connection = await mysql.createConnection(dbConfig);
        await connection.beginTransaction();
        const products = await io.db.getProducts();
        socket.emit("products", products);
      } catch (error) {}
    });
    socket.on("getSizes", async (data: any) => {
      const sizes = await io.db.getSizes();
      socket.emit("sizes", sizes);
    });
  });
};
