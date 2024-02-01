import { AxiosRequestConfig } from "axios";

export type ApiSuccessResponse<T = any> = {
  status: number;
  message: string;
  data: T;
};

export type ApiErrorResponse<T = undefined> = {
  code: number;
  message: string;
  type: string;
  errors: T;
  status: false;
};

export interface RequestOptions extends AxiosRequestConfig<any> {}

export type PaginatedData<T = any> = {
  data: T[];
  pagination: {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
  };
};

export type FileUploadProgress = {
  percentage: number;
  totalSize: number;
  uploaded: number;
};
