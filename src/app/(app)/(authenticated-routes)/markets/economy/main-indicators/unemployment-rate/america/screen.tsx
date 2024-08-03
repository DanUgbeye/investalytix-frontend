"use client";

import ColoredNumber from "@/components/ui/ColoredNumber";
import { formatCurrency } from "@/lib/utils";
import EconomyLayout from "@/modules/market/components/EconomyLayout";

export default function Screen() {
  return (
    <EconomyLayout
      route="/economy/unemploymentRate"
      panel={{ parent: "main indicators", child: "Unemployment Rate" }}
      indicator="United States Unemployment Rate"
      industry="U.S. Bureau of Labor Statistics"
      short=""
      valueRenderer={(val: number) => {
        return formatCurrency(val);
      }}
    />
  );
}
