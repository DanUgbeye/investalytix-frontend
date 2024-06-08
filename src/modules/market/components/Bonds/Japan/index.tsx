import MarketHeading from "../../MarketHeading";
import Quotes from "../../Quotes";

export default function Japan() {
  return (
    /*Japan Government Bonds */
    <>
      <section className="">
      <MarketHeading label="Japan Government Bonds" id="japan" />


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
