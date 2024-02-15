import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import { FiMinus } from "react-icons/fi";

const performances = [
  { country: "USA", last: 2.5, previous: 2.3, reference: "DEC/23", unit: "%" },
  {
    country: "China",
    last: 1.8,
    previous: 1.6,
    reference: "DEC/23",
    unit: "%",
  },
  {
    country: "India",
    last: 3.2,
    previous: 3.0,
    reference: "DEC/23",
    unit: "%",
  },
  {
    country: "Brazil",
    last: 2.0,
    previous: 1.9,
    reference: "DEC/23",
    unit: "%",
  },
  {
    country: "Russia",
    last: 1.5,
    previous: 1.4,
    reference: "DEC/23",
    unit: "%",
  },
  {
    country: "Germany",
    last: 2.7,
    previous: 2.5,
    reference: "DEC/23",
    unit: "%",
  },
  {
    country: "Japan",
    last: 1.9,
    previous: 1.8,
    reference: "DEC/23",
    unit: "%",
  },
  {
    country: "United Kingdom",
    last: 2.4,
    previous: 2.2,
    reference: "DEC/23",
    unit: "%",
  },
  {
    country: "France",
    last: 2.6,
    previous: 2.4,
    reference: "DEC/23",
    unit: "%",
  },
  {
    country: "Italy",
    last: 2.1,
    previous: 1.9,
    reference: "DEC/23",
    unit: "%",
  },
  {
    country: "Canada",
    last: 2.8,
    previous: 2.6,
    reference: "DEC/23",
    unit: "%",
  },
  {
    country: "Australia",
    last: 2.3,
    previous: 2.1,
    reference: "DEC/23",
    unit: "%",
  },
  {
    country: "South Korea",
    last: 1.7,
    previous: 1.5,
    reference: "DEC/23",
    unit: "%",
  },
  {
    country: "Mexico",
    last: 2.2,
    previous: 2.0,
    reference: "DEC/23",
    unit: "%",
  },
  {
    country: "Nigeria",
    last: 1.4,
    previous: 1.3,
    reference: "DEC/23",
    unit: "%",
  },
  {
    country: "South Africa",
    last: 1.6,
    previous: 1.4,
    reference: "DEC/23",
    unit: "%",
  },
  {
    country: "Saudi Arabia",
    last: 2.9,
    previous: 2.7,
    reference: "DEC/23",
    unit: "%",
  },
  {
    country: "Argentina",
    last: 1.8,
    previous: 1.7,
    reference: "DEC/23",
    unit: "%",
  },
  {
    country: "Turkey",
    last: 2.5,
    previous: 2.3,
    reference: "DEC/23",
    unit: "%",
  },
  {
    country: "Indonesia",
    last: 2.0,
    previous: 1.8,
    reference: "DEC/23",
    unit: "%",
  },
];

export default function InflationRate() {
  return (
    <div className="grid lg:grid-cols-[1fr,300px] gap-5">
      <div className="">
        <div className="relative mb-12 h-36 lg:h-96 overflow-hidden">
          <Image src="/images/map2.png" fill alt="" className="object-cover" />
        </div>

        <div className="">
          <table className="w-full">
            <thead>
              <tr>
                <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
                  Country
                </th>
                <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
                  Last
                </th>
                <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
                  Previous
                </th>
                <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
                  Reference
                </th>
                <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
                  Unit
                </th>
              </tr>
            </thead>
            <tbody>
              {performances.map((performance, index) => (
                <tr key={performance.country.replaceAll(" ", "-")}>
                  <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm font-bold text-[#333333]">
                    {performance.country}
                  </td>
                  <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
                    {performance.last}
                  </td>
                  <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
                    {performance.previous}
                  </td>
                  <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
                    {performance.reference}
                  </td>
                  <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
                    {performance.unit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-14 border border-[#DDDDDD] px-5 py-6">
          This page displays a table with actual values, consensus figures,
          forecasts, statistics and historical data charts for - Inflation Rate.
          This page provides values for Inflation Rate reported in several
          countries. The table has current values for Inflation Rate, previous
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

function Panels({
  heading,
  defaultOpen = false,
}: {
  heading: string;
  defaultOpen?: boolean;
}) {
  const options = [
    "Consumer Price Index (CPI)",
    "Core Consumer Prices",
    "Core Inflation Rate",
    "CPI Housing Utilities",
    "Export Prices",
    "Food Inflation",
    "GDP Deflator",
    "Harmonised Consumer Prices",
    "Harmonised Inflation Rate MoM",
    "Harmonised Inflation Rate YOY",
    "Import Prices",
    "Inflation Expectations",
    "Inflation Rate",
    "Inflation Rate MoM",
    "Producer Price Inflation MoM",
    "Producer Prices",
    "Producer Prices Change",
  ];

  return (
    <Disclosure defaultOpen={defaultOpen}>
      {({ open }) => (
        /* Use the `open` state to conditionally change the direction of an icon. */
        <div className="border border-[#DDDDDD]">
          <Disclosure.Button
            className={`flex w-full items-center gap-5 border-b border-b-[#DDDDDD] bg-[#F5F5F5] px-4 py-3 ${open ? "" : "font-bold"}`}
          >
            <FiMinus className={`${open ? "" : ""}`} />
            {heading}
          </Disclosure.Button>
          <Disclosure.Panel className={"p-4 text-[#333333]"}>
            <ul>
              {options.map((option) => (
                <li key={option.replaceAll(" ", "-")}>{option}</li>
              ))}
            </ul>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}
