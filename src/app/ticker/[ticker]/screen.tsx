"use client";

import SearchTickerLayout from "@/features/ticker/layouts/search-ticker-layout";

interface SearchTickerScreenProps {
  ticker: string;
}

export default function SearchTickerScreen(props: SearchTickerScreenProps) {
  const { ticker } = props;

  return <SearchTickerLayout isLoading={false} data={null} />;
}
