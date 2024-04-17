import useAuthStore from "@/modules/auth/store";
import axios, { AxiosError, AxiosInstance } from "axios";

function createAPIInstance(baseUrl?: string) {
  return axios.create({
    baseURL: baseUrl,
    timeout: 30000,
  });
}

function setAuthHeader(api: AxiosInstance, token: string) {
  api.defaults.headers.common["authorization"] = `Bearer ${token}`;
}

function handleAPIError(
  error: AxiosError<{ message: string }> | Error | undefined
) {
  if (error instanceof AxiosError) {
    if (error.response?.data?.message) {
      return new Error(error.response.data.message);
    }

    return new Error(error.message);
  }

  if (error instanceof Error) {
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
