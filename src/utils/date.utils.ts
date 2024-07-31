class DateUtils {
  convertToUTC(date: Date) {
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth();
    const day = date.getUTCDate();
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();
    const milliseconds = date.getUTCMilliseconds();

    return new Date(
      Date.UTC(year, month, day, hours, minutes, seconds, milliseconds)
    );
  }

  getYearAndQuarter(date: Date) {
    const dateCpy = new Date(date);
    const month = dateCpy.getMonth();
    const year = dateCpy.getFullYear();

    let quarter;
    if (month >= 0 && month <= 2) {
      quarter = 1;
    } else if (month >= 3 && month <= 5) {
      quarter = 2;
    } else if (month >= 6 && month <= 8) {
      quarter = 3;
    } else {
      quarter = 4;
    }

    return {
      year: year,
      quarter: quarter,
    };
  }
}

export const dateUtils = new DateUtils();
