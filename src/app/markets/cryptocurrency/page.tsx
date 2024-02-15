import Cryptocurrency from "@/modules/markets/Cryptocurrency";
import WithSidePanel, {
  SIDE_SECTIONS,
} from "../../../modules/markets/WithSidePanel";
import MarketHeader from "../../../modules/markets/MarketHeader";

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
