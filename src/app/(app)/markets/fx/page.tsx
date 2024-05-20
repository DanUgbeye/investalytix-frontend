import FX from "@/modules/market/components/FX";
import WithSidePanel, {
  SIDE_SECTIONS,
} from "@/modules/market/components/WithSidePanel";
import { Quote } from "@/types";

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/market/forex`
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

export default async function FXPage() {
  const data = await getData();

  return (
    <main>
      <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
        <FX/>
      </WithSidePanel>
    </main>
  );
}
