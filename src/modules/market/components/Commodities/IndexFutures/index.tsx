import Quotes from "../../Quotes";

export default function IndexFutures() {
  return (
    /*INDEX FUTURES */
    <>
      <section className="">
        <header className="mb-5">
          <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold uppercase">
            INDEX FUTURES
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
          label: "chg",
          key: "change",
        },
        {
          label: "%chg",
          key: "changesPercentage",
        },
        {
          label: "volume",
          key: "volume",
        },
      ]}
    />
      </section>
    </>
  );
}
