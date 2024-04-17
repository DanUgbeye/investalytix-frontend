import Quotes from "@/modules/market/components/Quotes";

export default function Americas() {
  return (
    <section>
      {/* STOCK INDEXES */}
      <section className="">
        <header className="mb-5">
          <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
            STOCK INDEXES
          </h2>
        </header>

        <Quotes />
      </section>

      {/* CURRENCIES */}
      <section className="mt-11">
        <header className="mb-5">
          <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
            CURRENCIES
          </h2>
        </header>

        <Quotes />
      </section>

      {/* BONDS & RATES */}
      <section className="mt-11">
        <header className="mb-5">
          <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
            BONDS & RATES
          </h2>
        </header>

        <Quotes />
      </section>
    </section>
  );
}
