import MarketHeading from "../../MarketHeading";
import Quotes from "../../Quotes";

export default function Brazil() {
  return (
    /*Brazil Government Bonds */
    <>
      <section className="">
        <MarketHeading label="Brazil Government Bonds" id="brazil" />

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
