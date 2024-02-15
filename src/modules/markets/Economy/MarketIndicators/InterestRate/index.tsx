import Image from "next/image";
import Panels from "../../Panels";
import PerformanceTable from "../../PerformanceTable";

export default function InterestRate() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1fr,300px]">
      <div className="">
        <div className="relative mb-12 h-36 overflow-hidden lg:h-96">
          <Image src="/images/map2.png" fill alt="" className="object-cover" />
        </div>

        <div className="">
          <PerformanceTable highlight />
        </div>

        <p className="mt-14 border border-[#DDDDDD] px-5 py-6">
          Elevated inflation rates continue to force major central banks to
          raise borrowing costs despite signs that falling demand may increase
          recession risks. The FOMC 2-day meeting kicks off on Tuesday, and the
          Fed is expected to announce a 25bps increase in the fed funds rate,
          dialing back the size of the increase for a second straight meeting,
          but still pushing the borrowing costs to 4.5%-4.75%, the highest since
          2007. On Thursday, the Bank of England is set to raise the key Bank
          Rate by 50bps to 4%, the same as in December, pushing it to the
          highest since 2008. Meanwhile, the ECB is due to deliver a second
          straight 50bps increase on Thursday, pushing the deposit rate to 2.5%,
          also the highest since 2008. Investors will also keep a close eye on
          policymakers&apos; next steps, especially whether they plan to keep
          hiking rates or if the tightening cycle is coming close to an end.
          This page displays a table with actual values, consensus figures,
          forecasts, statistics and historical data charts for - Interest Rate.
          This page provides values for Interest Rate reported in several
          countries. The table has current values for Interest Rate, previous
          releases, historical highs and record lows, release frequency,
          reported unit and currency plus links to historical data charts.
        </p>
      </div>
      <div className="flex flex-col gap-1">
        <Panels heading={"Prices"} defaultOpen />
        <Panels heading={"Markets"} />
        <Panels heading={"Labour"} />
        <Panels heading={"GDP"} />
        <Panels heading={"Health"} />
        <Panels heading={"Money"} />
        <Panels heading={"Trade"} />
        <Panels heading={"Government"} />
        <Panels heading={"Business"} />
        <Panels heading={"Consumer"} />
        <Panels heading={"Housing"} />
        <Panels heading={"Taxes"} />
        <Panels heading={"Climate"} />
      </div>
    </div>
  );
}
