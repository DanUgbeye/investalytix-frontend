import axios, { AxiosError, AxiosInstance } from "axios";
import { errorUtils } from "./error.utils";

function createAPIInstance(baseUrl?: string) {
  return axios.create({
    baseURL: baseUrl,
    timeout: 10000,
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

function addAuthInterceptor(
  axios: AxiosInstance,
  token?: (() => string | undefined) | string
) {
  axios.interceptors.request.use((config) => {
    if (typeof token === "string") {
      config.headers["authorization"] = `Bearer ${token}`;
    } else if (typeof token === "function") {
      let tokenString = token();

      if (tokenString) {
        config.headers["authorization"] = `Bearer ${tokenString}`;
      }
    }

    return config;
  });
}

export { addAuthInterceptor, createAPIInstance, handleAPIError, setAuthHeader };
