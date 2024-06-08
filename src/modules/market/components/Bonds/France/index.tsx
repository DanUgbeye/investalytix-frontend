import MarketHeading from "../../MarketHeading";
import Quotes from "../../Quotes";

export default function France() {
  return (
    /*FRANCE Government Bonds */
    <>
      <section className="">
        <MarketHeading label="France Government Bonds" id="france" />

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
