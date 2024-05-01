import Quotes from "../Quotes";

export default function Commodities() {
  const quote = (
    <Quotes
      fields={[
        {
          label: "Symbol",
          key: "symbol",
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
  );

  return (
    <>
      {/*ENERGY FUTURES */}
      <section className="">
        <header className="mb-5">
          <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
            ENERGY FUTURES
          </h2>
        </header>

        {quote}
      </section>

      {/*METAL FUTURES */}
      <section className="mt-11">
        <header className="mb-5">
          <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
            METAL FUTURES
          </h2>
        </header>

        {quote}
      </section>

      {/*AGRICULTURE FUTURES */}
      <section className="mt-11">
        <header className="mb-5">
          <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
            AGRICULTURE FUTURES
          </h2>
        </header>

        {quote}
      </section>
      {/*LIVESTOCK FUTURES */}
      <section className="mt-11">
        <header className="mb-5">
          <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
            LIVESTOCK FUTURES
          </h2>
        </header>

        {quote}
      </section>
      {/*LIVESTOCK FUTURES */}
      <section className="mt-11">
        <header className="mb-5">
          <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
            LIVESTOCK FUTURES
          </h2>
        </header>

        {quote}
      </section>
      {/*INDEX FUTURES */}
      <section className="mt-11">
        <header className="mb-5">
          <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
            INDEX FUTURES
          </h2>
        </header>

        {quote}
      </section>
      {/*INTEREST RATE FUTURES */}
      <section className="mt-11">
        <header className="mb-5">
          <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
            INTEREST RATE FUTURES
          </h2>
        </header>

        {quote}
      </section>
    </>
  );
}
