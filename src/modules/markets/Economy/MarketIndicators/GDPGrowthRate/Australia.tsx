import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import { FiMinus } from "react-icons/fi";
import PerformanceTable from "../../PerformanceTable";

export default function Australia() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1fr,300px]">
      <div className="">
        <div className="relative mb-12 h-36 overflow-hidden lg:h-96">
          <Image src="/images/map4.png" fill alt="" className="object-cover" />
        </div>

        <div className="">
          <PerformanceTable />
        </div>

        <p className="mt-14 border border-[#DDDDDD] px-5 py-6">
          This page displays a table with GDP Growth Rate for a list of
          countries . This page provides values for GDP Growth Rate reported in
          several countries. The table has current values for GDP Growth Rate,
          previous releases, historical highs and record lows, release
          frequency, reported unit and currency plus links to historical data
          charts.
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
