"use client";

import Image from "next/image";
import { Container } from "../container";
import Link from "next/link";
import { Dialog, Menu, Popover } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import {
  AnchorHTMLAttributes,
  Fragment,
  ReactPropTypes,
  useState,
} from "react";
import { FiArrowLeft, FiChevronRight, FiX } from "react-icons/fi";
import useTheme from "@/store/theme/useTheme";

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
  const { toggleTheme } = useTheme();
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

          <div className="flex items-center">
            <Search />
            <button
              className="ml-6 inline-block py-4 font-bold text-white"
              onClick={toggleTheme}
            >
              <svg
                width={20}
                height={20}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3346 9.33268C13.3344 11.1869 13.8864 12.9991 14.9203 14.5383C15.9542 16.0775 17.4231 17.2738 19.1397 17.9748C20.8563 18.6757 22.7427 18.8495 24.5585 18.4739C26.3742 18.0983 28.037 17.1904 29.3346 15.866V15.9993C29.3346 23.3633 23.3653 29.3327 16.0013 29.3327C8.6373 29.3327 2.66797 23.3633 2.66797 15.9993C2.66797 8.63535 8.6373 2.66602 16.0013 2.66602H16.1346C15.2467 3.53418 14.5415 4.5713 14.0606 5.71626C13.5797 6.86121 13.3329 8.09084 13.3346 9.33268ZM5.33464 15.9993C5.33367 18.3793 6.12867 20.6913 7.59316 22.5673C9.05764 24.4433 11.1075 25.7757 13.4165 26.3524C15.7256 26.9292 18.1611 26.7171 20.3358 25.75C22.5104 24.7829 24.2991 23.1163 25.4173 21.0154C23.4272 21.4842 21.3503 21.4368 19.3837 20.8776C17.4171 20.3185 15.626 19.2661 14.1803 17.8204C12.7345 16.3747 11.6822 14.5835 11.123 12.6169C10.5639 10.6503 10.5165 8.57343 10.9853 6.58335C9.27807 7.49287 7.85035 8.84957 6.85498 10.5082C5.85961 12.1668 5.33407 14.065 5.33464 15.9993Z"
                  fill="white"
                />
              </svg>
            </button>
            <button className="hidden rounded bg-transparent px-8 py-2 font-bold text-white md:block">
              Login
            </button>
            <button className="hidden rounded bg-[#FB8B1E] px-8 py-2 font-bold text-white md:block">
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
    <Menu>
      <Menu.Button
        className={`inline-block rounded-full px-4 py-4 text-sm font-bold uppercase text-white outline-none hover:bg-primary-base/10`}
      >
        {section.label}
      </Menu.Button>
      <Menu.Items className="absolute z-20 translate-y-8 overflow-hidden rounded-lg bg-white">
        <div className="flex min-w-[300px] flex-col bg-white">
          {section.children?.map((route) => (
            <NavLink
              key={route.label}
              className="px-4 py-2 font-medium capitalize text-black"
              route={route}
            />
          ))}
        </div>
      </Menu.Items>
    </Menu>
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
  const resetHistory = () => setHistory([]);
  return (
    <Menu>
      <div className="xl:hidden">
        <Menu.Button>
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
        </Menu.Button>
        <Menu.Items className="fixed z-20 overflow-hidden rounded-lg bg-white max-md:inset-0 md:absolute md:translate-y-8">
          <div className="flex min-w-[300px] flex-col bg-white">
            {history.length === 0 ? (
              <div className="flex flex-col bg-white">
                <div className="flex items-center justify-end gap-10 border-b px-4 py-4 md:hidden">
                  <Menu.Button onClick={resetHistory}>
                    <FiX />
                  </Menu.Button>
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
                  <Menu.Button onClick={resetHistory}>
                    <FiX />
                  </Menu.Button>
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
        </Menu.Items>
      </div>
    </Menu>
  );
}

function Search() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => setIsOpen((s) => !s);
  return (
    <>
      <button
        className="grid place-content-center overflow-hidden rounded-full bg-[#262626] p-3"
        onClick={toggleIsOpen}
      >
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
      </button>
      <Dialog open={isOpen} onClose={toggleIsOpen} className="relative z-50">
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          aria-hidden="true"
        />

        {/* Full-screen scrollable container */}
        <div className="fixed inset-0 mt-[10vh] flex w-screen items-start justify-center overflow-hidden">
          {/* The actual dialog panel  */}
          {/* Container to center the panel */}
          <div className="dark:bg0black max-h-[80vh] w-[80vw] max-w-screen-md overflow-auto rounded bg-white p-10 md:w-[70vw]">
            <Dialog.Panel className="w-full">
              <form
                className="flex flex-col gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  // updateHandler();
                }}
              >
                <div className="relative h-fit">
                  <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Search for ticker, quotes & videos"
                    className="w-full rounded-full border-2 border-black px-6 py-3 text-sm font-medium text-black placeholder:text-black focus:outline-none"
                  />
                  <div className="absolute bottom-4 right-0 top-4 grid -translate-x-1/2 place-content-center bg-white pl-6">
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.0194 11.0787L14.8747 13.9333L13.9314 14.8767L11.0767 12.0213C10.0145 12.8728 8.69337 13.3359 7.33203 13.334C4.02003 13.334 1.33203 10.646 1.33203 7.33398C1.33203 4.02198 4.02003 1.33398 7.33203 1.33398C10.644 1.33398 13.332 4.02198 13.332 7.33398C13.334 8.69532 12.8708 10.0165 12.0194 11.0787ZM10.682 10.584C11.5281 9.71391 12.0006 8.5476 11.9987 7.33398C11.9987 4.75532 9.91003 2.66732 7.33203 2.66732C4.75336 2.66732 2.66536 4.75532 2.66536 7.33398C2.66536 9.91198 4.75336 12.0007 7.33203 12.0007C8.54565 12.0026 9.71196 11.5301 10.582 10.684L10.682 10.584Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
              </form>
              <div className="mt-10">
                <p className="text-center">No search results</p>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
