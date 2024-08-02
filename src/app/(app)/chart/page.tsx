"use client";
import { Container } from "@/components/container";
import { Time, createChart } from "lightweight-charts";
import { Fragment, memo, useEffect, useRef, useState } from "react";
import chartData from "@/mock/chart";
import useTheme from "@/store/theme/useTheme";
import { Tab } from "@headlessui/react";
import { FiLock } from "react-icons/fi";
import Quotes from "@/modules/market/components/Quotes";
import { CiViewList } from "react-icons/ci";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useFetcher from "@/hooks/useFetcher";
import { TickerAnalystRecommendation } from "@/modules/ticker/types";
import { TickerRepository } from "@/modules/ticker/repository";
import { clientAPI } from "@/config/client/api";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

function ChartPage() {
  const [open, setOpen] = useState(true);
  const [activeSection, setActiveSection] = useState<string | undefined>(
    "watchlist"
  );
  const [ticker, setTicker] = useState("AAPL");
  const container = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const analystRatingFetcher = useFetcher<TickerAnalystRecommendation[]>();

  useEffect(() => {
    analystRatingFetcher.error && console.log(analystRatingFetcher.error);
  }, [analystRatingFetcher.error]);

  useEffect(() => {
    const ref = container.current;
    if (ref === null) return;

    while (ref.firstChild) {
      ref.removeChild(ref.firstChild);
    }
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "autosize": true,
          "symbol": "NASDAQ:AAPL",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "${theme}",
          "style": "1",
          "locale": "en",
          "enable_publishing": false,
          "allow_symbol_change": true,
          "calendar": false,
          "hide_side_toolbar": false,
           "withdateranges": true,
          "support_host": "https://www.tradingview.com",
          "studies": []
        }`;
    ref.appendChild(script);
  }, [theme]);

  const updateActiveSection = (section?: string) => setActiveSection(section);

  const toggleOpen = () => setOpen((s) => !s);

  // const toggle

  return (
    <div
      className={`grid ${open ? "lg:grid-cols-[1fr,450px]" : "lg:grid-cols-[1fr,max-content]"}`}
    >
      <div
        className="relative h-[calc(100vh_-_144px)] w-full overflow-hidden md:h-[calc(100vh_-_88px)]"
        ref={container}
      ></div>

      <div
        className={`grid w-full ${open ? "grid-cols-[1fr,max-content]" : ""}`}
      >
        {open && (
          <div className="grid w-full grid-rows-[auto,1fr] gap-2 overflow-hidden border-l border-l-black pl-2 pt-2 max-lg:hidden dark:border-l-white/10">
            <h1 className="text-lg font-semibold capitalize">my list</h1>

            <Tab.Group>
              <div className="grid grid-rows-[max-content,1fr] overflow-hidden">
                <Tab.List className={"grid grid-cols-2 gap-5"}>
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={`white-text text-hover-focus border-b-2 px-2 pb-2 text-sm outline-none ${
                          selected
                            ? "border-primary-base dark:border-primary-light"
                            : "border-transparent"
                        }`}
                      >
                        Watchlist
                      </button>
                    )}
                  </Tab>
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={`white-text text-hover-focus flex items-center justify-center gap-3 border-b-2 px-2 pb-2 text-sm outline-none ${
                          selected
                            ? "border-primary-base dark:border-primary-light"
                            : "border-transparent"
                        }`}
                      >
                        Portfolio <FiLock className="size-3" />
                      </button>
                    )}
                  </Tab>
                </Tab.List>

                <Tab.Panels className={"relative overflow-hidden"}>
                  <div className="absolute inset-0">
                    <ScrollArea className="h-full pr-3">
                      {/* watchlist */}
                      <Tab.Panel className={"pt-2"}>
                        {/* <Tab.Panel className={"absolute inset-0 overflow-auto pt-2"}> */}
                        <Quotes notifications />
                      </Tab.Panel>

                      {/* portfolio */}
                      <Tab.Panel
                        className={
                          "items-top flex justify-center overflow-auto pt-20"
                        }
                      >
                        <FiLock className="size-20 opacity-30" />
                      </Tab.Panel>

                      <MarketInfo />

                      <h2 className="mb-3 mt-6 text-xl font-bold">Key Stats</h2>
                      <div className="flex items-center justify-between gap-3 py-1">
                        <p>Earnings Date</p>
                        <p className="font-bold">Aug 01, 2024</p>
                      </div>
                      <div className="flex items-center justify-between gap-3 py-1">
                        <p>Volume</p>
                        <p className="font-bold">65.88M</p>
                      </div>
                      <div className="flex items-center justify-between gap-3 py-1">
                        <p>Average Volume</p>
                        <p className="font-bold">68.35M</p>
                      </div>
                      <div className="flex items-center justify-between gap-3 py-1">
                        <p>Market Cap</p>
                        <p className="font-bold">$3.44T</p>
                      </div>
                      <div className="flex items-center justify-between gap-3 py-1">
                        <p>PE Ratio</p>
                        <p className="font-bold">34.86</p>
                      </div>

                      <h2 className="mb-3 mt-6 text-xl font-bold">
                        Financials
                      </h2>
                      <Select value="income statement">
                        <SelectTrigger>
                          <SelectValue placeholder="Financials" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="income statement">
                            Income statement
                          </SelectItem>
                          <SelectItem value="balance sheet">
                            Balance sheet
                          </SelectItem>
                          <SelectItem value="cash flow statement">
                            Cash flow statement
                          </SelectItem>
                        </SelectContent>
                      </Select>

                      <h2 className="mb-3 mt-6 text-xl font-bold">Profile</h2>
                      <div className="flex items-center justify-between gap-3 py-1">
                        <p>Website</p>
                        <p className="font-bold">www.apple.com</p>
                      </div>
                      <div className="mb-6 flex items-center justify-between gap-3 py-1">
                        <p>Full Time Empoyees</p>
                        <p className="font-bold">150,000</p>
                      </div>
                    </ScrollArea>
                  </div>
                </Tab.Panels>
              </div>
            </Tab.Group>
          </div>
        )}

        <div
          className={`flex flex-col gap-4 border-l p-2 dark:border-l-white/20`}
        >
          <button
            title="watchlist"
            className={`group rounded border p-2 hover:border-primary-base focus:border-primary-base dark:hover:border-primary-light dark:focus:border-primary-light ${open ? "border-primary-base dark:border-primary-light" : ""}`}
            onClick={toggleOpen}
          >
            <CiViewList
              className={`size-7 group-hover:text-primary-base group-focus:text-primary-base dark:group-hover:text-primary-light dark:group-focus:text-primary-light ${open ? "text-primary-base dark:text-primary-light" : ""}`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChartPage;

function MarketInfo() {
  return (
    <div className="border-t py-5 dark:border-t-white/10">
      <div className="flex justify-between">
        <div className="">
          <p className="font-bold text-primary-base">AAPL</p>
          <p className="text-2xl font-bold">Apple INC</p>
        </div>

        <Button asChild variant="link">
          <Link href="/ticker/aapl">
            <FaExternalLinkAlt />
          </Link>
        </Button>
      </div>

      <div className="space-y-1 py-2">
        <div className="flex items-center space-x-1.5">
          <span className="font-bold">$19.88</span>
          <span className="text-xs font-bold text-[#079516]">
            +1.59 (+8.69%)
          </span>
        </div>

        <div className="text-xs text-gray-400">
          At close: December 18 04:00 PM EST
        </div>
      </div>

      <div className="space-y-1 bg-gray-100 p-2 dark:bg-transparent">
        <div className="flex items-center space-x-1.5">
          <span className="font-bold">$20.56</span>
          <span className="text-xs font-bold text-red-500">-0.68 (-0.42%)</span>
        </div>

        <div className="text-xs text-gray-400">
          After hours: January 12 07:59 PM EST
        </div>
      </div>
    </div>
  );
}
