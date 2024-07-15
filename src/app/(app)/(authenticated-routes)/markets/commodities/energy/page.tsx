import MarketSelector from "@/modules/market/components/MarketSelector";
import data from "../data";

export default function EnergyPage() {
  return (
    <>
      <MarketSelector
        selectors={data.selectors}
        className="mb-10"
        active={"ENERGY"}
      />
    </>
  );
}
