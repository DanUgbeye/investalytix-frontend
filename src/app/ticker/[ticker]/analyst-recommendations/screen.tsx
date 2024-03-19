"use client";

interface AnalystRecommendationScreenProps {
  ticker: string;
}

export default function AnalystRecommendationScreen(
  props: AnalystRecommendationScreenProps
) {
  const { ticker } = props;

  return <div className="  ">{ticker}</div>;
}
