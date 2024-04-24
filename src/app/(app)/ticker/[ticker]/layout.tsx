import { PropsWithChildren } from "react";
import "swiper/css";
import TickerLayout from "./ticker-layout";

export interface TickerLayoutProps extends PropsWithChildren {
  params: {
    ticker: string;
  };
}

export default function Layout(props: TickerLayoutProps) {
  const {
    params: { ticker },
    children,
  } = props;

  return <TickerLayout ticker={ticker}>{children}</TickerLayout>;
}
