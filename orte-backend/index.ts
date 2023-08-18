import { httpServer, webSocket } from "./app_server/utils/protocols";

import controllerSocket from "./app_server/controller/socketController";
import mongoDb from "./app_server/models/mongoDB";
import mySql from "./app_server/models/mySql";

const port = 20 * 1000;
const db = mongoDb();
const mySqlDb = mySql();
const server = httpServer(port);
const socket = webSocket(server);

controllerSocket(socket, mySqlDb);
