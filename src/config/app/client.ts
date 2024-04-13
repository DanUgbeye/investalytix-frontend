"use client";

import appUtils from "@/utils/app-util";
import { type ClientConfig } from "./app.types";

function initializeClientConfig(): Readonly<ClientConfig> {
  return Object.freeze({
    CLIENT_BASE_URL: appUtils.getBaseUrl(),
    API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL as string,
  });
}

const CLIENT_CONFIG = initializeClientConfig();
export default CLIENT_CONFIG;
