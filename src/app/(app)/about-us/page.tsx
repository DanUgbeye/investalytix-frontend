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
      title: "High-Quality Research and Comprehensive Tools for All",
      desc: "Established in 2023, investalytix is dedicated to democratizing high-quality investment research and providing a comprehensive suite of tools for investors. Our mission is to make sophisticated investment analysis accessible to everyone, bridging the gap between institutional-grade research and individual investors.",
      img: "/images/mission-vision.jpg",
    },
    {
      category: "Our Platform",
      title: "Comprehensive Platform Offering Advanced Investment Tools",
      desc: "At the core of investalytix is a comprehensive platform offering services like a stock dashboard, advanced charting, real-time financial news, an economic calendar, equity research, options, recommended stock picks, a stock screener, and real-time stock valuation",
      img: "/images/about-platform.jpg",
    },
    {
      category: "Our Approach",
      title: "Analyzing Economic and Market Trends for Asset Allocation",
      desc: "We analyze macroeconomic trends using economic indicators, along with signals from equity, options, bond, currency, and credit markets. Our quantitative models create optimal asset allocations to maximize risk-adjusted returns. By integrating macro insights, quantitative methods, and our platform's advanced tools, we ensure each investment decision is backed by the highest probability of success.",
      img: "/images-approach.jpg",
    },
    {
      category: "Our Philosophy",
      title: "Leveling Investment Playing Field for Every Investor",
      desc: "Our philosophy centers on leveling the investment playing field. We believe top-tier research and sophisticated investment tools should be accessible to all, not just the elite. Our commitment is to bridge the divide and make evidence-based investment insights available to everyone.",
      img: "/images/philosophy.jpg",
    },
  ];

  return (
    <main className="pb-12">
      <header className="bg-black/5 px-10 py-24 text-center dark:bg-white/5">
        <h1 className="text-center text-5xl font-bold md:text-8xl lg:text-9xl">
          About investalytix
        </h1>
        <p className="mx-auto mt-10 max-w-xl text-lg md:text-xl">
          Welcome to investalytix, the hub of cutting-edge financial expertise
          and technological innovation in investment analysis.
        </p>
      </header>

      <Container className="max-w-[1440px]">
        {data.map((about, index) => (
          <div
            key={about.category.replaceAll(" ", "-")}
            className={`mt-24 grid grid-rows-[300px,1fr] items-center gap-10 md:grid-rows-1 md:gap-14 ${index % 2 === 0 ? "md:grid-cols-[3fr,2fr]" : "grid-cols-reverse md:grid-cols-[2fr,3fr]"}`}
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
              with data-driven decisions. Together, let&apos;s navigate market
              complexities and stay ahead of the curve.
            </p>
          </div>

          <AboutAlan />
        </div>
      </Container>

      {false && (
        <div className="mt-24 bg-black/5 px-12 pt-12 dark:bg-white/5">
          <div className="mx-auto grid max-w-7xl items-center gap-10 max-md:grid-rows-[300px,1fr] md:grid-cols-2 md:gap-14">
            <div className="">
              <h1 className="text-6xl font-bold md:text-7xl lg:text-6xl">
                Connect With Us
              </h1>
              <p className="mb-8 mt-3 text-xl">
                We're always here to help and answer any questions you might
                have. Please fill out the form below, and we'll get back to you
                as soon as possible.
              </p>

              <Link
                href="/contact-us"
                className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-md bg-primary-base px-8 py-2 text-lg font-medium text-white ring-offset-white transition-colors duration-300 hover:bg-primary-base/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 md:text-xl dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300"
              >
                Contact us
              </Link>
            </div>

            <div className="h-full rounded-xl bg-black bg-[url('/images/contact-us-2.jpg')] bg-cover bg-center bg-no-repeat max-md:-order-1 md:h-[400px]"></div>
          </div>
        </div>
      )}
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
      <div className="mt-16 flex flex-col gap-12 rounded-xl bg-black/5 px-6 py-10 max-md:items-center md:flex-row md:px-14 md:py-20 dark:bg-white/5">
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

        <div className="fixed inset-0 flex w-screen items-end justify-end overflow-hidden md:h-screen md:items-start md:justify-center">
          <div className="h-full w-full max-sm:max-h-[70vh] md:h-screen md:bg-white dark:bg-black">
            <Dialog.Panel className="h-full w-full overflow-auto">
              <div className="relative mx-auto h-full max-w-4xl rounded-xl">
                {/* content on mobile */}
                <div className="mx-auto grid h-full max-w-xl grid-rows-[max-content,1fr] rounded-t-[40px] bg-white md:hidden dark:bg-black">
                  {/* profile header on mobile */}
                  <div className="flex flex-row items-center gap-6 p-5">
                    <div className="h-20 w-20 shrink-0 rounded-full bg-black dark:bg-white/5"></div>
                    <div className="flex flex-col gap-2">
                      <p className="text-xl">Jimmy Alan</p>
                      <p className="">Founder</p>
                    </div>
                  </div>
                  <div className="h-full overflow-auto px-5 pb-5">
                    <p className="text-justify text-base">
                      Jimmy Alan's journey began as a young 15-year-old Iraqi
                      immigrant who escaped the country after the Desert Storm
                      war and moved to America. Coming from a poor family, Jimmy
                      faced numerous challenges but was determined to build a
                      better future.
                      <br />
                      <br />
                      He pursued a career in Engineering, working across three
                      different industries before making a pivotal transition
                      into Finance. To solidify his expertise, he earned an MBA
                      with a focus in Finance and a specialization in
                      Derivatives. Influenced by legendary investors like
                      Benjamin Graham and Warren Buffett, Jimmy envisioned a
                      platform that would provide precise, real-time stock
                      valuation data and a comprehensive suite of financial
                      analysis tools.
                      <br />
                      <br />
                      Combining his technical expertise with his passion for
                      investment, Jimmy created investalytix. His goal was to
                      offer individual investors and traders the same level of
                      sophisticated research tools and strategies that were
                      traditionally reserved for financial institutions.
                      <br />
                      <br />
                      When he&apos;s not immersed in the world of finance, Jimmy
                      enjoys chilling at the beach and boating. Through
                      investalytix, Jimmy is dedicated to making high-level
                      investment analysis accessible and affordable for all,
                      democratizing financial knowledge and helping investors
                      navigate the complexities of the stock market with
                      confidence.
                    </p>
                  </div>
                </div>

                {/* content on desktop*/}
                <div className="hidden flex-col gap-12 px-5 py-20 md:flex">
                  {/* close btn */}
                  <button
                    onClick={toggleOpen}
                    className="absolute right-5 top-5"
                  >
                    <FiX className="size-6" />
                  </button>
                  <div className="h-52 w-52 shrink-0 rounded-full bg-black md:block dark:bg-white/5"></div>

                  <div className="">
                    <h1 className="mb-3 text-5xl font-bold">Jimmy Alan</h1>
                    <p className="text-justify text-xl">
                      Jimmy Alan's journey began as a young 15-year-old Iraqi
                      immigrant who escaped the country after the Desert Storm
                      war and moved to America. Coming from a poor family, Jimmy
                      faced numerous challenges but was determined to build a
                      better future.
                      <br />
                      <br />
                      He pursued a career in Engineering, working across three
                      different industries before making a pivotal transition
                      into Finance. To solidify his expertise, he earned an MBA
                      with a focus in Finance and a specialization in
                      Derivatives. Influenced by legendary investors like
                      Benjamin Graham and Warren Buffett, Jimmy envisioned a
                      platform that would provide precise, real-time stock
                      valuation data and a comprehensive suite of financial
                      analysis tools.
                      <br />
                      <br />
                      Combining his technical expertise with his passion for
                      investment, Jimmy created investalytix. His goal was to
                      offer individual investors and traders the same level of
                      sophisticated research tools and strategies that were
                      traditionally reserved for financial institutions.
                      <br />
                      <br />
                      When he’s not immersed in the world of finance, Jimmy
                      enjoys chilling at the beach and boating. Through
                      investalytix, Jimmy is dedicated to making high-level
                      investment analysis accessible and affordable for all,
                      democratizing financial knowledge and helping investors
                      navigate the complexities of the stock market with
                      confidence.
                    </p>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
