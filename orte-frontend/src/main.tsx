import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/css/index.css";
import { SocketContext, client } from "./controller/Context.tsx";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <SocketContext.Provider value={client}>
      <App />
    </SocketContext.Provider>
  </React.StrictMode>
);
