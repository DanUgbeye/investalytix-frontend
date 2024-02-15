"use client";

import { Container } from "@/components/container";

interface StockDescriptionScreenProps {
  ticker: string;
}

export default function StockDescriptionScreen(
  props: StockDescriptionScreenProps
) {
  const { ticker } = props;

  return <Container className="  ">{ticker}</Container>;
}
