import { Express, httpServer, webSocket } from "./app_server/utils/protocols";

import socketController from "./app_server/controller/socketController";
import apiContoller from "./app_server/controller/apiController";
import mySql from "./app_server/models/mySql";

const port = 20 * 1000;
const express = Express();
const server = httpServer(express, port);
const socket = webSocket(server);

socketController(socket);
apiContoller(express);

const mySqlDb = mySql();
