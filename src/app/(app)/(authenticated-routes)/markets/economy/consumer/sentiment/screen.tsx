"use client";

import ColoredNumber from "@/components/ui/ColoredNumber";
import EconomyLayout from "@/modules/market/components/EconomyLayout";

export default function Screen() {
  return (
    <EconomyLayout
      valueRenderer={(val: number) => {
        return <ColoredNumber number={val} colored={false} decimals={2} />;
      }}
      panel={{ parent:"consumer", child: "Consumer Sentiment" }}
      indicator="U.S. Consumer Sentiment"
      industry="University of Michigan"
      route="/economy/consumerSentiment"
    />
  );
}
