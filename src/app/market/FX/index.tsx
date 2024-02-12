"use client";
import { useState } from "react";
import Overview from "./Overview";
import AmericasFX from "./AmericasFX";
import AsiaFX from "./AsiaFX";
import EuropeFX from "./EuropeFX";

export default function FX() {
  const markets = ["AMERICAS FX", "ASIA FX", "EUR FX"] as const;
  const [market, setMarket] = useState<(typeof markets)[number] | null>(null);

  const updateMarket = (mkt: typeof market) =>
    setMarket((state) => (state === mkt ? null : mkt));

  return (
    <div className="">
      <div>
        <div className="mb-10 mt-11 flex justify-center gap-6 text-[#252525]">
          {markets.map((mkt, index) => (
            <>
              <button
                onClick={() => updateMarket(mkt)}
                className={`text-sm font-bold ${market === mkt ? "text-primary-base" : ""}`}
              >
                {mkt}
              </button>
              {index !== markets.length - 1 && (
                <p className="text-sm font-bold">|</p>
              )}
            </>
          ))}
        </div>
        <div>
          {market === "AMERICAS FX" ? (
            <AmericasFX />
          ) : market === "ASIA FX" ? (
            <AsiaFX />
          ) : market === "EUR FX" ? (
            <EuropeFX />
          ) : (
            <Overview />
          )}
        </div>
      </div>
    </div>
  );
}
