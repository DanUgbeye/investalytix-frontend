import IndexFutures from "@/modules/market/components/Commodities/IndexFutures";
import WithSidePanel, {
  SIDE_SECTIONS,
} from "@/modules/market/components/WithSidePanel";
export default function IndexFuturesPage() {
  return (
    <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
      <IndexFutures />
    </WithSidePanel>
  );
}
