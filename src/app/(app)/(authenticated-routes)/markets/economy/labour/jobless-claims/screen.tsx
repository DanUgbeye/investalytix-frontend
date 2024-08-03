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
      panel={{ parent: "labour", child: "Initial Jobless Claims" }}
      indicator="Initial Jobless Claims"
      // industry="University of Michigan"
      date="DD-MM-YYYY"
      route="/economy/initialClaims"
    />
  );
}
