import Image from "next/image";
import Panel from "../../Panel";
import { FiPlus } from "react-icons/fi";
import InterestRate from "./InterestRate";
import RelatedTable from "./RelatedTable";
import CalendarTable from "./CalendarTable";

export default function Summary() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1fr,300px]">
      <div className="overflow-hidden">
        <p className="white-text text-[#636363]">
          The Federal Reserve kept the fed funds rate steady at 5.25%-5.5% for a
          third consecutive meeting in December 2023, in line with expectations
          but indicated 75bps cuts in 2024. Policymakers said that recent
          indicators suggest that economic growth has slowed and job gains have
          moderated but remain strong, and the unemployment rate has remained
          low. Inflation has eased over the past year but remains elevated. The
          central bank also published new projections. GDP growth is expected
          higher this year (2.6% vs 2.1% in the September projection), but
          slightly lower in 2024 (1.4% vs 1.5%). Also, PCE inflation was revised
          lower for both 2023 (2.8% vs 3.3%) and 2024 (2.4% vs 2.5%) as well as
          core PCE inflation which is seen at 3.2% in 2023 (vs 3.7%) and 2.4%
          (vs 2.6%) next year. Unemployment projections remained steady at 3.8%
          for 2023 and 4.1% for next year. The so-called dot plot showed the
          median year-end 2024projection for the federal funds rate fell to 4.6%
          from 5.1% seen in September.
          <br />
          <br />
          source: Federal Reserve
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

        <InterestRate />
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
