"use client";

import ColoredNumber from "@/components/ui/ColoredNumber";
import { formatCurrency } from "@/lib/utils";
import EconomyLayout from "@/modules/market/components/EconomyLayout";

export default function Screen() {
  return (
    <EconomyLayout
      valueRenderer={(val: number) => {
        return formatCurrency(val);
      }}
      panel={{ parent: "main indicators", child: "GDP Growth Rate" }}
      indicator="GDP Growth Rate"
      short="GDP"
      industry="Bureau of Economic Analysis"
      route="/economy/gdp"
    />
  );
}
