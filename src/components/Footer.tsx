import PAGES from "@/data/page-map";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";

export default function Footer() {
  return (
    <footer className=" bg-black text-white/80 ">
      <Container className=" sm:px-6 xl:px-6">
        <div className=" ">
          <div className="flex flex-wrap justify-between gap-10 py-6 md:gap-20 lg:gap-40">
            <div className="">
              <Link href={PAGES.HOME}>
                <Image
                  src="/assets/logo/logo-with-text.svg"
                  alt="Logo"
                  height={25}
                  width={170}
                />
              </Link>
            </div>

            <div className="flex flex-grow flex-wrap gap-10  sm:justify-between">
              {/* visit */}
              <div className="flex flex-col gap-4 capitalize">
                <p className="text-xs font-bold uppercase">Visit</p>
                <Link className="text-hover-focus" href={PAGES.ABOUT_US}>
                  About us
                </Link>
                <Link className="text-hover-focus" href={PAGES.PRICING}>
                  pricing
                </Link>
                <Link className="text-hover-focus" href={PAGES.NEWS}>
                  News
                </Link>
                <Link className="text-hover-focus" href={PAGES.MARKETS}>
                  markets
                </Link>
              </div>
              {/* products */}
              <div className="flex flex-col gap-4 capitalize">
                <p className="text-xs font-bold uppercase">products</p>
                <Link className="text-hover-focus" href={PAGES.CHART}>
                  chart
                </Link>
                <Link
                  className="text-hover-focus"
                  href={PAGES.ECONOMIC_CALENDAR}
                >
                  economic calendar
                </Link>
              </div>
              {/* news letter */}
              <div className="max-sm:flex-grow">
                <p className="text-2xl max-sm:text-center sm:max-w-[25ch]">
                  Join 50,000+ investors for a FREE market brief
                </p>
                <form className="mt-6 overflow-hidden rounded max-sm:mx-auto max-sm:w-fit max-xs:w-full sm:mx-auto sm:w-fit">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email address"
                    className="rounded-l border border-r-0  border-white/40 bg-white/20 px-4 py-3 outline-none max-xs:mx-auto max-xs:block max-xs:w-[90%] max-xs:rounded-r max-xs:border-r"
                  />
                  <input
                    type="submit"
                    value="Subscribe"
                    className="h-full rounded-r border-y border-y-primary-base bg-primary-base px-4 py-3 text-base font-medium max-xs:mx-auto max-xs:mt-6 max-xs:block max-xs:rounded-l"
                  />
                </form>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-6 border-t border-white/20 py-6">
            <p className="max-sm:flex-grow max-sm:text-center">
              &copy; {new Date().getFullYear()} Investalytix
            </p>

            {/* legal */}
            <div className="flex flex-wrap justify-center gap-4 capitalize max-sm:flex-grow xs:gap-20 md:justify-between">
              <Link className="text-hover-focus" href={PAGES.CHART}>
                Terms and conditions
              </Link>
              <Link className="text-hover-focus" href={PAGES.ECONOMIC_CALENDAR}>
                privacy policy
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
