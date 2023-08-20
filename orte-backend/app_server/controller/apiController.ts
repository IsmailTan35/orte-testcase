import path from "path";
import express from "express";

const apiController = (app: any) => {
  app.get("/api", (req: express.Request, res: express.Response) => {
    res.send("Orte TestCase - Hello World!");
  });

  const publicImagePath = path.join(__dirname + "/../../pictures");
  app.use("/api/img", express.static(publicImagePath));
};

export default apiController;
