import CLIENT_CONFIG from "@/config/client/app";

class TickerUtils {
  getTickerLogoUrl(ticker: string) {
    return `https://financialmodelingprep.com//image-stock/${ticker}.png`;
  }
}

const tickerUtils = new TickerUtils();
export default tickerUtils;
