import MarketHeading from "../../MarketHeading";
import Quotes from "../../Quotes";

export default function Treasury() {
  return (
    /*U.S TREASURYS */
    <>
      <section className="">
        <MarketHeading label=" U.S TREASURYS" id="treasury" />

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
