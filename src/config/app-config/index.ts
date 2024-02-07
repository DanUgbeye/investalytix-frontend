"use client";
import appUtils from "@/utils/app-util";
import { AppConfig } from "./app-config.types";

function initializeAppConfig(): Readonly<AppConfig> {
  return Object.freeze({
    CLIENT_BASE_URL: appUtils.getBaseUrl(),
    API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL as string,
  });
}

const APP_CONFIG = initializeAppConfig();

export default APP_CONFIG;
