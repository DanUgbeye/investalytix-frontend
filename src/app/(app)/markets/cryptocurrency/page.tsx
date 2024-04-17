import Cryptocurrency from "@/modules/market/components/Cryptocurrency";
import WithSidePanel, {
  SIDE_SECTIONS,
} from "@/modules/market/components/WithSidePanel";
import MarketHeader from "@/modules/market/components/MarketHeader";

export default function CryptocurrencyPage() {
  return (
    <>
      <MarketHeader name="CRYPTOCURRENCY" active="CRYPTOCURRENCY" />

      <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
        <Cryptocurrency />
      </WithSidePanel>
    </>
  );
}
