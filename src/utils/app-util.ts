class AppUtils {
  getBaseUrl(): string {
    return typeof window === "undefined"
      ? ""
      : `${window.location.protocol}//${window.location.hostname}${
          window.location.port ? ":" + window.location.port : ""
        }`;
  }

  formatCurrency(
    amount: number,
    opts?: Intl.NumberFormatOptions,
    locale = "en-US"
  ) {
    const {
      currency = "USD",
      style = "currency",
      compactDisplay = "long",
      maximumFractionDigits = 0,
      ...rest
    } = opts || {};

    const formatter = new Intl.NumberFormat(locale, {
      ...rest,
      style,
      currency,
      compactDisplay,
      maximumFractionDigits,
    });

    // Format the amount to currency string
    return formatter.format(amount);
  }
}

const appUtils = new AppUtils();
export default appUtils;
