import CLIENT_CONFIG from "@/config/client/app";

class TickerUtils {
  getTickerLogoUrl(ticker: string) {
    return `${CLIENT_CONFIG.API_BASE_URL}/tickers/${ticker}/logo`;
  }
}

const tickerUtils = new TickerUtils();
export default tickerUtils;
