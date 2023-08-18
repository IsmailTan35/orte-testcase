import mysql from "mysql";
const db_config = {
  url: "localhost",
  user: "root",
  password: "toor",
  waitForConnections: true,
};

const database = () => {
  const con = mysql.createConnection(db_config);

  con.connect(function (err) {
    if (err) {
      console.log("Could not connect to mysql.");
      con.destroy();
      setTimeout(() => database(), 3000);
    } else {
      console.log("Mysql connection successfull.");
      con.connect(function (err) {
        con.query("CREATE DATABASE wooztracker", function (err, result) {
          if (err) {
            console.log(err.sqlMessage);
          } else {
            console.log("Database created");
          }
        });

        con.changeUser({ database: "wooztracker" }, function (err) {
          if (err) {
            console.log("hata");
          }
        });

        // con.query("CREATE TABLE products (name VARCHAR(255), address VARCHAR(255))", function (err, result) {
        //   err ? console.log(err.sqlMessage):console.log("Created table.")
        // })
      });
    }
  });

  con.on("error", function (err) {
    if (err) {
      console.log("Database Error Code: ", err.code);
      setTimeout(() => database(), 3000);
    }
  });
};

export default database;
