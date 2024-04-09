"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import useTheme from "@/store/theme/useTheme";
import { Dialog, Menu } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { AnchorHTMLAttributes, useState } from "react";
import {
  FiArrowLeft,
  FiChevronRight,
  FiMoon,
  FiSun,
  FiX,
} from "react-icons/fi";
import { Container } from "../container";
import { Button } from "./button";

type RouteLink = { label: string; children?: RouteLink[]; href: string };

const routes: RouteLink[] = [
  {
    label: "PRODUCTS",
    href: "",
    children: [
      {
        label: "Chart",
        href: "/chart",
      },
      {
        label: "Analyst Recommendation",
        href: "/recommendation",
      },
      {
        label: "Economic Calendar",
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
        label: "Overview",
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
  const { toggleTheme, theme } = useTheme();

  return (
    <nav className="bg-black py-3">
      <Container>
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center justify-center gap-5">
            <MobileMenu />
            <Link href="/">
              <Image
                src="/assets/logo/logo-with-text.svg"
                alt="Logo"
                height={20}
                width={150}
              />
            </Link>
          </div>

          <div className=" z-50 hidden gap-x-2 xl:flex ">
            {routes.map((route, index) => {
              return (
                <NavigationMenu key={`${route.href}-${index}`}>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      {route.children ? (
                        <>
                          <NavigationMenuTrigger className=" rounded-full bg-transparent text-white hover:bg-gray-700/50 hover:text-white focus:bg-gray-700/50 focus:text-white data-[active]:bg-gray-700/50 data-[state=open]:bg-gray-700/50 ">
                            {route.label}
                          </NavigationMenuTrigger>

                          <NavigationMenuContent className=" w-full p-0 dark:bg-gray-800 ">
                            <div className=" flex w-max min-w-52 flex-col py-2 ">
                              {route.children.map((childRoute, index) => {
                                if (childRoute.href) {
                                  return (
                                    <Link
                                      key={`${childRoute.href}-${index}`}
                                      href={childRoute.href}
                                      className={
                                        " grid w-full min-w-fit px-4 py-3 hover:bg-gray-200 "
                                      }
                                    >
                                      {childRoute.label}
                                    </Link>
                                  );
                                }

                                return (
                                  <Button
                                    key={`${childRoute.href}-${index}`}
                                    variant={"ghost"}
                                    className={
                                      " grid w-full min-w-fit px-4 py-3 hover:bg-gray-200 "
                                    }
                                  >
                                    {childRoute.label}
                                  </Button>
                                );
                              })}
                            </div>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <>
                          {route.href ? (
                            <Link href={route.href} legacyBehavior passHref>
                              <NavigationMenuLink
                                className={cn(
                                  navigationMenuTriggerStyle(),
                                  " rounded-full bg-transparent text-white hover:bg-gray-700/50 hover:text-white focus:bg-gray-700/50 focus:text-white "
                                )}
                              >
                                {route.label}
                              </NavigationMenuLink>
                            </Link>
                          ) : (
                            <Button
                              variant={"ghost"}
                              className={cn(
                                navigationMenuTriggerStyle(),
                                " rounded-full bg-transparent text-white hover:bg-gray-700/50 hover:text-white focus:bg-gray-700/50 focus:text-white "
                              )}
                            >
                              {route.label}
                            </Button>
                          )}
                        </>
                      )}
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              );
            })}

            {/* {routes.map((route) => {
              return (
                <div key={route.label}>
                  {route.children ? (
                    <NavSection section={route} />
                  ) : (
                    <NavLink
                      route={route}
                      className="focus:bg-primary-/10 inline-block rounded-full px-4 py-1 text-sm font-bold uppercase text-white outline-none hover:bg-primary-base/10"
                    />
                  )}
                </div>
              );
            })} */}
          </div>

          <div className="flex items-center">
            <Search />

            <button
              title="theme"
              className="ml-6 inline-block rounded-full p-2 font-bold text-white"
              onClick={toggleTheme}
            >
              {theme === "light" ? <FiMoon /> : <FiSun />}
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
        className={`inline-block rounded-full px-4 py-1 text-sm font-bold uppercase text-white outline-none hover:bg-primary-base/10`}
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
                    <FiArrowLeft className="text-black" />
                  </button>
                  <p className="whitespace-nowrap text-sm font-bold uppercase text-black outline-none">
                    {lastHistory().label}
                  </p>
                  <Menu.Button onClick={resetHistory}>
                    <FiX className="text-black" />
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
        title="Search"
        className="grid place-content-center overflow-hidden rounded-full p-2"
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
