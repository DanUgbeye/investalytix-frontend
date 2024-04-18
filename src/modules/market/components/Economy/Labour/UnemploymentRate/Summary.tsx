import Image from "next/image";
import Panel from "../../Panel";
import UnemploymentRate from "./UnemploymentRate";
import RelatedTable from "./RelatedTable";
import CalendarTable from "./CalendarTable";

export default function Summary() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1fr,300px]">
      <div className="overflow-hidden">
        <p className="text-[#636363] white-text">
          The unemployment rate in the United States held at 3.7% in December
          2023, unchanged from the previous month and slightly below the market
          consensus of 3.8%, influenced by a slowdown in new entries into the
          labor force. The activity rate declined to 62.5% last month from
          November&apos;s 62.8%. Additionally, there was an increase of 6
          thousand in the number of unemployed individuals, totaling 6.27
          million, while the count of employed individuals dropped by 683
          thousand to 161.2 million.
          <br />
          <br />
          Source: U.S. Bureau of Labor Statistics
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

        <UnemploymentRate />
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
