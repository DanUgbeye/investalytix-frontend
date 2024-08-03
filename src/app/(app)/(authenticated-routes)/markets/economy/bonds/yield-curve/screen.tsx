"use client";

import ColoredNumber from "@/components/ui/ColoredNumber";
import EconomyLayout from "@/modules/market/components/EconomyLayout";

export default function Screen() {
  return (
    <EconomyLayout
      valueRenderer={(val: number) => {
        return <ColoredNumber number={val} colored={false} decimals={2} />;
      }}
      panel={{ parent: "bonds", child: "Yield Curve" }}
      indicator="U.S Yields Certificates"
      route="/economy/YieldsCertificates"
    />
  );
}
