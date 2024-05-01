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

function ChartPage() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | undefined>(
    "watchlist"
  );
  const container = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

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
          "support_host": "https://www.tradingview.com"
        }`;
    ref.appendChild(script);
  }, [theme]);

  const updateActiveSection = (section?: string) => setActiveSection(section);

  const toggleOpen = () => setOpen((s) => !s);

  // const toggle

  return (
    <div
      className={`grid ${open ? "lg:grid-cols-[1fr,350px]" : "lg:grid-cols-[1fr,max-content]"}`}
    >
      <div
        className=" relative h-[calc(100vh_-_144px)] w-full overflow-hidden md:h-[calc(100vh_-_148px)]"
        ref={container}
      ></div>

      <div
        className={`grid w-full ${open ? "grid-cols-[1fr,max-content]" : ""}`}
      >
        {open && (
          <div className="grid w-full grid-rows-[auto,1fr] gap-2 overflow-hidden border-l border-l-black px-2 pt-2 max-lg:hidden dark:border-l-white/10">
            <h1 className="text-lg font-semibold capitalize">my list</h1>

            <Tab.Group>
              <div className="grid grid-rows-[auto,1fr] overflow-hidden">
                <Tab.List className={"grid grid-cols-2 gap-5"}>
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
                </Tab.List>
                <Tab.Panels className={"relative overflow-hidden"}>
                  {/* portfolio */}
                  <Tab.Panel
                    className={
                      "items-top flex justify-center overflow-auto pt-20"
                    }
                  >
                    <FiLock className="size-20 opacity-30" />
                  </Tab.Panel>
                  {/* watchlist */}
                  <Tab.Panel className={"absolute inset-0 overflow-auto pt-2"}>
                    <Quotes />
                  </Tab.Panel>
                </Tab.Panels>
              </div>
            </Tab.Group>
          </div>
        )}

        <div
          className={`flex flex-col gap-4 p-2 ${open ? "border-l border-l-white/20" : ""}`}
        >
          <button className="rounded border p-2" onClick={toggleOpen}>
            <CiViewList className="size-7" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChartPage;
