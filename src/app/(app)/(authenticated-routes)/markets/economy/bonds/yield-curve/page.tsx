import ColoredNumber from "@/components/ui/ColoredNumber";
import Economy from "@/modules/market/components/Economy";
import YieldCurve from "@/modules/market/components/Economy/Bonds/YieldCurve";
import MarketHeader from "@/modules/market/components/MarketHeader";
import Screen from "./screen";

export default function YieldCurvePage() {
  return (
    <>
      <MarketHeader name="U.S YIELD CERTIFICATES" active="ECONOMY" />
      <Screen />
    </>
  );
}
