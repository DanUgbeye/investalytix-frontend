import Quotes from "../Quotes";

export default function AmericasFX() {
  return (
    <div>
      {/* CURRENCIES PAIRS */}
      <section className="">
        <header className="mb-5">
          <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
            CURRENCIES PAIRS
          </h2>
        </header>

        <Quotes />
      </section>
    </div>
  );
}
