"use client";
import WithSidePanel, { SIDE_SECTIONS } from "@/modules/markets/WithSidePanel";
import MarketHeader from "@/modules/markets/MarketHeader";
import MarketEvent from "@/modules/markets/Market/MarketEvent";
import Market from "@/modules/markets/Market/Overview";

export default function MarketPage() {
  return (
    <main>
      <MarketHeader name="MARKET" />

      <WithSidePanel sections={SIDE_SECTIONS["ALL"]}>
        <Market />
      </WithSidePanel>

      {/* TRENDING NOW */}
      <section className="mt-16 overflow-hidden">
        <header className="pb-10">
          <h2 className="border-l-[6px] border-l-primary-base pl-5 text-3xl font-extrabold">
            TRENDING NOW
          </h2>
        </header>

        <div className="flex gap-5 overflow-hidden">
          <MarketEvent />
          <MarketEvent />
          <MarketEvent />
        </div>
      </section>
    </main>
  );
}
