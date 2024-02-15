"use client";

import { Container } from "@/components/container";
import SearchTickerLayout from "@/features/ticker/layouts/search-ticker-layout";

interface SearchTickerScreenProps {
  ticker: string;
}

export default function SearchTickerScreen(props: SearchTickerScreenProps) {
  const { ticker } = props;

  return (
    <SearchTickerLayout ticker={ticker} isLoading={false} data={undefined}>
      <Container className="  "></Container>
    </SearchTickerLayout>
  );
}
