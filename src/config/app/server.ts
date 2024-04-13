"use server";

import { type ServerConfig } from "./app.types";

function initializeServerConfig(): Readonly<ServerConfig> {
  return Object.freeze({
    API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL as string,
  });
}

const SERVER_CONFIG = initializeServerConfig();
export default SERVER_CONFIG;
