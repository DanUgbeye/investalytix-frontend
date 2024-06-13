import { Quote } from "@/types";
import Quotes from "../../Quotes";
import MarketHeading from "../../MarketHeading";

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/market/commodities/agriculture`
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

export default async function Agriculture() {
  const data = await getData();

  return (
    <>
      {/*AGRICULTURE FUTURES */}
      <section className="">
        <MarketHeading label="AGRICULTURE FUTURES" id="agriculture" />

        <Quotes
          quotes={data.data}
          fields={[
            {
              label: "Name",
              key: "name",
            },
            {
              label: "price",
              key: "price",
            },
            {
              label: "chg",
              key: "change",
            },
            {
              label: "%chg",
              key: "changesPercentage",
            },
            {
              label: "volume",
              key: "volume",
            },
          ]}
        />
      </section>
    </>
  );
}
