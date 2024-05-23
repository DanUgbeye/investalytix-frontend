import Cryptocurrency from "@/modules/market/components/Cryptocurrency";
import WithSidePanel, {
  SIDE_SECTIONS,
} from "@/modules/market/components/WithSidePanel";
import MarketHeader from "@/modules/market/components/MarketHeader";
import { Quote } from "@/types";

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/market/crypto`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json() as Promise<{
    message: String;
    status: number;
    data: Quote[];
  }>;
}

export default async function CryptocurrencyPage() {
  const data = await getData();
  return (
    <>
      <MarketHeader name="CRYPTOCURRENCY" active="CRYPTOCURRENCY" />

      <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
        <Cryptocurrency quotes={data.data} />
      </WithSidePanel>
    </>
  );
}
