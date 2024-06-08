import Metals from "@/modules/market/components/Commodities/Metals";
import MarketSelector from "@/modules/market/components/MarketSelector";
import MarketSubLinks from "@/modules/market/components/MarketSubLinks";
import data from "../data";

export default function MetalsPage() {
  return (
    <>
      <MarketSelector
        selectors={data.selectors}
        className="mb-10"
        active={"METALS"}
      />

      <main>
        <Metals />
      </main>
    </>
  );
}
