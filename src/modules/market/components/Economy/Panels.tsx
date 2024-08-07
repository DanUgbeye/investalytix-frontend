"use client";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { FiMinus, FiPlus } from "react-icons/fi";
import { TiArrowSortedDown } from "react-icons/ti";

const markets = [
  {
    label: "main indicators",
    children: [
      {
        parent: "main indicators",
        label: "GDP Growth Rate",
        href: "/markets/economy/main-indicators/gdp-growth-rate/america",
      },
      {
        parent: "main indicators",
        label: "Inflation Rate",
        href: "/markets/economy/main-indicators/inflation-rate",
      },
      {
        parent: "main indicators",
        label: "Unemployment Rate",
        href: "/markets/economy/main-indicators/unemployment-rate/america",
      },
    ],
  },
  {
    label: "bonds",
    children: [
      {
        parent: "bonds",
        label: "Yield Curve",
        href: "/markets/economy/bonds/yield-curve",
      },
    ],
  },
  {
    label: "consumer",
    children: [
      {
        parent: "consumer",
        label: "Consumer Sentiment",
        href: "/markets/economy/consumer/sentiment",
      },
    ],
  },
  {
    label: "labour",
    children: [
      {
        parent: "labour",
        label: "Initial Jobless Claims",
        href: "/markets/economy/labour/jobless-claims",
      },
    ],
  },
] as const;

export type PanelsProps = {
  active: {
    parent: (typeof markets)[number]["label"];
    child: (typeof markets)[number]["children"][number]["label"];
  };
};

export default function Panels({ active }: PanelsProps) {
  return (
    <div className="">
      {markets.map((market) => (
        <Disclosure
          defaultOpen={active.parent === market.label}
          key={market.label}
        >
          {({ open }) => (
            /* Use the `open` state to conditionally change the direction of an icon. */
            <div className="border border-[#DDDDDD] dark:border-[#282828]">
              <Disclosure.Button
                className={`flex w-full items-center justify-between gap-5 border-b border-b-[#DDDDDD] bg-[#F5F5F5] px-4 py-3 font-bold capitalize dark:border-b-[#282828] dark:bg-[#282828]`}
              >
                {market.label}
                <TiArrowSortedDown className={`duration-300 ${open ? "rotate-270" : "-rotate-90"}`} />
              </Disclosure.Button>
              <Disclosure.Panel className={"white-text text-[#333333]"}>
                <div className="flex flex-col gap-1">
                  {market.children.map((child) => (
                    <Link
                      href={child.href}
                      key={child.label}
                      className={`${active.parent === market.label && active.child === child.label ? "text-primary-base dark:text-primary-light" : "text-hover-focus"} px-4 py-2`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      ))}
    </div>
  );
}
