import { Quote } from "@/types";
import Quotes, { QuoteField } from "../Quotes";

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/market/commodities/overview`
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
    data: {
      livestock: Quote[];
      agriculture: Quote[];
      energy: Quote[];
      metal: Quote[];
      currency: Quote[];
      index: Quote[];
      interestRate: Quote[];
    };
  }>;
}

export default async function Commodities() {
  const data = await getData();
  const fields: QuoteField[] = [
    {
      label: "Symbol",
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
  ];
  return (
    <>
      {/*ENERGY FUTURES */}
      <section className="">
        <header className="mb-5">
          <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
            ENERGY FUTURES
          </h2>
        </header>

        <Quotes quotes={data.data.energy} fields={fields} />
      </section>

      {/*METAL FUTURES */}
      <section className="mt-11">
        <header className="mb-5">
          <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
            METAL FUTURES
          </h2>
        </header>

        <Quotes quotes={data.data.metal} fields={fields} />
      </section>

      {/*AGRICULTURE FUTURES */}
      <section className="mt-11">
        <header className="mb-5">
          <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
            AGRICULTURE FUTURES
          </h2>
        </header>

        <Quotes quotes={data.data.agriculture} fields={fields} />
      </section>
      {/*LIVESTOCK FUTURES */}
      <section className="mt-11">
        <header className="mb-5">
          <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
            LIVESTOCK FUTURES
          </h2>
        </header>

        <Quotes quotes={data.data.livestock} fields={fields} />
      </section>
      {/*LIVESTOCK FUTURES */}
      {/* <section className="mt-11">
        <header className="mb-5">
          <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
            LIVESTOCK FUTURES
          </h2>
        </header>

        {quote}
      </section> */}
      {/*INDEX FUTURES */}
      <section className="mt-11">
        <header className="mb-5">
          <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
            INDEX FUTURES
          </h2>
        </header>

        <Quotes quotes={data.data.index} fields={fields} />
      </section>
      {/*INTEREST RATE FUTURES */}
      <section className="mt-11">
        <header className="mb-5">
          <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
            INTEREST RATE FUTURES
          </h2>
        </header>

        <Quotes quotes={data.data.interestRate} fields={fields} />
      </section>
    </>
  );
}
