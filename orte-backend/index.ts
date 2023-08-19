import { Express, httpServer, webSocket } from "./app_server/utils/protocols";

import socketController from "./app_server/controller/socketController";
import apiContoller from "./app_server/controller/apiController";
import mongoDb from "./app_server/models/mongoDB";
import mySql from "./app_server/models/mySql";

const port = 20 * 1000;
// const db = mongoDb();
const express = Express();
const server = httpServer(express, port);
const socket = webSocket(server);

socketController(socket, "mySqlDb");
apiContoller(express);

const mySqlDb = mySql();
