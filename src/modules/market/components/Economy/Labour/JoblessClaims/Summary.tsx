import Image from "next/image";
import Panel from "../../Panel";
import InitialJoblessClaims from "./InitialJoblessClaims";
import RelatedTable from "./RelatedTable";
import CalendarTable from "./CalendarTable";

export default function Summary() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1fr,300px]">
      <div className="overflow-hidden">
        <p className="text-[#636363] white-text">
          The number of Americans filing for unemployment benefits rose by
          25,000 to 214,000 on the week ending January 20th, rebounding
          significantly from the 16-month low touched in the prior week and
          overshooting market expectations of 200,000. In the meantime,
          continuing claims rose by 27,000 to 1,833,000, slightly ahead of
          market expectations of 1,828,000 to suggest that unemployed
          individuals are taking longer to find jobs. The data contrasted with a
          series of hot labor figures released for December and early January,
          challenging views that the labor market shall remain historically
          strong following the Fed&apos;s historical tightening campaign. The
          four-week moving average, which reduces week-to-week volatility, fell
          by 1,500 to 202,250. In the meantime, the non-seasonally adjusted
          initial claim count fell by 42,375 to 248,955, resisting an even
          higher seasonal drop as Wisconsin (1,216), Washington (475), and
          Michigan (47), were the only states to record positive unemployment
          changes.
          <br />
          <br />
          source: U.S. Department of Labor
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

        <InitialJoblessClaims />
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
