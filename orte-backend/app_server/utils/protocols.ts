import { createServer as httpCreate } from "http";
import { Server as socketServer } from "socket.io";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const httpServer = (express: any, port: any) => {
  const httpServer = httpCreate(express);
  httpServer.listen(port, () => {
    console.info(new Date() + " Http server is listening on port " + port);
  });
  return httpServer;
};

const webSocket = (httpServer: any) => {
  const io = new socketServer(httpServer, {
    cors: {
      origin: "*",
    },
  });
  return io;
};

const Express = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors());

  return app;
};

export { httpServer, webSocket, Express };
