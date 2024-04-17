import Image from "next/image";
import Panel from "../../Panel";
import GrowthRate from "./GrowthRate";
import RelatedTable from "./RelatedTable";
import CalendarTable from "./CalendarTable";

export default function Forecast() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1fr,300px]">
      <div className="overflow-hidden">
        <p className="text-[#636363] dark:text-white">
          The US economy expanded an annualized 3.3% in Q4 2023, much better
          than forecasts of a 2% rise, and following a 4.9% rate in Q3,
          according to the advance estimate. Consumer spending slowed (2.8% vs
          3.1% in Q3), led by goods (3.8% vs 4.9%) while consumption of services
          rose faster (2.4% vs 2.2%), led by food services, accommodations, and
          health care. Also, private inventories added only 0.07 pp to growth,
          below 1.27 pp in Q3, and government spending rose at a slower pace
          (3.3% vs 5.8%). On the other hand, exports accelerated (6.3% vs 5.4%)
          and imports grew less (1.9% vs 4.2%). Looking further, non-residential
          investment increased more (1.9% vs 1.4%), led by a rebound in
          equipment (1% vs -4.4%) and a rise in intellectual property products
          (2.1% vs 1.8%) while investment in structures eased (3.2% vs 11.2%).
          Finally, residential investment continued to grow although at a slower
          pace. Considering full 2023, the US economy grew 2.5%, compared to
          1.9% in 2022 and the Fed&apos;s estimates of 2.6%.
          <br />
          <br />
          source: U.S. Bureau of Economic Analysis
        </p>

        <div className="relative mt-8 h-[320px] w-full max-md:h-[200px]">
          <Image
            src="/images/chart2.png"
            fill
            alt=""
            className="object-contain object-left"
          />
        </div>

        <div className="h-8 w-full"></div>
        <CalendarTable />

        <div className="h-8 w-full"></div>
        <RelatedTable />

        <div className="h-8 w-full"></div>

        <GrowthRate />
      </div>
      <div className="">
        <div className="mt-8 flex flex-col gap-1">
          <Panel heading={"Prices"} defaultOpen />
          <Panel heading={"Markets"} />
          <Panel heading={"Labour"} />
          <Panel heading={"GDP"} />
          <Panel heading={"Health"} />
          <Panel heading={"Money"} />
          <Panel heading={"Trade"} />
          <Panel heading={"Government"} />
          <Panel heading={"Business"} />
          <Panel heading={"Consumer"} />
          <Panel heading={"Housing"} />
          <Panel heading={"Taxes"} />
          <Panel heading={"Climate"} />
        </div>
      </div>
    </div>
  );
}
