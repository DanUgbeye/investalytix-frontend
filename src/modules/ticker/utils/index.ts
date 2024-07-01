import CLIENT_CONFIG from "@/config/client/app";
import {
  TickerPriceTarget,
  TickerUpgradesDowngrades,
  TickerUpgradesDowngradesWithPriceTarget,
} from "../types";

class TickerUtils {
  getTickerLogoUrl(ticker: string) {
    return `https://financialmodelingprep.com//image-stock/${ticker}.png`;
  }

  combineTickerUpgradesDowngradesAndPriceTargets(
    upgradesDowngrades: TickerUpgradesDowngrades[],
    priceTargets: TickerPriceTarget[]
  ): TickerUpgradesDowngradesWithPriceTarget[] {
    const priceTargetMap: Map<string, TickerPriceTarget> = new Map();

    priceTargets.forEach((priceTarget) => {
      const key = `${priceTarget.publishedDate}-${priceTarget.analystCompany}-${priceTarget.priceWhenPosted}-${priceTarget.newsPublisher}`;
      priceTargetMap.set(key, priceTarget);
    });

    const combinedArray: TickerUpgradesDowngradesWithPriceTarget[] = [];

    upgradesDowngrades.forEach((upgradeDowngrade) => {
      const key = `${upgradeDowngrade.publishedDate}-${upgradeDowngrade.gradingCompany}-${upgradeDowngrade.priceWhenPosted}-${upgradeDowngrade.newsPublisher}`;
      const matchingPriceTarget = priceTargetMap.get(key);

      if (matchingPriceTarget) {
        combinedArray.push({
          symbol: upgradeDowngrade.symbol,
          publishedDate: upgradeDowngrade.publishedDate,
          newsURL: upgradeDowngrade.newsURL,
          newsTitle: upgradeDowngrade.newsTitle,
          newsBaseURL: upgradeDowngrade.newsBaseURL,
          newsPublisher: upgradeDowngrade.newsPublisher,
          newGrade: upgradeDowngrade.newGrade,
          previousGrade: upgradeDowngrade.previousGrade,
          gradingCompany: upgradeDowngrade.gradingCompany,
          action: upgradeDowngrade.action,
          priceWhenPosted: upgradeDowngrade.priceWhenPosted,
          analystName: matchingPriceTarget.analystName,
          priceTarget: matchingPriceTarget.priceTarget,
          adjPriceTarget: matchingPriceTarget.adjPriceTarget,
          analystCompany: matchingPriceTarget.analystCompany,
        });
      }
    });

    return combinedArray;
  }
}

const tickerUtils = new TickerUtils();
export default tickerUtils;
