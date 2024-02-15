import Quotes from "../Quotes";
import WithSidePanel, { SIDE_SECTIONS } from "../WithSidePanel";

export default function EuropeFX() {
  return (
    <WithSidePanel sections={SIDE_SECTIONS["TRENDING_NOW"]}>
      <div>
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
