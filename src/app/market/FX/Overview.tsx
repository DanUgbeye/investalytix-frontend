import Quotes from "../Quotes";
import WithSidePanel, { SIDE_SECTIONS } from "../WithSidePanel";

export default function Overview() {
  return (
    <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
      <div>
        {/* MAJOR CURRENCIES PAIRS */}
        <section className="mt-11">
          <header className="mb-5">
            <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
              MAJOR CURRENCIES PAIRS
            </h2>
          </header>

          <Quotes />
        </section>

        {/* AMERICAS */}
        <section className="mt-11">
          <header className="mb-5">
            <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
              AMERICAS
            </h2>
          </header>

          <Quotes />
        </section>

        {/* ASIA - PACIFIC */}
        <section className="mt-11">
          <header className="mb-5">
            <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
              ASIA - PACIFIC
            </h2>
          </header>

          <Quotes />
        </section>

        {/* EUROPE */}
        <section className="mt-11">
          <header className="mb-5">
            <h2 className="border-l-[6px] border-l-primary-base pl-5 text-2xl font-extrabold">
              EUROPE
            </h2>
          </header>

          <Quotes />
        </section>
      </div>
    </WithSidePanel>
  );
}
