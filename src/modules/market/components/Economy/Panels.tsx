"use client";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { FiMinus, FiPlus } from "react-icons/fi";

const markets = [
  {
    label: "main indicators",
    children: [
      {
        parent: "main indicators",
        label: "GDP Growth Rate",
        href: "/markets/economy/main-indicators/gdp-growth-rate",
      },
    ],
  },
] as const;

export default function Panels({
  open,
}: {
  open: (typeof markets)[number]["label"];
}) {
  return (
    <div className="">
      {markets.map((market) => (
        <Disclosure defaultOpen={open === market.label} key={market.label}>
          {({ open }) => (
            /* Use the `open` state to conditionally change the direction of an icon. */
            <div className="border border-[#DDDDDD]">
              <Disclosure.Button
                className={`flex w-full items-center justify-between gap-5 border-b border-b-[#DDDDDD] bg-[#F5F5F5] px-4 py-3 dark:bg-transparent capitalize ${open ? "" : "font-bold"}`}
              >
                {market.label}
                {open ? <FiPlus /> : <FiMinus />}
              </Disclosure.Button>
              <Disclosure.Panel className={"white-text p-4 text-[#333333]"}>
                <div>
                  {market.children.map((child) => (
                    <Link href={child.href} key={child.label} className="text-hover-focus">
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
