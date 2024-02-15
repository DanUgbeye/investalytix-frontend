"use client";

import { Container } from "@/components/container";
import { APPLE_PROFILE } from "@/features/ticker/data/sample/apple-ticker";
import SearchTickerLayout from "@/features/ticker/layouts/search-ticker-layout";

interface StockDescriptionScreenProps {
  ticker: string;
}

export default function StockDescriptionScreen(
  props: StockDescriptionScreenProps
) {
  const { ticker } = props;

  return (
    <SearchTickerLayout ticker={ticker} isLoading={false} data={{} as any}>
      <Container className="  "></Container>
    </SearchTickerLayout>
  );
}
