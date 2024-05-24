"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import PAGES from "@/data/page-map";
import useInput from "@/hooks/useInput";
import { cn } from "@/lib/utils";
import useLogout from "@/modules/auth/hooks/use-logout.hook";
import useAuthStore from "@/modules/auth/store";
import { useTickerRepository } from "@/modules/ticker/hooks";
import tickerUtils from "@/modules/ticker/utils";
import useTheme from "@/store/theme/useTheme";
import { SearchResult } from "@/types";
import { Dialog, Menu } from "@headlessui/react";
import { useDebouncedCallback } from "@mantine/hooks";
import { BellRing, CircleUser, LogOut, Settings, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { FormEvent, useRef, useState } from "react";
import {
  FiArrowLeft,
  FiChevronRight,
  FiMoon,
  FiSearch,
  FiSun,
  FiX,
} from "react-icons/fi";
import { Container } from "../container";
import Spinner from "../spinner";
import { Button } from "./button";
import { Separator } from "./separator";

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
      // {
      //   label: "Analyst Recommendation",
      //   href: "/recommendation",
      // },
      {
        label: "Economic Calendar",
        href: "/economic-calendar",
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
    href: "/about-us",
  },
];

export default function NavBar() {
  const { toggleTheme, theme } = useTheme();
  const path = usePathname();
  const user = useAuthStore(({ user }) => user);
  const logout = useLogout();

  function handleLogout() {
    logout().catch((err) => {});
  }

  return (
    <nav
      className={cn("sticky top-0 z-50 bg-black py-3 ", {
        "  dark:border-b dark:border-main-gray-600 ": path !== "/",
      })}
    >
      <Container className=" max-w-[110rem] sm:px-6 xl:px-6 ">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center justify-center gap-5">
            <MobileMenu />

            <Link href={PAGES.HOME}>
              <Image
                src="/assets/logo/logo-with-text.svg"
                alt="Logo"
                height={25}
                width={170}
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
                          <NavigationMenuTrigger className="rounded-full !bg-transparent text-white hover:text-primary-base focus:text-primary-base data-[active]:text-primary-base data-[state=open]:text-primary-base dark:text-main-gray-300 dark:data-[active]:text-primary-light dark:data-[state=open]:text-primary-light">
                            {route.label}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent className="w-full !border-0 bg-white p-0 dark:bg-[#191919]">
                            <div className=" flex w-max min-w-52 flex-col">
                              {route.children.map((childRoute, index) => {
                                return (
                                  <Link
                                    key={`${childRoute.href}-${index}`}
                                    href={childRoute.href}
                                    className={
                                      "grid w-full min-w-fit px-4 py-3 font-medium hover:text-primary-base dark:text-main-gray-300 dark:hover:text-primary-light"
                                    }
                                  >
                                    {childRoute.label}
                                  </Link>
                                );
                              })}
                            </div>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <Link href={route.href} legacyBehavior passHref>
                          <NavigationMenuLink
                            className={cn(
                              navigationMenuTriggerStyle(),
                              "rounded-full !bg-transparent text-white hover:text-primary-base focus:text-primary-base data-[active]:text-primary-base  data-[state=open]:text-primary-base dark:text-main-gray-300 dark:hover:text-primary-light dark:data-[active]:text-primary-light dark:data-[state=open]:text-primary-light"
                            )}
                          >
                            {route.label}
                          </NavigationMenuLink>
                        </Link>
                      )}
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              );
            })}
          </div>

          <div className="flex items-center gap-x-2">
            <Search />

            <button
              title="theme"
              className=" inline-block rounded-full p-2 font-bold text-white dark:text-main-gray-300"
              onClick={toggleTheme}
            >
              {theme === "light" ? (
                <FiMoon className="size-5 xl:size-4" />
              ) : (
                <FiSun className="size-5 xl:size-4" />
              )}
            </button>

            {user !== undefined ? (
              <>
                {/* <Link
                  href={PAGES.WATCHLIST}
                  className="hidden cursor-pointer rounded bg-transparent px-2 py-2 font-medium text-white hover:text-primary-base md:block dark:text-main-gray-300 dark:hover:text-primary-light"
                >
                  Watchlist
                </Link> */}

                <Popover>
                  <PopoverTrigger>
                    <Avatar className=" size-10 bg-transparent text-sm text-white dark:bg-transparent dark:text-main-gray-300 ">
                      <AvatarFallback className=" bg-transparent dark:bg-transparent ">
                        <CircleUser className=" size-7 stroke-[1.5] " />
                      </AvatarFallback>
                    </Avatar>
                  </PopoverTrigger>

                  <PopoverContent className=" mr-4 mt-2 flex max-w-[12rem] flex-col p-2 dark:bg-main-gray-800 ">
                    <div className=" w-full ">
                      <Link
                        title="Watchlist"
                        href={PAGES.WATCHLIST}
                        className=" grid w-full grid-cols-[1.5rem,1fr] items-center gap-x-1 rounded bg-transparent p-2 text-sm font-medium hover:text-primary-base dark:text-main-gray-300 dark:hover:text-primary-light"
                      >
                        <BellRing className=" size-5 stroke-[1.5] " />
                        <span className="  "> Watchlist</span>
                      </Link>

                      <Link
                        title="Profile"
                        href={PAGES.PROFILE}
                        className=" grid w-full grid-cols-[1.5rem,1fr] items-center gap-x-1 rounded bg-transparent p-2 text-sm font-medium hover:text-primary-base dark:text-main-gray-300 dark:hover:text-primary-light"
                      >
                        <CircleUser className=" size-5 stroke-[1.5] " />
                        <span className="  "> Profile</span>
                      </Link>

                      <Link
                        title="Settings"
                        href={PAGES.SETTINGS}
                        className=" grid w-full grid-cols-[1.5rem,1fr] items-center gap-x-1 rounded bg-transparent p-2 text-sm font-medium hover:text-primary-base dark:text-main-gray-300 dark:hover:text-primary-light"
                      >
                        <Settings className=" size-5 stroke-[1.5] " />
                        <span className="  ">Settings</span>
                      </Link>

                      <Separator
                        orientation="horizontal"
                        className=" mt-2 bg-main-gray-400 dark:bg-main-gray-600 "
                      />

                      <Button
                        title="Logout"
                        variant={"ghost"}
                        className=" grid w-full grid-cols-[1.5rem,1fr] items-center gap-x-1 rounded bg-transparent p-2 text-left text-sm font-medium hover:bg-transparent hover:text-primary-base dark:text-main-gray-300 dark:hover:bg-transparent dark:hover:text-primary-light "
                        onClick={handleLogout}
                      >
                        <LogOut className=" size-5 stroke-[1.5] " />
                        <span className="  ">Logout</span>
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>
              </>
            ) : (
              <>
                <Link
                  href={PAGES.LOGIN}
                  className="hidden cursor-pointer rounded bg-transparent px-4 py-2 font-medium text-white hover:text-primary-base md:block dark:hover:text-primary-light"
                >
                  Login
                </Link>

                <Link
                  href={PAGES.SIGNUP}
                  className="hidden cursor-pointer rounded bg-[#FB8B1E] px-4 py-2 font-medium text-white md:block"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
}

type NavLinkProps = {
  route: RouteLink;
  className?: string;
};

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ route, className = "" }, ref) => {
    return (
      <Link ref={ref} className={className} href={route.href}>
        {route.label}
      </Link>
    );
  }
);
NavLink.displayName = "NavLink";

function MobileMenu() {
  const [history, setHistory] = useState<RouteLink[]>([]);
  const user = useAuthStore(({ user }) => user);

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
        <Menu.Button className="">
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

        <Menu.Items className="fixed z-20 overflow-hidden rounded-lg bg-white shadow-md max-sm:inset-y-0 max-sm:left-0 max-sm:w-full max-sm:max-w-sm sm:absolute sm:translate-y-4 dark:bg-[#191919]">
          <div className="flex min-w-[300px] flex-col bg-white dark:bg-[#191919]">
            {history.length === 0 ? (
              <div className="flex flex-col bg-white dark:bg-[#191919] ">
                <div className="flex items-center justify-end gap-10 border-b sm:hidden">
                  <Menu.Button
                    onClick={resetHistory}
                    className={
                      " grid size-12 place-items-center duration-300 hover:text-primary-light "
                    }
                  >
                    <FiX className="size-5" />
                  </Menu.Button>
                </div>

                <div className="">
                  {routes.map((route) => {
                    return route.children ? (
                      <button
                        key={route.label}
                        className={`flex w-full items-center justify-between gap-10 whitespace-nowrap px-4 py-4 text-sm font-bold uppercase text-black outline-none duration-150 hover:text-primary-base dark:text-main-gray-300 dark:hover:text-primary-light`}
                        onClick={() => addHistory(route)}
                      >
                        {route.label}
                        <FiChevronRight className=" size-5 " />
                      </button>
                    ) : (
                      <Menu.Item key={route.label}>
                        {({ active }) => (
                          <NavLink
                            route={route}
                            className={`inline-block w-full whitespace-nowrap px-4 py-4 text-sm font-bold uppercase text-black outline-none duration-150 hover:text-primary-base dark:text-white/80 dark:hover:text-primary-light`}
                          />
                        )}
                      </Menu.Item>
                    );
                  })}

                  <div className="flex flex-col space-y-2 pb-4 md:hidden ">
                    {user !== undefined ? (
                      <></>
                    ) : (
                      <>
                        <Link
                          href="/login"
                          className="mx-4 block cursor-pointer rounded bg-transparent px-4 py-3 text-center font-bold duration-300 hover:text-primary-base focus:text-primary-base  dark:hover:text-primary-light"
                        >
                          Login
                        </Link>

                        <Link
                          href="/signup"
                          className="mx-4 block cursor-pointer rounded bg-primary-base px-4 py-3 text-center font-bold text-white duration-300 hover:bg-primary-base/90 "
                        >
                          Sign Up
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <>
                {/* header */}
                <div className="flex items-center justify-between gap-10 border-b ">
                  <button
                    onClick={deleteHistory}
                    className=" grid size-12 place-items-center duration-300 hover:text-primary-base dark:hover:text-primary-light"
                  >
                    <FiArrowLeft className="size-5" />
                  </button>

                  <p className="whitespace-nowrap text-sm font-bold uppercase outline-none">
                    {lastHistory().label}
                  </p>

                  <Menu.Button
                    onClick={resetHistory}
                    className={
                      "grid size-12 place-items-center duration-300 hover:text-primary-base dark:hover:text-primary-light"
                    }
                  >
                    <FiX className="size-5" />
                  </Menu.Button>
                </div>

                {/* links */}
                <div className="flex flex-col py-2 ">
                  {(lastHistory().children ?? []).map((route) => (
                    <div key={route.label}>
                      {route.children ? (
                        <button
                          className="flex w-full items-center justify-between gap-10 whitespace-nowrap px-4 py-4 text-sm font-bold uppercase text-black outline-none duration-150 hover:text-primary-base dark:text-white dark:hover:text-primary-light"
                          onClick={() => addHistory(route)}
                        >
                          {route.label}
                          <FiChevronRight className="size-5" />
                        </button>
                      ) : (
                        <Menu.Item>
                          <NavLink
                            route={route}
                            className="inline-block w-full whitespace-nowrap px-4 py-4 text-sm font-bold uppercase text-black outline-none duration-150 hover:text-primary-base dark:text-white/80 dark:hover:text-primary-light"
                          />
                        </Menu.Item>
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
  const [query, { onChange, ...queryOpts }, setQuery] = useInput("");
  const router = useRouter();
  const tickerRepo = useTickerRepository();
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const searchAbortController = useRef<AbortController | undefined>(undefined);

  const handleSearch = useDebouncedCallback(async function (value: string) {
    setSearchLoading(true);
    try {
      setSearchResults(
        await tickerRepo.search(value, {
          signal: searchAbortController.current?.signal,
        })
      );
    } catch (error: any) {
    } finally {
      setSearchLoading(false);
    }
  }, 300);

  function handleQueryChange(e: React.ChangeEvent<HTMLInputElement>) {
    let searchQuery = e.target.value;
    setQuery(searchQuery);

    if (searchAbortController.current) {
      searchAbortController.current.abort();
      searchAbortController.current = new AbortController();
    } else {
      searchAbortController.current = new AbortController();
    }

    if (searchQuery) {
      handleSearch(searchQuery);
    } else {
      setSearchResults([]);
    }
  }

  function handleResetQuery(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    setQuery("");
    setSearchResults([]);

    if (searchAbortController.current) {
      searchAbortController.current.abort();
      searchAbortController.current = new AbortController();
    }
  }

  const toggleIsOpen = () => setIsOpen((s) => !s);

  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (searchResults.length < 0) {
      return router.push(`${PAGES.TICKER}/${query}`);
    }

    router.push(`${PAGES.TICKER}/${searchResults[0].symbol}`);
  }

  return (
    <>
      <button
        title="Search"
        className="grid place-content-center overflow-hidden rounded-full p-2"
        onClick={toggleIsOpen}
      >
        <FiSearch className="size-5 text-white xl:size-4 dark:text-main-gray-300" />
      </button>

      <Dialog open={isOpen} onClose={toggleIsOpen} className="relative z-50">
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div
          aria-hidden="true"
          className="fixed inset-0 bg-black/20 backdrop-blur-sm"
        />

        {/* Full-screen scrollable container */}
        <div className="fixed inset-0 mt-[84px] flex w-screen items-start justify-center overflow-hidden md:mt-[20vh]">
          {/* The actual dialog panel  */}
          {/* Container to center the panel */}
          <div className="max-h-[80vh] w-[100dvw] max-w-screen-md overflow-auto bg-white md:w-[70dvw] md:rounded-xl dark:border dark:border-white/20 dark:bg-black ">
            <Dialog.Panel className="grid h-fit max-h-[min(calc(100dvh-10rem),30rem)] w-full grid-rows-[auto,1fr,0.5rem] ">
              <form
                className="flex flex-col gap-5 px-5 py-5"
                onSubmit={submitHandler}
              >
                <div className="relative h-fit">
                  <input
                    name="search"
                    id="search"
                    type="text"
                    {...queryOpts}
                    onChange={handleQueryChange}
                    autoComplete="off"
                    placeholder="Search for ticker, quotes & videos"
                    className="w-full rounded-full border-2 border-black px-6 py-3 text-sm font-medium text-black placeholder:text-main-gray-400 focus:outline-none dark:border dark:border-white/20 dark:bg-transparent dark:text-white/80 dark:placeholder:text-main-gray-700 dark:focus:border-white/50"
                  />

                  {query && (
                    <button
                      type="button"
                      className="place-items-centers absolute right-5 top-1/2 grid -translate-y-1/2 dark:bg-transparent  "
                      onClick={handleResetQuery}
                    >
                      <X className=" size-4 " />
                    </button>
                  )}
                </div>
              </form>

              <div className=" h-full overflow-y-auto px-2 pb-10 ">
                {searchLoading ? (
                  <>
                    <center>
                      <Spinner className=" " />
                    </center>
                  </>
                ) : (
                  <>
                    {searchResults.length > 0 ? (
                      <>
                        <section className="  ">
                          <table className=" w-full overflow-x-clip ">
                            <tbody>
                              {searchResults
                                .slice(0, 50)
                                .map((searchResult, index) => {
                                  return (
                                    <tr
                                      key={`${searchResult.name}-${index}`}
                                      className=" cursor-pointer rounded-lg text-sm duration-300 hover:bg-main-gray-200 dark:hover:bg-main-gray-900 "
                                      onClick={() => {
                                        router.push(
                                          `${PAGES.TICKER}/${searchResult.symbol}`
                                        );
                                      }}
                                    >
                                      <td className=" max-w-[10rem] py-2 pl-2 pr-4 ">
                                        <div className=" flex items-center gap-x-3 ">
                                          <Avatar className=" rounded-none text-xxs ">
                                            <AvatarImage
                                              crossOrigin="anonymous"
                                              className=" rounded-none "
                                              src={tickerUtils.getTickerLogoUrl(
                                                searchResult.symbol
                                              )}
                                            />

                                            <AvatarFallback className=" ">
                                              {searchResult.symbol.slice(0, 6)}
                                            </AvatarFallback>
                                          </Avatar>

                                          <span className=" grid truncate">
                                            {searchResult.symbol}
                                          </span>
                                        </div>
                                      </td>

                                      <td className=" px-4 py-2 ">
                                        {searchResult.name}
                                      </td>

                                      <td className=" hidden px-4 py-2 text-right sm:table-cell ">
                                        {searchResult.exchangeShortName}
                                      </td>
                                    </tr>
                                  );
                                })}
                            </tbody>
                          </table>
                        </section>
                      </>
                    ) : (
                      <>
                        <p className="text-center">No search results</p>
                      </>
                    )}
                  </>
                )}
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  );
}