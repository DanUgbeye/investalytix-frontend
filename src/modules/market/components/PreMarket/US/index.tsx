import Quotes from "@/modules/market/components/Quotes";

export default function USMarkets() {
  return (
    <section>
      <>
        <Quotes />

        {/* STOCK INDEXES */}
        <section className="mt-11">
          <header className="mb-5">
            <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
              STOCK INDEXES
            </h2>
          </header>

          <Quotes />
        </section>

        {/* COMMODITIES */}
        <section className="mt-11">
          <header className="mb-5">
            <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
              COMMODITIES
            </h2>
          </header>

          <Quotes />
        </section>

        {/* TREASURYS */}
        <section className="mt-11">
          <header className="mb-5">
            <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
              TREASURYS
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
      </>
    </section>
  );
}
