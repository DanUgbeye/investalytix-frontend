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
}

export const errorUtils = new ErrorUtils();
