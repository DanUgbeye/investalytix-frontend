import { useState } from "react";
import Quotes from "../../Quotes";
import Overview from "./Overview";
import MarketMovers from "./MarketMovers";
import Dow30 from "./Dow30";
import NASDAQ100 from "./NASDAQ100";
import Sectors from "./Sectors";

const usMarkets = ["MARKET MOVERS", "DOW 30", "NASDAQ 100", "SECTORS"] as const;
export default function USMarkets() {
  const [activeMarket, setActiveMarket] = useState<
    (typeof usMarkets)[number] | null
  >(null);

  const updateActiveUsMarkets = (mkt: typeof activeMarket) => {
    setActiveMarket((state) => (state === mkt ? null : mkt));
  };

  return (
    <section>
      <div className="mb-10 mt-11 flex justify-center gap-6 text-[#252525]">
        {usMarkets.map((market, index) => (
          <>
            <button
              onClick={() => updateActiveUsMarkets(market)}
              className={`text-sm font-bold ${market === activeMarket ? "text-primary-base" : ""}`}
            >
              {market}
            </button>
            {index !== usMarkets.length - 1 && (
              <p className="text-sm font-bold">|</p>
            )}
          </>
        ))}
      </div>

      {activeMarket === null ? (
        <Overview />
      ) : activeMarket === "MARKET MOVERS" ? (
        <MarketMovers />
      ) : activeMarket === "DOW 30" ? (
        <Dow30 />
      ) : activeMarket === "NASDAQ 100" ? (
        <NASDAQ100 />
      ) : activeMarket === "SECTORS" ? (
        <Sectors />
      ) : null}
    </section>
  );
}
