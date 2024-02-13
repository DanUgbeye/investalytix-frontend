import { RefObject, useState } from "react";
import Overview from "./Overview";
import { createPortal } from "react-dom";
import Metals from "./Metals";
import Agriculture from "./Agriculture";
import Livestock from "./Livestock";
import IndexFutures from "./IndexFutures";
import IntrestRateFutures from "./IntrestRateFutures";
import CurrencyFutures from "./CurrencyFutures";

export default function Commoodities({
  portal,
}: {
  portal: RefObject<HTMLDivElement>;
}) {
  const markets = [
    "ENERGY",
    "METALS",
    "AGRICULTURE",
    "LIVESTOCK",
    "INDEX FUTURES",
    "INTEREST RATE FURTURES",
    "CURRENCY FUTURES",
  ] as const;

  const [activeMarket, setActiveMarket] = useState<
    (typeof markets)[number] | null
  >(null);

  const updateActiveMarket = (mkt: typeof activeMarket) => () =>
    setActiveMarket((state) => (state === mkt ? null : mkt));

  return (
    <>
      {portal.current !== null &&
        createPortal(
          <div
            className={
              "mb-14 flex justify-between gap-4 overflow-auto px-14 py-5"
            }
          >
            {markets.map((mkt) => (
              <button
                key={mkt}
                onClick={updateActiveMarket(mkt)}
                className={`whitespace-nowrap rounded px-5 py-3 ${
                  mkt === activeMarket
                    ? "bg-primary-base text-white"
                    : "bg-transparent text-[#636363]"
                }`}
              >
                {mkt}
              </button>
            ))}
          </div>,
          portal?.current
        )}

      {/* TODO: Enery markets */}
      {activeMarket === "METALS" ? (
        <Metals />
      ) : activeMarket === "AGRICULTURE" ? (
        <Agriculture />
      ) : activeMarket === "LIVESTOCK" ? (
        <Livestock />
      ) : activeMarket === "INDEX FUTURES" ? (
        <IndexFutures />
      ) : activeMarket === "INTEREST RATE FURTURES" ? (
        <IntrestRateFutures />
      ) : activeMarket === "CURRENCY FUTURES" ? (
        <CurrencyFutures />
      ) : activeMarket === null ? (
        <Overview />
      ) : null}
    </>
  );
}
