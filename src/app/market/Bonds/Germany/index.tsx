import Quotes from "../../Quotes";
import WithSidePanel, { SIDE_SECTIONS } from "../../WithSidePanel";

export default function Germany() {
  return (
    /*German Government Bonds (BUND) */
    <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
      <section className="">
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
    </WithSidePanel>
  );
}
