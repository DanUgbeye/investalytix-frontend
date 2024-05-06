"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import PAGES from "@/data/page-map";
import { cn } from "@/lib/utils";
import useTheme from "@/store/theme/useTheme";
import { Dialog, Menu } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { AnchorHTMLAttributes, FormEvent, useState } from "react";
import {
  FiArrowLeft,
  FiChevronRight,
  FiMoon,
  FiSearch,
  FiSun,
  FiX,
} from "react-icons/fi";
import { Container } from "../container";
import { useRouter } from "next/navigation";
import useInput from "@/hooks/useInput";

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
  // {
  //   label: "ABOUT US",
  //   href: "",
  // },
];

export default function NavBar() {
  const { toggleTheme, theme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 bg-black py-3 border-b border-main-gray-900 ">
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
                          <NavigationMenuTrigger className="rounded-full !bg-transparent text-white hover:text-primary-base focus:text-primary-base data-[active]:text-primary-base data-[state=open]:text-primary-base dark:data-[active]:text-primary-light dark:data-[state=open]:text-primary-light">
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
                                      "grid w-full min-w-fit px-4 py-3 font-medium hover:text-primary-base dark:text-white dark:hover:text-primary-light"
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
                              "rounded-full !bg-transparent text-white hover:text-primary-base focus:text-primary-base  data-[active]:text-primary-base data-[state=open]:text-primary-base dark:hover:text-primary-light dark:data-[active]:text-primary-light dark:data-[state=open]:text-primary-light"
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
              className=" inline-block rounded-full p-2 font-bold text-white"
              onClick={toggleTheme}
            >
              {theme === "light" ? (
                <FiMoon className="size-5 xl:size-4" />
              ) : (
                <FiSun className="size-5 xl:size-4" />
              )}
            </button>

            <Link
              href={PAGES.LOGIN}
              className="hidden cursor-pointer rounded bg-transparent px-8 py-2 font-bold text-white hover:text-primary-base md:block dark:hover:text-primary-light"
            >
              Login
            </Link>

            <Link
              href={PAGES.SIGNUP}
              className="hidden cursor-pointer rounded bg-[#FB8B1E] px-8 py-2 font-bold text-white md:block"
            >
              Sign Up
            </Link>
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
        <Menu.Button className="px-2">
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

        <Menu.Items className="fixed z-20 overflow-hidden rounded-lg bg-white max-sm:inset-y-0 max-sm:left-0 max-sm:w-full max-sm:max-w-sm sm:absolute sm:translate-y-4 dark:bg-[#191919]">
          <div className="flex min-w-[300px] flex-col bg-white dark:bg-[#191919]">
            {history.length === 0 ? (
              <div className="flex flex-col bg-white dark:bg-[#191919] ">
                <div className="flex items-center justify-end gap-10 border-b sm:hidden">
                  <Menu.Button
                    onClick={resetHistory}
                    className={
                      " grid size-12 place-items-center duration-300 hover:bg-gray-100 dark:hover:bg-gray-500 "
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
                        className={`flex w-full items-center justify-between gap-10 whitespace-nowrap px-4 py-4 text-sm font-bold uppercase text-black outline-none duration-150 hover:text-primary-base dark:text-white dark:hover:text-primary-light`}
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
  const [query, queryOpts] = useInput("");
  const router = useRouter();

  const toggleIsOpen = () => setIsOpen((s) => !s);

  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push(`/ticker/${query}`);
  }
  return (
    <>
      <button
        title="Search"
        className="grid place-content-center overflow-hidden rounded-full p-2"
        onClick={toggleIsOpen}
      >
        <FiSearch className="size-5 text-white xl:size-4" />
      </button>
      <Dialog open={isOpen} onClose={toggleIsOpen} className="relative z-50">
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm"
          aria-hidden="true"
        />

        {/* Full-screen scrollable container */}
        <div className="fixed inset-0 mt-[20vh] flex w-screen items-start justify-center overflow-hidden">
          {/* The actual dialog panel  */}
          {/* Container to center the panel */}
          <div className="max-h-[80vh] w-[80vw] max-w-screen-md overflow-auto rounded bg-white md:w-[70vw] dark:border dark:border-white/20 dark:bg-black">
            <Dialog.Panel className="w-full p-10">
              <form className="flex flex-col gap-5" onSubmit={submitHandler}>
                <div className="relative h-fit">
                  <input
                    type="search"
                    name="search"
                    id="search"
                    {...queryOpts}
                    placeholder="Search for ticker, quotes & videos"
                    className="w-full rounded-full border-2 border-black px-6 py-3 text-sm font-medium text-black placeholder:text-black focus:outline-none dark:border dark:border-white/20 dark:bg-black dark:text-white/80 dark:placeholder:text-white/50 dark:focus:border-white/50"
                  />
                  <div className="absolute bottom-4 right-0 top-4 grid -translate-x-1/2 place-content-center bg-white pl-6 dark:bg-transparent">
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
