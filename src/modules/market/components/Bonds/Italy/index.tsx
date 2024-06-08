import MarketHeading from "../../MarketHeading";
import Quotes from "../../Quotes";

export default function Italy() {
  return (
    /*ITALY Government Bonds */
    <>
      <section className="">
        <MarketHeading label="Italy Government Bonds" id="italy" />

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
