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
          Central Bank Balance Sheet in the United States decreased to 7673741
          USD Million in January 17 from 7686710 USD Million in the previous
          week. Central Bank Balance Sheet in the United States averaged
          3633306.96 USD Million from 2002 until 2024, reaching an all time high
          of 8965487.00 USD Million in April of 2022 and a record low of
          712809.00 USD Million in January of 2003.
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
      <div className="border-b border-b-[#DEE2E6] bg-[#F5F5F5] px-2 py-3 text-sm text-[#212529]">
        United States Central Bank Balance Sheet
      </div>
      {/* <p className="p-4 text-sm text-[#212529]">
        Initial jobless claims have a big impact in financial markets because
        unlike continued claims data which measures the number of persons
        claiming unemployment benefits, Initial jobless claims measures new and
        emerging unemployment.
      </p> */}

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
