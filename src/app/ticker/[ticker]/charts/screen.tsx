"use client";

import { Container } from "@/components/container";
import SearchTickerLayout from "@/features/ticker/layouts/search-ticker-layout";

interface ChartsScreenProps {
  ticker: string;
}

export default function ChartsScreen(props: ChartsScreenProps) {
  const { ticker } = props;

  return (
    <SearchTickerLayout ticker={ticker} isLoading={false} data={{} as any}>
      <Container className="  "></Container>
    </SearchTickerLayout>
  );
}
