import { Metadata } from "next";
import React from "react";
import NewsScreen from "./screen";
import { SearchTickerPageProps } from "../page";

export const metadata: Metadata = {
  title: "Investalytix",
};

interface NewsPageProps extends SearchTickerPageProps {}

function NewsPage(props: NewsPageProps) {
  const {
    params: { ticker },
  } = props;

  metadata.title = `${ticker} News | Investalytix`;

  return <NewsScreen ticker={ticker} />;
}

export default NewsPage;
