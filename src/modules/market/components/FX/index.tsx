import Quotes from "@/modules/market/components/Quotes";
import { Quote } from "@/types";

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/market/forex/overview`
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
      american: Quote[];
      europe: Quote[];
      asian: Quote[];
    };
  }>;
}

export default async function FX() {
  const data = await getData();

  return (
    <div>
      {/* MAJOR CURRENCIES PAIRS */}
      <section className="">
        <header className="mb-5">
          <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
            MAJOR CURRENCIES PAIRS
          </h2>
        </header>

        <Quotes />
      </section>

      {/* AMERICAS */}
      <section className="mt-11">
        <header className="mb-5">
          <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
            AMERICAS
          </h2>
        </header>

        <Quotes quotes={data.data.american} />
      </section>

      {/* ASIA - PACIFIC */}
      <section className="mt-11">
        <header className="mb-5">
          <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
            ASIA - PACIFIC
          </h2>
        </header>

        <Quotes quotes={data.data.asian} />
      </section>

      {/* EUROPE */}
      <section className="mt-11">
        <header className="mb-5">
          <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
            EUROPE
          </h2>
        </header>

        <Quotes quotes={data.data.europe} />
      </section>
    </div>
  );
}
