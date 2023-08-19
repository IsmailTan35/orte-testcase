const apiController = (app: any) => {
  app.get("/", (req: any, res: any) => {
    res.send("Orte TestCase - Hello World!");
  });
};
export default apiController;
