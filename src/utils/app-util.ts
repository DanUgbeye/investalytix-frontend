class AppUtils {
  getBaseUrl(): string {
    return typeof window === "undefined"
      ? ""
      : `${window.location.protocol}//${window.location.hostname}${
          window.location.port ? ":" + window.location.port : ""
        }`;
  }

  formatNumber(
    amount?: number,
    opts?: Intl.NumberFormatOptions,
    locale = "en-US"
  ) {
    if (!amount) return "-";

    const {
      currency = "USD",
      style = "currency",
      maximumFractionDigits = 2,
      ...rest
    } = opts || {};

    const formatter = new Intl.NumberFormat(locale, {
      ...rest,
      style,
      currency,
      maximumFractionDigits,
    });

    // Format the amount to currency string
    return formatter.format(amount);
  }
}

const appUtils = new AppUtils();
export default appUtils;
