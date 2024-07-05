export * from "./api.types";
export * from "./quote.types";
export * from "./symbol.types";

export type Theme = "light" | "dark";
export type Result<TData extends any, TError extends any = Error> =
  | { data: TData; error?: undefined }
  | { data?: undefined; error: TError };
