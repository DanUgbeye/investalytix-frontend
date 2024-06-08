import MarketHeading from "../../MarketHeading";
import Quotes from "../../Quotes";

export default function Canada() {
  return (
    /*Canada Government Bonds */
    <>
      <section className="">
        <MarketHeading label="Canada Government Bonds" id="canada" />

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
