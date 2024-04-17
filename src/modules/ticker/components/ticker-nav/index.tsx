import { HTMLAttributes } from "react";

export interface TickerNavProps
  extends Omit<HTMLAttributes<HTMLElement>, "children"> {
  ticker: string;
}

export * from "./desktop-ticker-nav";
export * from "./mobile-ticker-nav";
