// "use client"
import { Container } from "@/components/container";
import Quotes from "@/modules/market/components/Quotes";
import { Quote } from "@/types";

async function getData(url: string) {
  const res = await fetch(url);
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
export default async function PicksPage({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const links = {
    losers: `${process.env.NEXT_PUBLIC_API_BASE_URL}/market/losers`,
    gainers: `${process.env.NEXT_PUBLIC_API_BASE_URL}/market/gainers`,
    "hot picks": `${process.env.NEXT_PUBLIC_API_BASE_URL}/market/gainers`,
    currencies: `${process.env.NEXT_PUBLIC_API_BASE_URL}/market/gainers`,
    cryptocurrency: `${process.env.NEXT_PUBLIC_API_BASE_URL}/market/gainers`,
    "sector performance": `${process.env.NEXT_PUBLIC_API_BASE_URL}/market/gainers`,
    "insider trading": `${process.env.NEXT_PUBLIC_API_BASE_URL}/market/gainers`,
  } as const;
  const keys = Object.keys(links);

  if (keys.includes(searchParams.q)) {
    const data = await getData(links[searchParams.q as keyof typeof links]);
    return (
      <Container>
        <div className="my-20">
          <h1 className="mb-10 text-6xl font-extrabold capitalize">
            {searchParams.q}
          </h1>
          <Quotes
            quotes={data.data}
            fields={[
              { label: "name", key: "name" },
              { label: "symbol", key: "symbol" },
              { label: "price", key: "price" },
              { label: "chg", key: "change" },
              { label: "chg%", key: "changesPercentage" },
            ]}
          />
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className=""></div>
    </Container>
  );
}
