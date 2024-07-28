import US from "@/modules/market/components/Bonds/US";
import Commodities from "@/modules/market/components/Commodities";

export default function Screen() {
  return (
    <>
      <US />

      <Commodities className="mt-12"/>
    </>
  );
}
