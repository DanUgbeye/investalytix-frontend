import { Metadata } from "next";
import React from "react";
import ChartsScreen from "./screen";
import { SearchTickerPageProps } from "../page";

export const metadata: Metadata = {
  title: "Investalytix",
};

interface ChartsPageProps extends SearchTickerPageProps {}

function ChartsPage(props: ChartsPageProps) {
  const {
    params: { ticker },
  } = props;

  metadata.title = `${ticker} Charts | Investalytix`;

  return <ChartsScreen ticker={ticker} />;
}

export default ChartsPage;
