import MarketHeading from "../../MarketHeading";
import Quotes from "../../Quotes";

export default function Germany() {
  return (
    /*German Government Bonds (BUND) */
    <>
      <section className="">
        <MarketHeading label="German Government Bonds (BUND)" id="germany" />

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
              label: "%chg",
              key: "changesPercentage",
            },
          ]}
        />
      </section>
    </>
  );
}
