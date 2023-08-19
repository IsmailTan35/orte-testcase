import path from "path";
import express from "express";
const apiController = (app: any) => {
  app.get("/", (req: any, res: any) => {
    res.send("Orte TestCase - Hello World!");
  });
  const publicImagePath = path.join(__dirname + "/../../pictures");
  console.log(publicImagePath);
  app.use("/img", express.static(publicImagePath));
};
export default apiController;
