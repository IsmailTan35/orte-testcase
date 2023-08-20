import path from "path";
import express from "express";

const apiController = (app: any) => {
  app.get("/api", (req: express.Request, res: express.Response) => {
    res.send("Orte TestCase - Hello World!");
  });

  app.get("/api/img/:filename", (req: any, res: any, next: any) => {
    let rawPath = `/pictures/`;
    var options = {
      root: path.join(path.resolve(), `${rawPath}`),
      dotfiles: "deny",
      headers: {
        "x-timestamp": Date.now(),
        "x-sent": true,
      },
    };
    var fileName = req.params.filename;
    res.sendFile(fileName, options, function (err: any) {
      if (err) {
        next();
      } else {
        console.info("Sent:", fileName);
      }
    });
  });
};

export default apiController;
