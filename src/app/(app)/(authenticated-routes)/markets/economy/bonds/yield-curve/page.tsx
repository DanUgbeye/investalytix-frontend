import YieldCurve from "@/modules/market/components/Economy/Bonds/YieldCurve";
import MarketHeader from "@/modules/market/components/MarketHeader";

export default function YieldCurvePage() {
  return(
  <>
    <MarketHeader name="U.S 30 YEAR TREASURY BILL" active="ECONOMY" />
    <YieldCurve />
  </>);
}
