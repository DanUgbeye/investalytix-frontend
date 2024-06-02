import useAuthStore from "@/modules/auth/store";
import axios, { AxiosError, AxiosInstance } from "axios";
import { errorUtils } from "./error.utils";

function createAPIInstance(baseUrl?: string) {
  return axios.create({
    baseURL: baseUrl,
    timeout: 30000,
    timeoutErrorMessage: "Request timeout",
  });
}

function setAuthHeader(api: AxiosInstance, token: string) {
  api.defaults.headers.common["authorization"] = `Bearer ${token}`;
}

function handleAPIError(
  error: AxiosError<{ message: string }> | Error | undefined
) {
  if (errorUtils.isNetworkError(error)) {
    return new Error("Network Error");
  }

  if (error instanceof AxiosError) {
    if (error.response?.data?.message) {
      let errMessage: string = error.response?.data?.message;
      return new Error(errMessage);
    }

    return new Error(error.message || "Something went wrong");
  }

  if (error instanceof Error && error.message) {
    return new Error(error.message);
  }

  return new Error("something went wrong");
}

function addAuthInterceptor(api: AxiosInstance) {
  api.interceptors.request.use((config) => {
    const { auth } = useAuthStore.getState();
    // console.log("interceptor running");
    if (auth && auth.token) {
      // console.log("interceptor auth token added");
      config.headers["authorization"] = `Bearer ${auth.token}`;
    }
    return config;
  });
}

export { createAPIInstance, setAuthHeader, handleAPIError, addAuthInterceptor };
