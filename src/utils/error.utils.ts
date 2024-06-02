import { AxiosError } from "axios";

class ErrorUtils {
  is404Error(error: unknown) {
    if (
      error instanceof Error &&
      error.message.toLocaleLowerCase().includes("not found")
    ) {
      return true;
    }
    return false;
  }

  isNetworkError(error: unknown) {
    if (
      error instanceof AxiosError &&
      error.code?.toLowerCase().includes("econnrefused")
    ) {
      return true;
    }

    if (error instanceof Error) {
      let errMessage = (error.message || "").toLowerCase();

      if (errMessage.includes("enotfound")) {
        return true;
      }
    }

    return false;
  }
}

export const errorUtils = new ErrorUtils();
