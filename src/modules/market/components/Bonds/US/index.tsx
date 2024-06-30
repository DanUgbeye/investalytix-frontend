import MarketHeading from "../../MarketHeading";
import Quotes from "../../Quotes";

export default function US() {
  return (
    /*U.S TREASURYS */
    <>
      <section className="">
        <MarketHeading label=" U.S" id="us" />

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
