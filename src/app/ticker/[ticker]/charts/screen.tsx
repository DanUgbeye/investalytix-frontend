"use client";

import useTheme from "@/store/theme/useTheme";
import { useEffect, useRef } from "react";

interface ChartsScreenProps {
  ticker: string;
}

export default function ChartsScreen(props: ChartsScreenProps) {
  const { ticker } = props;

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
          "symbol": "${ticker}",
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
  }, [theme, ticker]);

  return (
    <div
      className=" relative h-[calc(100vh_-_176px)] w-full overflow-hidden py-10"
      ref={container}
    />
  );

}
