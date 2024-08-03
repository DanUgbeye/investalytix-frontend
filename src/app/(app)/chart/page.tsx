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
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import quotes from "@/mock/quotes";
import { useMediaQuery } from "react-responsive";

function ChartPage() {
  const [open, setOpen] = useState(false);
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

  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

  const updateActiveSection = (section?: string) => setActiveSection(section);

  const toggleOpen = () => setOpen((s) => !s);

  // const toggle
  return (
    <div className={`grid grid-cols-[1fr,max-content]`}>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={80} minSize={20}>
          <div
            className="relative h-[calc(100vh_-_144px)] w-full overflow-hidden md:h-[calc(100vh_-_88px)]"
            ref={container}
          ></div>
        </ResizablePanel>
        <ResizableHandle withHandle={open} disabled={!open} />

        {open && (
          <ResizablePanel
            defaultSize={isMobile ? 80 : 20}
            minSize={isMobile ? 50 : 20}
          >
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={50} minSize={20}>
                <ScrollArea className="h-full">
                  <h1 className="p-1 text-lg font-semibold capitalize">
                    my list
                  </h1>

                  <Tab.Group>
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

                    <Tab.Panels>
                      {/* watchlist */}
                      <Tab.Panel>
                        <Quotes
                        // notifications
                        />
                      </Tab.Panel>

                      {/* portfolio */}
                      <Tab.Panel
                        className={
                          "items-top flex justify-center overflow-auto pt-20"
                        }
                      >
                        <FiLock className="size-20 opacity-30" />
                      </Tab.Panel>
                    </Tab.Panels>
                  </Tab.Group>

                  <ScrollBar orientation="vertical" />
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={50} minSize={20}>
                <ScrollArea className="h-full pl-1 pr-3">
                  <MarketInfo />

                  <h2 className="mb-3 mt-6 text-xl font-bold">Key Stats</h2>
                  <div className="flex items-center justify-between gap-3 py-1">
                    <p>Earnings Date</p>
                    <p className="font-bold text-right">Aug 01, 2024</p>
                  </div>
                  <div className="flex items-center justify-between gap-3 py-1">
                    <p>Volume</p>
                    <p className="font-bold text-right">65.88M</p>
                  </div>
                  <div className="flex items-center justify-between gap-3 py-1">
                    <p>Average Volume</p>
                    <p className="font-bold text-right">68.35M</p>
                  </div>
                  <div className="flex items-center justify-between gap-3 py-1">
                    <p>Market Cap</p>
                    <p className="font-bold text-right">$3.44T</p>
                  </div>
                  <div className="flex items-center justify-between gap-3 py-1">
                    <p>PE Ratio</p>
                    <p className="font-bold text-right">34.86</p>
                  </div>
                </ScrollArea>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        )}
      </ResizablePanelGroup>
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
  );
}

export default ChartPage;

function MarketInfo() {
  return (
    <div className="border-t pb-5 pt-3">
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
