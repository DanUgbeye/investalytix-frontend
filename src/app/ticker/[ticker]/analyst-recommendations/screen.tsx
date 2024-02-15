"use client";

import { Container } from "@/components/container";
import { APPLE_PROFILE } from "@/features/ticker/data/sample/apple-ticker";
import SearchTickerLayout from "@/features/ticker/layouts/search-ticker-layout";

interface AnalystRecommendationScreenProps {
  ticker: string;
}

export default function AnalystRecommendationScreen(
  props: AnalystRecommendationScreenProps
) {
  const { ticker } = props;

  return (
    <SearchTickerLayout ticker={ticker} isLoading={false} data={{} as any}>
      <Container className="  "></Container>
    </SearchTickerLayout>
  );
}
