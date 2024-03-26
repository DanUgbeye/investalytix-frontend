import Image from "next/image";
import Panel from "../../Panel";
import CalendarTable from "./CalendarTable";
import RelatedTable from "./RelatedTable";
import Sentiment from "./Sentiment";
export default function Forecast() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1fr,300px]">
      <div className="overflow-hidden">
        <p className="text-[#636363] dark:text-white">
          The University of Michigan&apos;s consumer sentiment for the US soared to
          78.8 in January 2024, the highest since July 2021, compared to 69.7 in
          December and forecasts of 70, preliminary estimates showed. Consumer
          views were supported by confidence that inflation has turned a corner
          and strengthening income expectations. Inflation expectations for the
          year ahead went down to 2.9%, the lowest level since December 2020,
          from 3.1% in the previous month and the five-year outlook also edged
          lower to 2.8% from 2.9%. Meanwhile, the gauge measuring consumer
          expectations surged to 75.9 from 67.4 and the measure assessing
          current economic conditions rose to 83.3 from 73.3. Taking January and
          December together, consumer sentiment has climbed a cumulative 29%,
          the largest two-month increase since 1991 as a recession ended. For
          the second straight month, all five index components rose, with a 27%
          surge in the short-run outlook for business conditions and a 14% gain
          in current personal finances.
          <br />
          <br />
          source: University of Michigan
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

        <Sentiment />
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
