import { addAuthInterceptor, createAPIInstance } from "@/utils/api-utils";
import SERVER_CONFIG from "./app";

const serverAPI = createAPIInstance(SERVER_CONFIG.API_BASE_URL);
export { serverAPI };
