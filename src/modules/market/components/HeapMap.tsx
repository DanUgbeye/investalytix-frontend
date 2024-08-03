"use client";
import { useAppStore } from "@/store";
import { useEffect, useRef, memo } from "react";

export function HeatMap() {
  const theme = useAppStore((s) => s.theme);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ref = container.current;
    if (ref === null) return;

    while (ref.firstChild) {
      ref.removeChild(ref.firstChild);
    }

    const url = window.location.origin + "/redirect";
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
         "exchanges": [],
          "dataSource": "SPX500",
          "grouping": "no_group",
          "blockSize": "number_of_employees",
          "blockColor": "change",
          "locale": "en",
          "symbolUrl": "${url}",
          "colorTheme": "${theme}",
          "hasTopBar": false,
          "isDataSetEnabled": true,
          "isZoomEnabled": true,
          "hasSymbolTooltip": true,
          "isMonoSize": false,
          "width": "100%",
          "height": "100%"
          }`;
    ref.appendChild(script);
  }, [theme]);

  return (
    <div className="h-[500px] w-full">
      <div className="tradingview-widget-container" ref={container}></div>
    </div>
  );
}