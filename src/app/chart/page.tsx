"use client";
import { Container } from "@/components/container";
import { Time, createChart } from "lightweight-charts";
import { memo, useEffect, useRef } from "react";
import chartData from "@/mock/chart";
import useTheme from "@/store/theme/useTheme";

function ChartPage() {
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

  return (
    <div
      className=" relative h-[calc(100vh_-_176px)] w-full overflow-hidden"
      ref={container}
    >

      
      {/* <div
        className="tradingview-widget-container__widget"
        style={{ height: "calc(100% - 32px)", width: "100%" }}
      ></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div> */}
    </div>
  );
}

export default ChartPage;
