"use client";

import appUtils from "@/utils/app-util";

export type ClientConfig = {
  CLIENT_BASE_URL: string;
  API_BASE_URL: string;
  FREE_YEARS_DATA: number;
};

function initializeClientConfig(): Readonly<ClientConfig> {
  return Object.freeze({
    CLIENT_BASE_URL: appUtils.getBaseUrl(),
    API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL as string,
    FREE_YEARS_DATA: 5,
  }) satisfies ClientConfig;
}

const CLIENT_CONFIG = initializeClientConfig();
export default CLIENT_CONFIG;
