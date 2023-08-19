import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/css/index.css";
import SocketProvider from "./controller/SocketProvider.tsx";
import SocketController from "./controller/SocketController.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/index.tsx";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <SocketProvider>
      <Provider store={store}>
        <SocketController />
        <App />
      </Provider>
    </SocketProvider>
  </React.StrictMode>
);
