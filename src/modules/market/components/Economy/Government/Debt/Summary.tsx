import Image from "next/image";
import Panel from "../../Panel";
import RelatedTable from "./RelatedTable";
import Dept from "./Dept";

export default function Summary() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1fr,300px]">
      <div className="overflow-hidden">
        <p className="white-text text-[#636363]">
          Government Debt in the United States increased to 34001494 USD Million
          in December from 33878679 USD Million in November of 2023. Government
          Debt in the United States averaged 5515378.62 USD Million from 1942
          until 2023, reaching an all time high of 34001494.00 USD Million in
          December of 2023 and a record low of 60000.00 USD Million in January
          of 1942.
          <br />
          <br />
          source: U.S. Department of the Treasury
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
        <RelatedTable />

        <div className="h-8 w-full"></div>

        <Dept />
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
