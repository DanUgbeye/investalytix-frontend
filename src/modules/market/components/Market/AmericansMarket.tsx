import { Quote } from "@/types";
import Quotes from "../Quotes";

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/market/forex/america`
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

export async function AmericansMarket() {
  const data = await getData();

  return (
    <section>
      <h2 className="white-text mb-6 mt-8 text-2xl font-bold">
        AMERICAS MARKET
      </h2>
      <div className="grid gap-5 lg:grid-cols-[4fr,3fr]">
        <Quotes quotes={data.data} />
        <div className="text-[#2A3037] dark:text-[#F8F7F7]">
          <p className="border-t border-dashed border-[#D9D9D9] py-4 font-medium dark:border-[#D9D9D9]">
            Stock and bonds markets will see a&apos;year for non consensus in
            2024, technical strategist says
          </p>
          <p className="border-t border-dashed border-[#D9D9D9] py-4 font-medium dark:border-[#D9D9D9]">
            Treasury yields climb as 2024 trading begins
          </p>
          <p className="border-y border-dashed border-[#D9D9D9] py-4 font-medium dark:border-[#D9D9D9]">
            10-year Treasury yield finishes flat near 3.86% as traders wrap up a
            roller coater year.
          </p>
        </div>
      </div>
    </section>
  );
}
