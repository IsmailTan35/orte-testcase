import { useEffect } from "react";
import { useSocket } from "./SocketProvider";
import { productsActions, sizesActions, useAppDispatch } from "@/redux";
import IProduct from "@/redux/interface/products";

const SocketController = () => {
  const socket = useSocket();
  const dispatch = useAppDispatch();

  function connectSocket() {
    if (!socket) return;
    socket.on("connect", () => {
      console.info("Socket connected");
      socket.emit("getSizes");
    });
    socket.on("disconnect", () => {
      console.info("Socket disconnected");
    });
    socket.on("reconnect", () => {
      console.info("Socket reconnected");
    });
    socket.on("reconnect_attempt", () => {
      console.info("Socket reconnect_attempt");
    });
    socket.on("reconnecting", () => {
      console.info("Socket reconnecting");
    });
    socket.on("reconnect_error", () => {
      console.info("Socket reconnect_error");
    });
    socket.on("reconnect_failed", () => {
      console.info("Socket reconnect_failed");
    });
    socket.on("error", () => {
      console.info("Socket error");
    });
    socket.on("connect_error", () => {
      console.info("Socket connect_error");
    });
    socket.on("connect_timeout", () => {
      console.info("Socket connect_timeout");
    });
    socket.on("receviceOnlineContact", data => {
      console.info(data);
    });
    socket.on("sizes", data => {
      dispatch(sizesActions.update(data));
    });
    socket.on("products", (data: IProduct[] | []) => {
      dispatch(productsActions.update(data));
    });
  }

  useEffect(() => {
    connectSocket();
    return () => {
      socket?.disconnect();
    };
  }, [socket]);
  return null;
};

export default SocketController;
