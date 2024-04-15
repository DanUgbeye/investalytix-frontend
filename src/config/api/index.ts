import { createAPIInstance } from "@/utils/api-utils";
import CLIENT_CONFIG from "../app/client";

export const clientAPI = createAPIInstance(CLIENT_CONFIG.API_BASE_URL);

// TODO register interceptors here
