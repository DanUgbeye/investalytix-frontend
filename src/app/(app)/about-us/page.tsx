"use client";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Dialog } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";
import { FiX } from "react-icons/fi";

export default function AboutUsPage() {
  const data = [
    {
      category: "Mission & Vision",
      title: "Empowering Every Investor with Premium Research",
      desc: "Established in 2023, investalytix is dedicated to democratizing high-quality investment research and providing a comprehensive suite of tools for investors. Our mission is to make sophisticated investment analysis accessible to everyone, bridging the gap between institutional-grade research and individual investors.",
      img: "/images/mission-vision.jpg",
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
  return (
    <main>
      <header className="bg-black/5 px-10 py-24 text-center dark:bg-white/5">
        <h1 className=" text-center text-5xl font-bold md:text-8xl lg:text-9xl">
          Where Finance <br /> Meets Tech.
        </h1>
        <p className="mt-10 text-lg md:text-xl">
          The hub of cutting-edge financial expertise and technological
          innovation in investment analysis.
        </p>
      </header>

      <Container className="max-w-[1440px]">
        {data.map((about, index) => (
          <div
            key={about.category.replaceAll(" ", "-")}
            className={`mt-24 grid grid-rows-[300px,1fr] items-center gap-10 md:grid-rows-1 md:gap-14 ${index % 2 === 0 ? "md:grid-cols-[3fr,2fr]" : "grid-cols-reverse md:grid-cols-[2fr,3fr] "}`}
          >
            <div
              className={`h-full rounded-xl bg-gray-200 bg-cover bg-center bg-no-repeat xl:min-h-[400px]`}
              style={{ backgroundImage: `url('${about.img}')` }}
            ></div>
            <div className={`${index % 2 === 0 ? "" : "md:-order-1"}`}>
              <h2 className="text-xl font-medium">{about.category}</h2>
              <h3 className="mb-9 mt-4 text-3xl font-bold">{about.title}</h3>
              <p className="lg:text-xl">{about.desc}</p>
            </div>
          </div>
        ))}

        <div className="lg:px-24">
          <div className="mt-24">
            <h2 className="mb-8 text-5xl font-bold">Team and Commitment</h2>
            <p className="text-xl">
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

          <AboutAlan />
        </div>
      </Container>

      <div className="mt-24 bg-black/5 px-12 py-12 dark:bg-white/5">
        <div className="mx-auto grid max-w-7xl items-center gap-10 max-md:grid-rows-[300px,1fr] md:grid-cols-2 md:gap-14">
          <div className="">
            <h1 className="text-6xl font-bold md:text-7xl lg:text-6xl">
              Connect With Us
            </h1>
            <p className="mb-8 mt-3 text-xl">
              We're always here to help and answer any questions you might have.
              Please fill out the form below, and we'll get back to you as soon
              as possible.
            </p>

            <Link
              href="/contact-us"
              className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-md bg-primary-base px-8 py-2 text-lg font-medium text-white ring-offset-white transition-colors duration-300 hover:bg-primary-base/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 md:text-xl dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300"
            >
              Contact us
            </Link>
          </div>

          <div className="rounded-xl bg-black bg-[url('/images/contact-us-2.jpg')] bg-cover bg-center bg-no-repeat max-md:-order-1 md:h-[400px]"></div>
        </div>
      </div>
    </main>
  );
}

function AboutAlan() {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((s) => !s);
  };
  return (
    <>
      <div className="mt-16 flex flex-col gap-12 rounded-xl bg-black/5 px-14 py-20 max-md:items-center md:flex-row dark:bg-white/5">
        <div className="h-52 w-52 shrink-0 rounded-full bg-black"></div>

        <div className="">
          <p className="text-3xl font-bold max-sm:text-center">
            About Jimmy Alan
          </p>
          <p className="mb-3 max-sm:text-center">founder</p>

          <p className="text-xl max-sm:text-center">
            Jimmy Alan's journey began as a young 15-year-old Iraqi immigrant
            who escaped the country after the Desert Storm war and moved to
            America. Coming from a poor family, Jimmy faced numerous challenges
            but was determined to build a better future.
          </p>

          <button
            onClick={toggleOpen}
            className="bg-hover-focus mt-2 rounded-md px-2 py-1 text-primary-base"
          >
            read more
          </button>
        </div>
      </div>

      <Dialog open={open} onClose={toggleOpen} className="relative z-[99999]">
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm"
          aria-hidden="true"
        />

        <div className="fixed inset-0 flex h-screen w-screen items-start justify-center overflow-hidden">
          <div className="h-screen w-full overflow-auto bg-white">
            <Dialog.Panel className="w-full h-full">
              <div className="mx-auto flex max-w-4xl flex-col gap-12 rounded-xl md:flex-row relative px-5 md:px-14 py-20">
                {/* close btn */}
                <button onClick={toggleOpen} className="absolute top-5 right-5">
                  <FiX className="size-6" />
                </button>

                <div className="h-52 w-52 shrink-0 rounded-full bg-black"></div>

                <div className="">
                  <h1 className="mb-3 text-5xl font-bold">Jimmy Alan</h1>
                  <p className="text-xl">
                    Jimmy Alan's journey began as a young 15-year-old Iraqi
                    immigrant who escaped the country after the Desert Storm war
                    and moved to America. Coming from a poor family, Jimmy faced
                    numerous challenges but was determined to build a better
                    future.
                    <br />
                    <br />
                    He pursued a career in Engineering, working across three
                    different industries before making a pivotal transition into
                    Finance. To solidify his expertise, he earned an MBA with a
                    focus in Finance and a specialization in Derivatives.
                    Influenced by legendary investors like Benjamin Graham and
                    Warren Buffett, Jimmy envisioned a platform that would
                    provide precise, real-time stock valuation data and a
                    comprehensive suite of financial analysis tools.
                    <br />
                    <br />
                    Combining his technical expertise with his passion for
                    investment, Jimmy created investalytix. His goal was to
                    offer individual investors and traders the same level of
                    sophisticated research tools and strategies that were
                    traditionally reserved for financial institutions.
                    <br />
                    <br />
                    When he’s not immersed in the world of finance, Jimmy enjoys
                    chilling at the beach and boating. Through investalytix,
                    Jimmy is dedicated to making high-level investment analysis
                    accessible and affordable for all, democratizing financial
                    knowledge and helping investors navigate the complexities of
                    the stock market with confidence.
                  </p>
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
