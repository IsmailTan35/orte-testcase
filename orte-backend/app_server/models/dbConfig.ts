export default {
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "orte",
  database: process.env.MYSQL_DATABASE || "test_db",
};
