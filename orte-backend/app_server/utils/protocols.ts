import { createServer as httpCreate } from "http";
import { Server as socketServer } from "socket.io";
const httpServer = (port: any) => {
  const httpServer = httpCreate();
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

export { httpServer, webSocket };
