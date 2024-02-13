import Quotes from "../Quotes";

export default function AsiaFX() {
  return (
    <div>
      {/* ASIA - PACIFIC CURRENCY PAIRS */}
      <section className="mt-11">
        <header className="mb-5">
          <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
            ASIA - PACIFIC CURRENCY PAIRS
          </h2>
        </header>

        <Quotes />
      </section>
    </div>
  );
}
