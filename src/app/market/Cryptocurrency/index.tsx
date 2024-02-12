import Quotes from "../Quotes";

export default function Cryptocurrency() {
  return (
    <div>
      {/* CRYPTOCURRENCY PAIRS */}
      <section className="mt-11">
        <header className="mb-5">
          <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
            CRYPTOCURRENCY PAIRS
          </h2>
        </header>

        <Quotes
          fields={[
            {
              label: "Symbol",
              key: "symbol",
            },
            {
              label: "name",
              key: "name",
            },
            {
              label: "price",
              key: "price",
            },
            {
              label: "change",
              key: "change",
            },
            {
              label: "%change",
              key: "changesPercentage",
            },
            {
              label: "previous close",
              key: "previousClose",
            },
          ]}
        />
      </section>
    </div>
  );
}
