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
    if (!error.response || !error.response.data) {
      return new Error(error.message);
    }

    return new Error(error.response.data.message);
  }

  if (error instanceof Error) {
    return new Error(error.message);
  }

  return new Error("something went wrong");
}

export { createAPIInstance, setAuthHeader, handleAPIError };
