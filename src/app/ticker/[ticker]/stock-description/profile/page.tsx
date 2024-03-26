import { Metadata } from "next";
import React from "react";
import ProfileScreen from "./screen";
import { SearchTickerPageProps } from "../../page";

export const metadata: Metadata = {
  title: "Search Ticker | Investalytix",
};

interface ProfilePageProps extends SearchTickerPageProps {}

export default function ProfilePage(props: ProfilePageProps) {
  const {
    params: { ticker },
  } = props;

  metadata.title = `${ticker} Stock Description - Profile | Investalytix`;

  return <ProfileScreen ticker={ticker} />;
}
