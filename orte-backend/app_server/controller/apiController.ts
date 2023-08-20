import path from "path";
import express from "express";

const apiController = (app: any) => {
  app.get("/api", (req: express.Request, res: express.Response) => {
    res.send("Orte TestCase - Hello World!");
  });

  app.get("/api/img", (req: any, res: any) => {
    if (!req.query.filename) {
      res.json({ error: "File not found" }).status(404);
      return;
    }
    let rawPath = `../../../`;
    var options: any = {
      root: path.join(__dirname + `${rawPath}`),
      dotfiles: "deny",
      headers: {
        "x-timestamp": Date.now(),
        "x-sent": true,
      },
    };
    console.log(options.dotfiles);
    const fileName: string = req.query.filename;
    res.sendFile(fileName, options, function (err: any) {
      if (err) {
        console.log(err);
        res.json({ error: "File not found" }).status(404);
      } else {
        console.info("Sent:", fileName);
      }
    });
  });
};

export default apiController;
