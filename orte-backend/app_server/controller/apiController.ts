import path from "path";
import express from "express";

const apiController = (app: any) => {
  app.get("/api", (req: express.Request, res: express.Response) => {
    res.send("Orte TestCase - Hello World!");
  });
  const publicImagePath = path.join(__dirname + "/../../pictures");
  app.use("/api/img", express.static(publicImagePath));

  app.get("/api/img2/:filename", (req: any, res: any, next: any) => {
    let rawPath = `/pictures/`;
    var options = {
      root: path.join(__dirname + `${rawPath}`),
      dotfiles: "deny",
      headers: {
        "x-timestamp": Date.now(),
        "x-sent": true,
      },
    };
    var fileName = req.params.filename;
    res.sendFile(fileName, options, function (err: any) {
      if (err) {
        console.log(err);
        next();
      } else {
        console.info("Sent:", fileName);
      }
    });
  });
};

export default apiController;
