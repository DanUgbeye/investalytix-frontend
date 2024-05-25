import { Quote } from "@/types";
import Quotes from "../../Quotes";

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/market/commodities/interest-rate-futures`
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

export default async function IntrestRateFutures() {
  const data = await getData();

  return (
    /*INTEREST RATE FUTURES */
    <>
      <section className="">
        <header className="mb-5">
          <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold uppercase">
            INTEREST RATE FUTURES
          </h2>
        </header>

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
