import Quotes from "../../Quotes";

export default function Brazil() {
  return (
    /*Brazil Government Bonds */
    <>
      <section className="">
        <header className="mb-5">
          <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold uppercase">
            Brazil Government Bonds
          </h2>
        </header>

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
