import { AuthRepository } from "@/modules/auth/repository";
import { AuthData } from "@/modules/auth/types";
import axios, {
  AxiosError,
  AxiosInstance,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig,
} from "axios";
import { errorUtils } from "./error.utils";

function createAPIInstance(baseUrl?: string, config?: CreateAxiosDefaults) {
  return axios.create({
    baseURL: baseUrl,
    timeout: 15000,
    timeoutErrorMessage: "Request timeout",
    ...config,
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
    const originalRequest = config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    // if it is a retried request, dont add auth header
    if (originalRequest._retry) return config;

    let tokenString: string | undefined;
    if (typeof token === "string") {
      tokenString = token;
    } else if (typeof token === "function") {
      tokenString = token();
    }

    if (tokenString) {
      config.headers["authorization"] = `Bearer ${tokenString}`;
    }

    return config;
  });
}

function addRefreshTokenInterceptor(
  axios: AxiosInstance,
  saveAuth: (data: AuthData) => void,
  resetAuth: () => void
) {
  axios.interceptors.response.use(
    (response) => response,
    async (error: AxiosError<{ message?: string }>) => {
      const isAuthenticationError =
        error.response?.status === 401 &&
        error.response?.data?.message?.toLowerCase() ===
          "uauthorised: invalid auth";

      const originalRequest = error.config as InternalAxiosRequestConfig & {
        _retry?: boolean;
      };

      if (!isAuthenticationError || originalRequest._retry) {
        return Promise.reject(error);
      }

      let authToken: string;
      try {
        console.log("refreshing token");
        const axiosInstance = createAPIInstance("/");
        const authRepo = new AuthRepository(axios, axiosInstance);
        const res = await authRepo.refreshToken();
        saveAuth(res);
        authToken = res.token;
      } catch (refreshError) {
        resetAuth();
        return Promise.reject(refreshError);
      }

      originalRequest.headers["authorization"] = `Bearer ${authToken}`;
      originalRequest._retry = true;
      return await axios(originalRequest);
    }
  );
}

export {
  addAuthInterceptor,
  addRefreshTokenInterceptor,
  createAPIInstance,
  handleAPIError,
  setAuthHeader,
};
