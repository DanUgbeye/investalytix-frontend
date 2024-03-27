"use client";

import Image from "next/image";
import { Container } from "../container";
import Link from "next/link";
import { Popover } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import { AnchorHTMLAttributes, ReactPropTypes, useState } from "react";
import { FiArrowLeft, FiChevronRight, FiX } from "react-icons/fi";

type RouteLink = { label: string; children?: RouteLink[]; href: string };

const routes: RouteLink[] = [
  {
    label: "PRODUCTS",
    href: "",
    children: [
      {
        label: "chart",
        href: "/chart",
      },
      {
        label: "analyst recommendation",
        href: "/recommendation",
      },
      {
        label: "economic calendar",
        href: "/markets/economy/calendar/summary",
      },
    ],
  },
  {
    label: "MARKETS",
    href: "/markets",
  },
  {
    label: "NEWS",
    href: "",
    children: [
      {
        label: "overview",
        href: "/news",
      },
    ],
  },
  {
    label: "PRICING",
    href: "/pricing",
  },
  {
    label: "ABOUT US",
    href: "",
  },
];

export default function NavBar() {
  const toggleTheme = () => {
    const body = document.querySelector("body");
    if (body) body.classList.toggle("dark");
  };
  return (
    <nav className="bg-[#0B0B0B] py-3">
      <Container>
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center justify-center gap-5">
            <MobileMenu />
            <Link href="/">
              <Image
                src="/images/logo.svg"
                alt="Logo"
                height={20}
                width={150}
              />
            </Link>
          </div>

          <div className="hidden xl:flex">
            {routes.map((route) => (
              <div key={route.label}>
                {route.children ? (
                  <NavSection section={route} />
                ) : (
                  <NavLink
                    route={route}
                    className="focus:bg-primary-/10 inline-block rounded-full px-4 py-4 text-sm font-bold uppercase text-white outline-none hover:bg-primary-base/10"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="hidden items-center lg:flex">
            <div className="grid place-content-center overflow-hidden rounded-full bg-[#262626] p-3">
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0194 11.0787L14.8747 13.9333L13.9314 14.8767L11.0767 12.0213C10.0145 12.8728 8.69337 13.3359 7.33203 13.334C4.02003 13.334 1.33203 10.646 1.33203 7.33398C1.33203 4.02198 4.02003 1.33398 7.33203 1.33398C10.644 1.33398 13.332 4.02198 13.332 7.33398C13.334 8.69532 12.8708 10.0165 12.0194 11.0787ZM10.682 10.584C11.5281 9.71391 12.0006 8.5476 11.9987 7.33398C11.9987 4.75532 9.91003 2.66732 7.33203 2.66732C4.75336 2.66732 2.66536 4.75532 2.66536 7.33398C2.66536 9.91198 4.75336 12.0007 7.33203 12.0007C8.54565 12.0026 9.71196 11.5301 10.582 10.684L10.682 10.584Z"
                  fill="white"
                />
              </svg>
            </div>
            <button className="rounded bg-transparent px-8 py-2 font-bold text-white">
              Login
            </button>
            <button className="rounded bg-[#FB8B1E] px-8 py-2 font-bold text-white">
              Sign Up
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
}

function NavLink({
  route,
  className = "",
}: {
  route: RouteLink;
  className: AnchorHTMLAttributes<HTMLAnchorElement>["className"];
}) {
  return (
    <Link className={className} href={route.href}>
      {route.label}
    </Link>
  );
}

function NavSection({ section }: { section: RouteLink }) {
  return (
    <Popover>
      <Popover.Button
        className={`inline-block rounded-full px-4 py-4 text-sm font-bold uppercase text-white outline-none hover:bg-primary-base/10 focus:bg-primary-base/10`}
      >
        {section.label}
      </Popover.Button>
      <Popover.Panel className="absolute z-10 translate-y-8 overflow-hidden rounded-lg">
        <div className="flex flex-col bg-black dark:bg-white">
          {section.children?.map((route) => (
            <NavLink
              key={route.label}
              className="px-4 py-2 font-medium capitalize text-white"
              route={route}
            />
          ))}
        </div>
      </Popover.Panel>
    </Popover>
  );
}

function MobileMenu() {
  const [history, setHistory] = useState<RouteLink[]>([]);
  const lastHistory = () => history[history.length - 1];
  const addHistory = (route: RouteLink) => {
    setHistory((s) => [...s, route]);
  };
  const deleteHistory = () => {
    setHistory((s) => s.slice(0, -1));
  };
  return (
    <Popover>
      <div className="xl:hidden">
        <Popover.Button>
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"
              fill="white"
            />
          </svg>
        </Popover.Button>
        <Popover.Panel className="fixed z-20 overflow-hidden rounded-lg bg-white max-md:inset-0 md:absolute md:translate-y-8">
          <div className="flex min-w-[300px] flex-col bg-white">
            {history.length === 0 ? (
              <div className="flex flex-col bg-white">
                <div className="flex items-center justify-end gap-10 border-b px-4 py-4 md:hidden">
                  <Popover.Button>
                    <FiX />
                  </Popover.Button>
                </div>
                {routes.map((route) => (
                  <div key={route.label}>
                    {route.children ? (
                      <button
                        className="focus:bg-primary-/10 flex w-full items-center justify-between gap-10 whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold uppercase text-black outline-none"
                        onClick={() => addHistory(route)}
                      >
                        {route.label}
                        <FiChevronRight />
                      </button>
                    ) : (
                      // <NavSection section={route} />
                      <NavLink
                        route={route}
                        className="focus:bg-primary-/10 inline-block whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold uppercase text-black outline-none"
                      />
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between gap-10 border-b px-4 py-4">
                  <button onClick={deleteHistory}>
                    <FiArrowLeft />
                  </button>
                  <p className="whitespace-nowrap text-sm font-bold uppercase text-black outline-none">
                    {lastHistory().label}
                  </p>
                  <Popover.Button>
                    <FiX />
                  </Popover.Button>
                </div>

                <div className="flex flex-col">
                  {(lastHistory().children ?? []).map((route) => (
                    <div key={route.label}>
                      {route.children ? (
                        <button
                          className="focus:bg-primary-/10 flex w-full items-center justify-between gap-10 whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold uppercase text-black outline-none"
                          onClick={() => addHistory(route)}
                        >
                          {route.label}
                          <FiChevronRight />
                        </button>
                      ) : (
                        // <NavSection section={route} />
                        <NavLink
                          route={route}
                          className="focus:bg-primary-/10 inline-block whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold uppercase text-black outline-none"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </Popover.Panel>
      </div>
    </Popover>
  );
}
