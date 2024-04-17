import SearchTickerLayout from "@/modules/ticker/layouts/search-ticker-layout";
import { PropsWithChildren } from "react";
import "swiper/css";

export interface TickerLayoutProps extends PropsWithChildren {
  params: {
    ticker: string;
  };
}

export default function TickerLayout(props: TickerLayoutProps) {
  const {
    params: { ticker },
    children,
  } = props;

  return <SearchTickerLayout ticker={ticker}>{children}</SearchTickerLayout>;
}
