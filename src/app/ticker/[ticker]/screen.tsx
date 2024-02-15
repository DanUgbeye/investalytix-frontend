"use client";

import { Container } from "@/components/container";
import { APPLE_PROFILE } from "@/features/ticker/data/sample/apple-profile";
import SearchTickerLayout from "@/features/ticker/layouts/search-ticker-layout";
import "swiper/css";

interface SearchTickerScreenProps {
  ticker: string;
}

export default function SearchTickerScreen(props: SearchTickerScreenProps) {
  const { ticker } = props;

  return (
    <SearchTickerLayout isLoading={false} data={APPLE_PROFILE}>
      <Container className="  ">
      </Container>
    </SearchTickerLayout>
  );
}
