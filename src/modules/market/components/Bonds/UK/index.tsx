import MarketHeading from "../../MarketHeading";
import Quotes from "../../Quotes";

export default function UK() {
  return (
    /*U.K. Government Bonds (GILT) */
    <>
      <section className="">
        <MarketHeading label="UK Government Bonds (GILT)" id="uk" />

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
