import Quotes from "../../Quotes";

export default function Germany() {
  return (
    /*German Government Bonds (BUND) */
    <section className="mt-11">
      <header className="mb-5">
        <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold uppercase">
          German Government Bonds (BUND)
        </h2>
      </header>

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
            label: "%change",
            key: "changesPercentage",
          },
        ]}
      />
    </section>
  );
}
