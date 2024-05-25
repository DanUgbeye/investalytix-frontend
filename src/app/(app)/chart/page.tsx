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
          "hide_side_toolbar": false,
          "support_host": "https://www.tradingview.com",
          
  "studies": [
    "STD;24h%Volume",
    "STD;Accumulation_Distribution",
    "STD;Advance%1Decline%1Line",
    "STD;Advance%1Decline%1Ratio",
    "STD;Advance_Decline_Ratio_Bars",
    "STD;Arnaud%1Legoux%1Moving%1Average",
    "STD;Aroon",
    "STD;Average%Day%Range",
    "STD;Average%1Directional%1Index",
    "STD;Average_True_Range",
    "STD;Awesome_Oscillator",
    "STD;Balance%1of%1Power",
    "STD;BBTrend",
    "STD;Bollinger_Bands",
    "STD;Bollinger_Bands_B",
    "STD;Bollinger_Bands_Width",
    "STD;Bull%Bear%Power",
    "STD;Chaikin_Money_Flow",
    "STD;Chaikin_Oscillator",
    "STD;Chande%1Kroll%1Stop",
    "STD;Chande_Momentum_Oscillator",
    "STD;Chop%1Zone",
    "STD;Choppiness_Index",
    "STD;CCI",
    "STD;Connors_RSI",
    "STD;Coppock%1Curve",
    "CorrelationCoefficient@tv-basicstudies",
    "STD;Correlation_Coeff",
    "STD;Cumulative%1Volume%1Delta",
    "STD;Cumulative%1Volume%1Index",
    "STD;DPO",
    "STD;DMI",
    "STD;Donchian_Channels",
    "STD;DEMA",
    "STD;EOM",
    "STD;EFI",
    "STD;ENV",
    "STD;Fisher_Transform",
    "STD;Gaps",
    "STD;Historical_Volatility",
    "STD;Hull%1MA",
    "STD;Ichimoku%1Cloud",
    "STD;Keltner_Channels",
    "STD;Klinger%1Oscillator",
    "STD;Know_Sure_Thing",
    "STD;Least%1Squares%1Moving%1Average",
    "STD;Linear_Regression",
    "STD;MA%1Cross",
    "STD;Mass%1Index",
    "STD;McGinley%1Dynamic",
    "STD;Median",
    "STD;Momentum",
    "STD;Money_Flow",
    "MoonPhases@tv-basicstudies",
    "STD;Moon%1Phases",
    "STD;MACD",
    "STD;EMA",
    "STD;MA%Ribbon",
    "STD;SMA",
    "STD;WMA",
    "STD;Multi-Time%Period%Charts",
    "STD;Net%1Volume",
    "STD;On_Balance_Volume",
    "STD;Open%Interest",
    "STD;PSAR",
    "STD;Pivot%1Points%1High%1Low",
    "STD;Pivot%1Points%1Standard",
    "STD;Price_Oscillator",
    "PriceVolumeTrend@tv-basicstudies",
    "STD;Price_Volume_Trend",
    "STD;ROC",
    "STD;RSI",
    "STD;Relative_Vigor_Index",
    "STD;Relative_Volatility_Index",
    "STD;Relative%1Volume%1at%1Time",
    "BookerIntradayPivots@tv-basicstudies",
    "BookerKnoxvilleDivergence@tv-basicstudies",
    "BookerMissedPivots@tv-basicstudies",
    "BookerReversal@tv-basicstudies",
    "STD;Rob%1Booker%1Ghost%1Pivots%1v2",
    "STD;Divergence%1Indicator",
    "STD;Seasonality",
    "STD;SMI_Ergodic_Indicator_Oscillator",
    "STD;SMI_Ergodic_Oscillator",
    "STD;Smoothed%1Moving%1Average",
    "STD;Stochastic",
    "STD;SMI",
    "STD;Stochastic_RSI",
    "STD;Supertrend",
    "STD;Technical%1Ratings",
    "STD;Time%1Weighted%1Average%1Price",
    "STD;TEMA",
    "STD;TRIX",
    "STD;True%1Strength%1Indicator",
    "STD;Ultimate_Oscillator",
    "STD;UP_DOWN_Volume",
    "STD;Visible%1Average%1Price",
    "STD;Volatility_Stop",
    "Volume@tv-basicstudies",
    "STD;Volume%1Delta",
    "STD;Volume%1Oscillator",
    "STD;VWAP",
    "STD;VWMA",
    "STD;Vortex%1Indicator",
    "STD;Williams_Alligator",
    "STD;Whilliams_Fractals",
    "STD;Willams_R",
    "STD;Woodies%1CCI",
    "STD;Zig_Zag"
  ],}`;
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
        className=" relative h-[calc(100vh_-_144px)] w-full overflow-hidden md:h-[calc(100vh_-_148px)]"
        ref={container}
      ></div>

      <div
        className={`grid w-full ${open ? "grid-cols-[1fr,max-content]" : ""}`}
      >
        {open && (
          <div className="grid w-full grid-rows-[auto,1fr,auto] gap-2 overflow-hidden border-l border-l-black px-2 pt-2 max-lg:hidden dark:border-l-white/10">
            <h1 className="text-lg font-semibold capitalize">my list</h1>

            <Tab.Group>
              <div className="grid grid-rows-[auto,1fr] overflow-hidden">
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
                  {/* watchlist */}
                  <Tab.Panel className={"absolute inset-0 overflow-auto pt-2"}>
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
                </Tab.Panels>
              </div>
            </Tab.Group>

            <MarketInfo />
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
      <div className="">
        <p className=" font-bold text-primary-base ">AAPL</p>
        <p className=" text-2xl font-bold ">Apple INC</p>
      </div>

      <div className=" space-y-1 py-2 ">
        <div className=" flex items-center space-x-1.5 ">
          <span className=" font-bold ">$19.88</span>
          <span className=" text-xs font-bold text-[#079516] ">
            +1.59 (+8.69%)
          </span>
        </div>

        <div className=" text-xs text-gray-400 ">
          At close: December 18 04:00 PM EST
        </div>
      </div>

      <div className=" space-y-1 bg-gray-100 p-2 dark:bg-transparent ">
        <div className=" flex items-center space-x-1.5 ">
          <span className=" font-bold ">$20.56</span>
          <span className=" text-xs font-bold text-red-500 ">
            -0.68 (-0.42%)
          </span>
        </div>

        <div className=" text-xs text-gray-400 ">
          After hours: January 12 07:59 PM EST
        </div>
      </div>
    </div>
  );
}
