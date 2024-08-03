"use client";

import ColoredNumber from "@/components/ui/ColoredNumber";
import EconomyLayout from "@/modules/market/components/EconomyLayout";

export default function Screen() {
  return (
    <EconomyLayout
      route="/economy/inflation"
      panel={{ parent: "main indicators", child: "Inflation Rate" }}
      indicator="U.S. Inflation Rate"
      industry=""
      short=""
      valueRenderer={(val: number) => {
        return <ColoredNumber number={val} percent sign decimals={3} />;
      }}
    />
  );
}
