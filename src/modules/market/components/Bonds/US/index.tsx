import { Quote } from "@/types";
import MarketHeading from "../../MarketHeading";
import Quotes from "../../Quotes";
import Treasurys from "../../Treasurys";

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/market/bonds/usa`
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

// {
//   symbol: 'BWZ',
//   name: 'SPDR Bloomberg Short Term International Treasury Bond ETF',
//   price: 26.0666,
//   exchange: 'New York Stock Exchange Arca',
//   exchangeShortName: 'AMEX',
//   type: 'etf'
// }

export default async function US() {
  const data = await getData();

  return (
    /*U.S TREASURYS */
    <>
      <section className="">
        {/* <MarketHeading label=" U.S. Treasury" id="us" /> */}
        <Treasurys id="us" />

        {/* <Quotes
          quotes={data.data}
          fields={[
            {
              label: "Name",
              key: "name",
            },
            {
              label: "Symbol",
              key: "symbol",
            },
            {
              label: "price",
              key: "price",
            },
            {
              label: "Exchange Short Name",
              key: "exchangeShortName",
            },
            {
              label: "Exchange",
              key: "exchange",
            },
          ]}
        /> */}
      </section>
    </>
  );
}
