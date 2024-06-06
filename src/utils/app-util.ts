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

  getYearAndQuarter(date: Date) {
    const dateCpy = new Date(date);
    const month = dateCpy.getMonth();
    const year = dateCpy.getFullYear();

    let quarter;
    if (month >= 0 && month <= 2) {
      quarter = "Q1";
    } else if (month >= 3 && month <= 5) {
      quarter = "Q2";
    } else if (month >= 6 && month <= 8) {
      quarter = "Q3";
    } else {
      quarter = "Q4";
    }

    return {
      year: year,
      quarter: quarter,
    };
  }
}

const appUtils = new AppUtils();
export default appUtils;
