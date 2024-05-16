"use client";
import { addAuthInterceptor, createAPIInstance } from "@/utils/api-utils";
import CLIENT_CONFIG from "../app";

const clientAPI = createAPIInstance(CLIENT_CONFIG.API_BASE_URL);

addAuthInterceptor(clientAPI);
export { clientAPI };
