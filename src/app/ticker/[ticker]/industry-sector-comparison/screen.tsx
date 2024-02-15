"use client";

import { Container } from "@/components/container";
import SearchTickerLayout from "@/features/ticker/layouts/search-ticker-layout";

interface IndustrySectorComparisonScreenProps {
  ticker: string;
}

export default function IndustrySectorComparisonScreen(
  props: IndustrySectorComparisonScreenProps
) {
  const { ticker } = props;

  return (
    <SearchTickerLayout ticker={ticker} isLoading={false} data={{} as any}>
      <Container className="  "></Container>
    </SearchTickerLayout>
  );
}
