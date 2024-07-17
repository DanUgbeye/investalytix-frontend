import USMarkets from "@/modules/market/components/PreMarket/US";
import WithSidePanel, {
  SIDE_SECTIONS,
} from "@/modules/market/components/WithSidePanel";

export default function USPage() {
  return (
    <main>
      <USMarkets />
      <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]} />
    </main>
  );
}
