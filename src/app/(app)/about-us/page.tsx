import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

const data = [
  {
    category: "Mission & Vision",
    title: "Empowering Every Investor with Premium Research",
    desc: "Established in 2023, investalytix is dedicated to democratizing high-quality investment research and providing a comprehensive suite of tools for investors. Our mission is to make sophisticated investment analysis accessible to everyone, bridging the gap between institutional-grade research and individual investors.",
    img: "",
  },
  {
    category: "Our Platform",
    title: "Your All-in-One Financial Insight Hub",
    desc: "At the core of investalytix is a comprehensive platform offering services like a stock dashboard, advanced charting, real-time financial news, an economic calendar, equity research, options, recommended stock picks, a stock screener, and real-time stock valuation.",
    img: "",
  },
  {
    category: "Our Approach",
    title: "Precision Investing Through Data-Driven Insights",
    desc: "We analyze macroeconomic trends using economic indicators, along with signals from equity, options, bond, currency, and credit markets. Our quantitative models create optimal asset allocations to maximize risk-adjusted returns. By integrating macro insights, quantitative methods, and our platform's advanced tools, we ensure each investment decision is backed by the highest probability of success.",
    img: "",
  },
  {
    category: "Our Philosophy",
    title: "Investment for All Our Inclusive Philosophy",
    desc: "Our philosophy centers on leveling the investment playing field. We believe top-tier research and sophisticated investment tools should be accessible to all, not just the elite. Our commitment is to bridge the divide and make evidence-based investment insights available to everyone.",
    img: "",
  },
];

export default function AboutUsPage() {
  return (
    <main>
      <header className="bg-black/5 dark:bg-white/5 py-24 text-center px-10">
        <h1 className=" text-center text-5xl md:text-8xl lg:text-9xl font-bold">
          Where Finance <br /> Meets Tech.
        </h1>
        <p className="mt-10 text-lg md:text-xl">
          The hub of cutting-edge financial expertise and technological
          innovation in investment analysis.
        </p>
      </header>

      <Container className="">
        {data.map((about, index) => (
          <div
            key={about.category.replaceAll(" ", "-")}
            className={`mt-24 grid gap-10 md:gap-14 grid-rows-[300px,1fr] md:grid-rows-1 ${index % 2 === 0 ? "md:grid-cols-[3fr,2fr] lg:grid-cols-[55%,45%]" : "grid-cols-reverse md:grid-cols-[2fr,3fr] lg:grid-cols-[45%,55%]"}`}
          >
            <div className="rounded-xl bg-gray-200 xl:min-h-[400px]"></div>
            <div className={`${index % 2 === 0 ? "" : "md:-order-1"}`}>
              <h2 className="text-xl font-medium">{about.category}</h2>
              <h3 className="mb-9 mt-4 text-3xl font-bold">{about.title}</h3>
              <p className="">{about.desc}</p>
            </div>
          </div>
        ))}

        <div className="lg:px-24">
          <div className="mt-24">
            <h2 className="mb-8 text-5xl font-bold">Team and Commitment</h2>
            <p>
              Our team reflects our values of thoroughness and dedication. We
              strive to understand the underlying dynamics of market behaviors
              and prove our ideas through tangible evidence and advanced tools.
              <br />
              <br />
              Join us at investalytix to explore our comprehensive platform,
              connect with our expert team, and empower your financial journey
              with data-driven decisions. Together, let’s navigate market
              complexities and stay ahead of the curve.
            </p>
          </div>

          <div className="mt-16 flex flex-col md:flex-row max-md:items-center gap-12 rounded-xl bg-black/5 dark:bg-white/5 px-14 py-20">
            <div className="h-52 w-52 shrink-0 rounded-full bg-black"></div>

            <div className="">
              <p className="text-3xl font-bold max-sm:text-center">About Jimmy Alan</p>
              <p className="mb-3 max-sm:text-center">founder</p>

              <p className="max-sm:text-center">
                Jimmy Alan's journey began as a young 15-year-old Iraqi
                immigrant who escaped the country after the Desert Storm war and
                moved to America. Coming from a poor family, Jimmy faced
                numerous challenges but was determined to build a better future.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <div className="mt-24 bg-black/5 dark:bg-white/5 px-12 py-12">
        <div className="mx-auto max-w-7xl grid max-md:grid-rows-[300px,1fr] md:grid-cols-2 gap-10 md:gap-14">
          <div className="">
            <h1 className="text-3xl">Connect With Us</h1>
            <p className="mb-8 mt-3">
              We're always here to help and answer any questions you might have.
              Please fill out the form below, and we'll get back to you as soon
              as possible.
            </p>

            <Button>Contact us</Button>
          </div>

          <div className="bg-black rounded-xl max-md:-order-1"></div>
        </div>
      </div>
    </main>
  );
}
