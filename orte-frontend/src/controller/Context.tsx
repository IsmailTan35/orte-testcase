import { io } from "socket.io-client";

function url(): string {
  if (typeof window === "undefined") return "";
  const hostname: string = window.location.hostname;
  const parsed: string[] = window.location.hostname.split(".");
  const protocol: string = window.location.protocol;

  return parsed.includes("ismailtan")
    ? "ortetestcase.ismailtan.dev/"
    : `${protocol}//${hostname}:20000`;
}

const socketUri = url()
  .replace("http://", "")
  .replace("https://", "")
  .replace("/api/", "");

const client = io(socketUri, {
  reconnection: true,
  reconnectionDelay: 2500,
  reconnectionAttempts: 10,
  forceNew: true,
});

export { client, url };
