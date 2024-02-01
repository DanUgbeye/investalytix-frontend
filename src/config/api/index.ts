"use client";
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import { ApiErrorResponse } from "./api.types";
import APP_CONFIG from "@/config/app-config";

export class ApiService {
  public axios: AxiosInstance;
  private token: string;

  constructor(private baseUrl: string) {
    this.axios = axios.create({
      baseURL: this.baseUrl,
      timeout: 30000,
    });
    this.token = "";
    this.axios.defaults.headers.common["authorization"] = "";
  }

  getBaseUrl() {
    return this.baseUrl;
  }

  setToken(token: string) {
    this.token = token;
    this.axios.defaults.headers.common["authorization"] = "Bearer " + token;
  }

  getToken() {
    return this.token;
  }

  handleError(err: AxiosError<ApiErrorResponse>): Error {
    // console.log(err)
    let errMessage: string = "";
    if (!err.response || !err.response.data) {
      errMessage = err.message;
    } else {
      errMessage = err.response.data.message;
    }

    if (!errMessage || typeof errMessage !== "string") {
      errMessage = "SOMETHING WENT WRONG";
    }

    if (errMessage.includes("timeout")) {
      errMessage = "REQUEST TIMED OUT";
    } else if (errMessage.toLocaleLowerCase() === "access denied") {
      errMessage = "UNAUTHORIZED ACTION";
    } else if (
      typeof errMessage === "string" &&
      errMessage.toLowerCase() === "internal server error"
    ) {
      errMessage = "SOMETHING WENT WRONG ON THE SERVER";
    }

    // console.log(errMessage);
    return new Error(errMessage as string);
  }
}

const { API_BASE_URL } = APP_CONFIG;
const apiService = new ApiService(API_BASE_URL);
export default apiService;
