import { RefObject, useState } from "react";
import Overview from "./Overview";
import { createPortal } from "react-dom";
import Australia from "./Australia";
import Brazil from "./Brazil";
import Canada from "./Canada";
import France from "./France";
import Germany from "./Germany";
import Italy from "./Italy";
import Japan from "./Japan";
import Treasurys from "./Treasurys";
import UK from "./UK";

export default function Bonds({
  portal,
}: {
  portal: RefObject<HTMLDivElement>;
}) {
  const markets = [
    "TREASURY",
    "U.K",
    "GERMANY",
    "ITALY",
    "FRANCE",
    "JAPAN",
    "AUSTRALIA",
    "CANADA",
    "BRAZIL",
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

      {activeMarket === "AUSTRALIA" ? (
        <Australia />
      ) : activeMarket === "BRAZIL" ? (
        <Brazil />
      ) : activeMarket === "CANADA" ? (
        <Canada />
      ) : activeMarket === "FRANCE" ? (
        <France />
      ) : activeMarket === "GERMANY" ? (
        <Germany />
      ) : activeMarket === "ITALY" ? (
        <Italy />
      ) : activeMarket === "JAPAN" ? (
        <Japan />
      ) : activeMarket === "TREASURY" ? (
        <Treasurys />
      ) : activeMarket === "U.K" ? (
        <UK />
      ) : activeMarket === null ? (
        <Overview />
      ) : null}
    </>
  );
}
