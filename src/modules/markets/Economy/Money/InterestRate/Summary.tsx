import Image from "next/image";
import Panel from "../../Panel";
import { FiPlus } from "react-icons/fi";

const related = [
  {
    related: "United States GDP Growth Rate",
    last: "4.90",
    previous: "2.10",
    unit: "percent",
    reference: "Sep 2023",
  },
  {
    related: "United States Inflation Rate",
    last: "3.40",
    previous: "3.10",
    unit: "percent",
    reference: "Dec 2023",
  },
  {
    related: "United States Fed Funds Interest Rate",
    last: "5.50",
    previous: "5.50",
    unit: "percent",
    reference: "Dec 2023",
  },
  {
    related: "United States Unemployment Rate",
    last: "3.70",
    previous: "3.70",
    unit: "percent",
    reference: "Dec 2023",
  },
];

const calendar = [
  {
    date: "",
    time: "",
    reference: "",
    actual: "",
    previous: "",
    consensus: "",
    teforecast: "",
  },
];

export default function Summary() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1fr,300px]">
      <div className="overflow-hidden">
        <p className="text-[#636363]">
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

        <InitialJobClaims />
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

function CalendarTable() {
  return (
    <div className="overflow-hidden border border-[#DEE2E6]">
      <div className="overflow-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
                Calendar
              </th>
              <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
                GMT
              </th>
              <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
                Reference
              </th>
              <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
                Actual
              </th>
              <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
                Previous
              </th>
              <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
                Consensus
              </th>
              <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
                TEForecast
              </th>
            </tr>
          </thead>
          <tbody>
            {calendar.map((entry, index) => (
              <tr key={entry.date.replaceAll(" ", "-")}>
                <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm font-bold text-[#333333]">
                  {entry.date}
                </td>
                <td
                  className={`border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]`}
                >
                  {entry.time}
                </td>

                <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
                  {entry.reference}
                </td>
                <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
                  {entry.actual}
                </td>
                <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
                  {entry.previous}
                </td>
                <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
                  {entry.consensus}
                </td>
                <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
                  {entry.teforecast}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-[#F5F5F5] px-2 py-3">
        <button className="border border-[#CCCCCC] bg-white p-2">
          <FiPlus />
        </button>
      </div>
    </div>
  );
}

function RelatedTable() {
  return (
    <div className="border border-[#DEE2E6]">
      <div className="overflow-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
                Related
              </th>
              <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
                Last
              </th>
              <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
                Previous
              </th>
              <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
                Unit
              </th>
              <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
                Reference
              </th>
            </tr>
          </thead>
          <tbody>
            {related.map((entry, index) => (
              <tr key={entry.related.replaceAll(" ", "-")}>
                <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm font-bold text-[#333333]">
                  {entry.related}
                </td>
                <td
                  className={`border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]`}
                >
                  {entry.last}
                </td>

                <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
                  {entry.previous}
                </td>
                <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
                  {entry.unit}
                </td>
                <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
                  {entry.reference}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-[#F5F5F5] px-2 py-3">
        <button className="border border-[#CCCCCC] bg-white p-2">
          <FiPlus />
        </button>
      </div>
    </div>
  );
}

function InitialJobClaims() {
  return (
    <div className="border border-[#DEE2E6]">
      <div className="bg-[#F5F5F5] px-2 py-3 text-sm text-[#212529]">
        United States Fed Funds Interest Rate
      </div>
      <p className="p-4 text-sm text-[#212529]">
        In the United States, the authority to set interest rates is divided
        between the Board of Governors of the Federal Reserve (Board) and the
        Federal Open Market Committee (FOMC). The Board decides on changes in
        discount rates after recommendations submitted by one or more of the
        regional Federal Reserve Banks. The FOMC decides on open market
        operations, including the desired levels of central bank money or the
        desired federal funds market rate.
      </p>

      <div className="overflow-auto">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="bg-[#F5F5F5] py-3 pl-4 pr-2 text-left text-sm text-[#212529]">
                Actual
              </th>
              <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
                Previous
              </th>
              <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
                Highest
              </th>
              <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
                Lowest
              </th>
              <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
                Dates
              </th>
              <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
                Unit
              </th>
              <th className="bg-[#F5F5F5] py-3 pl-2 pr-4 text-left text-sm text-[#212529]">
                Frequency
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3 pl-4 pr-2 text-left text-sm text-[#212529]">
                4.10
              </td>
              <td className="px-2 py-3 text-left text-sm text-[#212529]">
                4.07
              </td>
              <td className="px-2 py-3 text-left text-sm text-[#212529]">
                15.82
              </td>
              <td className="px-2 py-3 text-left text-sm text-[#212529]">
                0.32
              </td>
              <td className="whitespace-nowrap px-2 py-3 text-left text-sm text-[#212529]">
                1912 - 2024
              </td>
              <td className="whitespace-nowrap py-3 pl-2 pr-4 text-left text-sm text-[#212529]">
                percent
              </td>
              <td className="px-2 py-3 text-left text-sm text-[#212529]">
                Daily
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
