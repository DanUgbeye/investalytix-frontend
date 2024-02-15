"use client";

import { Container } from "@/components/container";
import SearchTickerLayout from "@/features/ticker/layouts/search-ticker-layout";

interface NewsScreenProps {
  ticker: string;
}

export default function NewsScreen(props: NewsScreenProps) {
  const { ticker } = props;

  return (
    <SearchTickerLayout ticker={ticker} isLoading={false} data={{} as any}>
      <Container className="  "></Container>
    </SearchTickerLayout>
  );
}
