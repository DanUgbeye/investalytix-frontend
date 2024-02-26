"use client"
import { Disclosure } from "@headlessui/react";
import { FiMinus } from "react-icons/fi";

export default function Panel({
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