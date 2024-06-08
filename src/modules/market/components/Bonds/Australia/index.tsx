import MarketHeading from "../../MarketHeading";
import Quotes from "../../Quotes";

export default function Australia() {
  return (
    /*Australia Government Bonds */
    <>
      <section className="">
        <MarketHeading label="Australia Government Bonds" id="australia" />

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
