"use client";
import { RefObject, useRef, useState } from "react";
import USMarkets from "./US";
import Americas from "./Americas";
import { createPortal } from "react-dom";
import Overview from "./Overview";

const markets = ["U.S", "AMERICAS"];

export default function PreMarket({
  portal,
}: {
  portal: RefObject<HTMLDivElement>;
}) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const updateSelectedIndex = (num: number) =>
    setSelectedIndex((state) => (state === num ? -1 : num));

  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="">
      {portal.current !== null &&
        createPortal(
          <div ref={headerRef} className="mb-14">
            <div className="mx-auto grid w-fit grid-cols-2 rounded bg-[#F9F9F9] p-3">
              {markets.map((market, index) => (
                <button
                  key={market}
                  className={`whitespace-nowrap rounded px-14 py-2 font-semibold ${
                    selectedIndex === index
                      ? "bg-primary-base text-white"
                      : "bg-[#F5F5F5] text-[#636363]"
                  }`}
                  onClick={() => updateSelectedIndex(index)}
                >
                  {market}
                </button>
              ))}
            </div>
          </div>,
          portal.current
        )}

      <div>
        {selectedIndex === 0 && <USMarkets portal={headerRef} />}
        {selectedIndex === 1 && <Americas />}
        {selectedIndex === -1 && <Overview />}
      </div>
    </div>
  );
}


